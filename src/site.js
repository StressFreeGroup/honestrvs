// Shared site facts. Used by the React app and by scripts/seo.mjs at build time,
// so the page, the structured data and llms.txt always say the same thing.

export const SITE_URL = 'https://www.alwayshonestrvs.com'
export const BRAND = 'Always Honest RV Rentals'
export const PHONE = '619-992-0289'
export const EMAIL = 'honestrvrentals@gmail.com'
export const OWNER = 'Ekaterina Zvezdova'
export const PICKUP_NAME = 'Sycuan Casino Resort'
export const PICKUP_STREET = '5469 Casino Way'
export const PICKUP_CITY = 'El Cajon'
export const PICKUP_REGION = 'CA'
export const PICKUP_ZIP = '92019'
export const TRIP_PREP = 199
export const ESSENTIALS = 99
export const TAX_RATE = 0.0875
export const PROCESSING_RATE = 0.10

const rateRange = (fleet, test) => {
  const r = fleet.filter(v => v.price && test(v.type)).map(v => v.price)
  return r.length ? [Math.min(...r), Math.max(...r)] : null
}
const fmtRange = r => (r[0] === r[1] ? `$${r[0]}` : `$${r[0]} to $${r[1]}`)

export const faqItems = (fleet) => {
  const tt = rateRange(fleet, t => t === 'Travel Trailer')
  const fw = rateRange(fleet, t => t === 'Fifth Wheel' || t === 'Toy Hauler')
  const cc = rateRange(fleet, t => t === 'Class C')
  const all = rateRange(fleet, () => true)
  return [
    {
      q: 'How much does it cost to rent an RV in San Diego?',
      a: `Nightly rates at ${BRAND} run ${fmtRange(all)} per night${tt ? `: travel trailers ${fmtRange(tt)}` : ''}${fw ? `, fifth wheels and toy haulers ${fmtRange(fw)}` : ''}${cc ? `, Class C motorhomes ${fmtRange(cc)}` : ''}. Every trip also includes a $${TRIP_PREP} trip preparation charge and $${ESSENTIALS} Interior Essentials once per trip, plus 10% system processing and 8.75% taxes. The website shows the full TOTAL for 1 to 7 nights so there are no surprise fees. Holiday and special event dates are priced higher.`
    },
    {
      q: 'What is included in the BASE STANDARD package?',
      a: 'The nightly rental rate, a smart TV upgrade with streaming (Wi-Fi or hotspot required), essential supplies, a tutorial orientation walkthrough, trip start and trip end inspections, commercial coverage insurance or an insurance waiver for deliveries, an interior damage protection liability waiver for common occurrences, system processing and taxes. Every RV is professionally cleaned inside and washed outside between rentals, and starts each trip with full propane and full fuel.'
    },
    {
      q: 'What essential supplies come with every rental?',
      a: 'Outdoor: power cable, fresh water hose and septic hose (blocks and chocks on request). Indoor: septic-safe toilet paper, hand soap, dish soap, sponge, paper towel roll, surface wipes, a pot and a pan, 4 camping sets of plates, bowls, cups and silverware, a small trash can with garbage bag, and a broom and mop. Extra camping sets are free on request the day of pickup.'
    },
    {
      q: 'Where do I pick up and return the RV?',
      a: `Pickup and return are at ${PICKUP_NAME}, ${PICKUP_STREET}, ${PICKUP_CITY}, ${PICKUP_REGION} ${PICKUP_ZIP}. Pickup is at 2:00 PM and return is by 12:00 PM. Early pickup and late return can be requested as add-ons.`
    },
    {
      q: 'Do you deliver RVs and trailers?',
      a: 'Yes. Trailers can be delivered, set up and picked up at your campsite in the San Diego area for $399. Ask about other locations.'
    },
    {
      q: 'What is the cancellation policy?',
      a: 'Cancel the same day you book for a free full refund. Cancel 30 or more days before your trip and your payment becomes a future trip credit, less the 10% system processing. Within 30 days of your trip, bookings are non-refundable. Extenuating circumstances and emergencies are reviewed case by case.'
    },
    {
      q: 'Is there a discount for paying directly?',
      a: 'Yes. Pay direct with Zelle to honestrvrentals@gmail.com (Always Honest RV Rentals) and the 10% system processing is waived. Put your trip dates or quote number in the Zelle memo.'
    },
    {
      q: 'How many miles and generator hours are included?',
      a: 'Motorhomes include 150 miles per night ($0.35 per mile after) and 6 generator hours per night ($5 per hour after). Travel trailers and fifth wheels have unlimited mileage.'
    },
    {
      q: 'Are dogs allowed?',
      a: 'Dogs are welcome with approval for a $100 fee per dog. Service animals are free.'
    },
    {
      q: 'Can I tow a trailer myself?',
      a: 'Yes, if your vehicle is rated to tow the trailer and has a brake controller and the right hitch. Each listing shows the towing requirement. Not sure? Ask before you book, or add delivery and setup.'
    }
  ]
}
