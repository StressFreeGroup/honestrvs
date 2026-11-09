// Post-build: structured data, per-RV pages, sitemap, robots and llms.txt.
// Reads the same fleet + site facts as the app so nothing drifts.
import fs from 'node:fs'
import path from 'node:path'
import * as site from '../src/site.js'

const dist = path.resolve('dist')
const fleet = JSON.parse(fs.readFileSync('src/fleet.json', 'utf8'))
const { SITE_URL, BRAND, PHONE, EMAIL, OWNER } = site
const today = new Date().toISOString().slice(0, 10)
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const ld = obj => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`

const address = {
  '@type': 'PostalAddress', streetAddress: site.PICKUP_STREET, addressLocality: site.PICKUP_CITY,
  addressRegion: site.PICKUP_REGION, postalCode: site.PICKUP_ZIP, addressCountry: 'US'
}
const business = {
  '@context': 'https://schema.org',
  '@type': ['AutoRental', 'LocalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: BRAND,
  alternateName: ['Always Honest RVs', 'Honest RV Rentals'],
  url: SITE_URL + '/',
  logo: `${SITE_URL}/images/always-honest-rv-rentals-logo.png`,
  image: `${SITE_URL}/images/og-image.jpg`,
  description: 'San Diego RV rentals with clear, transparent pricing: fifth wheels, toy haulers, travel trailers and Class A, B and C motorhomes. One TOTAL price with essentials included and no surprise fees.',
  slogan: 'San Diego RV Rentals, Straightforward',
  telephone: '+1-' + PHONE,
  email: EMAIL,
  founder: { '@type': 'Person', name: OWNER, jobTitle: 'Owner' },
  address,
  areaServed: [{ '@type': 'AdministrativeArea', name: 'San Diego County, CA' }, { '@type': 'City', name: 'San Diego' }, { '@type': 'City', name: 'El Cajon' }],
  priceRange: `$${Math.min(...fleet.filter(v => v.price).map(v => v.price))} to $${Math.max(...fleet.filter(v => v.price).map(v => v.price))} per night`,
  paymentAccepted: 'Credit card, Zelle',
  makesOffer: fleet.filter(v => v.price).map(v => ({
    '@type': 'Offer',
    url: `${SITE_URL}/rv/${v.slug}`,
    priceSpecification: { '@type': 'UnitPriceSpecification', price: v.price, priceCurrency: 'USD', unitText: 'night' },
    itemOffered: { '@type': 'Product', name: v.name, category: v.type }
  }))
}
const faq = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: site.faqItems(fleet).map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
}
const website = { '@context': 'https://schema.org', '@type': 'WebSite', name: BRAND, url: SITE_URL + '/', publisher: { '@id': `${SITE_URL}/#business` } }

const vehicleLd = v => ({
  '@context': 'https://schema.org',
  '@type': ['Product', 'Vehicle'],
  name: v.name,
  description: v.description,
  url: `${SITE_URL}/rv/${v.slug}`,
  image: [v.cover, ...v.images.slice(0, 5)].filter(Boolean).map(i => SITE_URL + i),
  brand: { '@type': 'Brand', name: v.name.split(' ').slice(1, 3).join(' ') },
  vehicleModelDate: v.name.slice(0, 4),
  bodyType: v.type,
  vehicleSeatingCapacity: v.sleeps,
  ...(v.price ? { offers: { '@type': 'Offer', priceCurrency: 'USD', price: v.price, availability: 'https://schema.org/InStock', url: `${SITE_URL}/rv/${v.slug}`, seller: { '@id': `${SITE_URL}/#business` }, priceSpecification: { '@type': 'UnitPriceSpecification', price: v.price, priceCurrency: 'USD', unitText: 'night' } } } : {})
})

