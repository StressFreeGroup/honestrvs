// Live availability and direct booking, powered by RVFMS (app.rvfms.com).
// RVFMS is the source of truth: it knows every booking, RVshare / Wheelbase calendar block
// and owner hold, and it builds the quote the renter accepts and pays.
export const RVFMS_BOOK = 'https://app.rvfms.com/api/book'
export const RVFMS_ORG = 'honestrvs'

const get = async (params) => {
  const r = await fetch(`${RVFMS_BOOK}?${new URLSearchParams({ org: RVFMS_ORG, ...params })}`)
  const d = await r.json().catch(() => ({}))
  if (!r.ok) throw new Error(d.error || 'Live availability is not reachable right now.')
  return d
}

// {slug: {code, available, reason, price:{total, nights, ...}}} for the chosen dates.
export async function availability(start, end) {
  const d = await get({ start, end })
  const map = {}
  for (const u of d.units || []) if (u.slug) map[u.slug] = u
  return { error: d.error || null, units: map }
}

// Booked ranges for one RV, so the date fields can warn before anyone fills the form.
export async function bookedRanges(code) {
  const d = await get({ unit: code })
  return d.booked || []
}

// RVFMS unit code for a website slug.
let _codes = null
export async function codeFor(slug) {
  if (!_codes) {
    const d = await get({})
    _codes = Object.fromEntries((d.units || []).filter((u) => u.slug).map((u) => [u.slug, u.code]))
  }
  return _codes[slug] || null
}

export const overlapsAny = (start, end, ranges) => ranges.some((b) => start < b.end && b.start < end)

// Sends the request. Returns {quote_url, quote_number, total} or throws with a friendly message.
export async function requestBooking(payload) {
  const r = await fetch(RVFMS_BOOK, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ org: RVFMS_ORG, ...payload }),
  })
  const d = await r.json().catch(() => ({}))
  if (!r.ok) throw new Error(d.error || 'Something went wrong. Please call or text us.')
  return d
}
