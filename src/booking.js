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

// RVFMS unit code for a website slug, and how this company takes bookings
// ('request' = quote to accept and pay, 'instant' = pay now and it is confirmed).
let _info = null
async function info() {
  if (!_info) {
    const d = await get({})
    _info = { mode: d.org?.booking_mode || 'request', hold: d.org?.hold_hours || 12, codes: Object.fromEntries((d.units || []).filter((u) => u.slug).map((u) => [u.slug, u.code])) }
  }
  return _info
}
export async function codeFor(slug) { return (await info()).codes[slug] || null }
export async function bookingMode() { return (await info().catch(() => ({ mode: 'request' }))).mode }
export async function holdHours() { return (await info().catch(() => ({ hold: 12 }))).hold }

export const overlapsAny = (start, end, ranges) => ranges.some((b) => start < b.end && b.start < end)

// Sends the booking. Returns {mode, quote_url, quote_number, total, pay_url?} or throws with a friendly message.
// In instant mode pay_url is Stripe Checkout: send the renter there.
export async function requestBooking(payload) {
  const r = await fetch(RVFMS_BOOK, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ org: RVFMS_ORG, ...payload }),
  })
  const d = await r.json().catch(() => ({}))
  if (!r.ok) throw new Error(d.error || 'Something went wrong. Please call or text us.')
  return d
}