const noscriptHome = `<noscript><h1>${BRAND}: San Diego RV Rentals</h1><p>${esc(business.description)}</p><ul>${fleet.map(v => `<li><a href="/rv/${v.slug}">${esc(v.name)}</a>${v.price ? ` from $${v.price}/night` : ''}, sleeps ${v.sleepsLabel}</li>`).join('')}</ul><p>Call or text ${PHONE}.</p></noscript>`

const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
fs.writeFileSync(path.join(dist, 'index.html'),
  base.replace('<!--SEO_JSONLD-->', [ld(business), ld(website), ld(faq)].join('\n    ')).replace('<!--SEO_NOSCRIPT-->', noscriptHome))

for (const v of fleet) {
  const url = `${SITE_URL}/rv/${v.slug}`
  const title = `${v.name} Rental in San Diego | ${v.price ? '$' + v.price + '/night | ' : ''}${BRAND}`
  const desc = `Rent the ${v.name} in San Diego. ${v.type}, sleeps ${v.sleepsLabel}, ${v.length}. ${v.description}`.slice(0, 300)
  const img = SITE_URL + (v.cover || v.images[0])
  const crumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name: 'Fleet', item: SITE_URL + '/#fleet' },
    { '@type': 'ListItem', position: 3, name: v.name, item: url }] }
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:type" content=")[^"]*/, '$1product')
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${img}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${img}`)
    .replace('<!--SEO_JSONLD-->', [ld(vehicleLd(v)), ld(crumbs), ld(business)].join('\n    '))
    .replace('<!--SEO_NOSCRIPT-->', `<noscript><h1>${esc(v.name)}</h1><p>${esc(v.description)}</p><p>${v.price ? `$${v.price} per night. ` : ''}Sleeps ${v.sleepsLabel}. Call or text ${PHONE}.</p></noscript>`)
  const dir = path.join(dist, 'rv', v.slug)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
}

const urls = [{ loc: SITE_URL + '/', pri: '1.0' }, ...fleet.map(v => ({ loc: `${SITE_URL}/rv/${v.slug}`, pri: '0.8', img: v.cover || v.images[0], title: v.name }))]
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.pri}</priority>${u.img ? `<image:image><image:loc>${SITE_URL}${u.img}</image:loc><image:title>${esc(u.title)}</image:title></image:image>` : ''}</url>`).join('\n')}
</urlset>
`)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`)

const faqs = site.faqItems(fleet)
fs.writeFileSync(path.join(dist, 'llms.txt'), `# ${BRAND}

> San Diego RV rentals with clear, transparent pricing. Owner: ${OWNER}. Phone/text: ${PHONE}. Email: ${EMAIL}. Pickup and return: ${site.PICKUP_NAME}, ${site.PICKUP_STREET}, ${site.PICKUP_CITY}, ${site.PICKUP_REGION} ${site.PICKUP_ZIP}.

Every trip is quoted as one TOTAL: nightly rate + $${site.TRIP_PREP} trip preparation + $${site.ESSENTIALS} Interior Essentials (once per trip), plus 10% system processing and 8.75% taxes. Paying direct with Zelle waives the 10% processing. Holiday and special event dates are priced higher.

## Fleet
${fleet.map(v => `- [${v.name}](${SITE_URL}/rv/${v.slug}): ${v.type}, sleeps ${v.sleepsLabel}, ${v.length}${v.price ? `, $${v.price}/night` : ''}. ${v.description}`).join('\n')}

## FAQ
${faqs.map(f => `### ${f.q}\n${f.a}`).join('\n\n')}

## Pages
- [Home and fleet](${SITE_URL}/)
- [Pricing](${SITE_URL}/#pricing)
- [What's included](${SITE_URL}/#included)
- [Optional add-ons](${SITE_URL}/#addons)
- [Cancellation policy](${SITE_URL}/#cancellation)
- [FAQ](${SITE_URL}/#faq)
`)
console.log(`seo: ${fleet.length} RV pages, sitemap, robots, llms.txt`)
