import { useState, useEffect } from 'react'

// RV Fleet Data
const rvs = [
  {
    id: 1,
    slug: 'solitude-391dl',
    name: '2024 Grand Design Solitude 391DL',
    type: 'Fifth Wheel',
    sleeps: 6,
    image: '/images/solitude-391dl.jpg',
    floorplan: '/images/floorplans/solitude-391dl-floorplan.jpg',
    price: 275,
    badges: ['NEW'],
    length: '41\'',
    slides: 4,
    description: 'Luxury fifth wheel with residential features, rear living room, and spacious master suite.',
    features: ['Residential fridge', 'Washer/Dryer prep', 'Fireplace', 'Theater seating', 'King bed']
  },
  {
    id: 2,
    slug: 'solitude-390rk',
    name: '2023 Grand Design Solitude 390RK',
    type: 'Fifth Wheel',
    sleeps: 4,
    image: '/images/solitude-390rk.jpg',
    floorplan: '/images/floorplans/solitude-390rk-floorplan.png',
    price: 265,
    badges: ['Luxury'],
    length: '42\'',
    slides: 4,
    description: 'Premium rear kitchen layout with exceptional living space and high-end finishes throughout.',
    features: ['Rear kitchen', 'Island cooktop', 'Free-standing dinette', 'Residential shower', 'Central vacuum']
  },
  {
    id: 3,
    slug: 'momentum-29g',
    name: '2021 Grand Design Momentum 29G',
    type: 'Toy Hauler',
    sleeps: 8,
    image: '/images/momentum-29g.jpg',
    floorplan: '/images/floorplans/momentum-29g-floorplan.jpg',
    price: 245,
    badges: ['Toy Hauler'],
    length: '34\'',
    slides: 1,
    description: 'Versatile toy hauler with 10\' garage, perfect for ATVs, motorcycles, or extra sleeping space.',
    features: ['10\' garage', 'Fuel station', 'Happi-Jac bed system', 'Party deck', 'Generator ready']
  },
  {
    id: 4,
    slug: 'crosstrail-23xg',
    name: '2022 Coachmen Cross Trail 23XG',
    type: 'Class B+',
    sleeps: 4,
    image: '/images/crosstrail-23xg.jpg',
    floorplan: '/images/floorplans/crosstrail-23xg-floorplan.jpg',
    price: 225,
    badges: ['Adventure'],
    length: '24\'',
    slides: 0,
    description: 'Nimble Class B+ with AWD chassis, perfect for couples seeking adventure off the beaten path.',
    features: ['AWD capable', 'Solar ready', 'Murphy bed', 'Wet bath', 'Rear cargo area']
  },
  {
    id: 5,
    slug: 'outlook-25j',
    name: '2019 Winnebago Outlook 25J',
    type: 'Class C',
    sleeps: 6,
    image: '/images/outlook-25j.jpg',
    floorplan: '/images/floorplans/outlook-25j-floorplan.jpg',
    price: 195,
    badges: ['Family'],
    length: '27\'',
    slides: 1,
    description: 'Family-friendly Class C with smart floorplan and reliable Winnebago quality.',
    features: ['Cab-over bunk', 'Slide-out dinette', 'Rear bedroom', 'Outside kitchen', 'Backup camera']
  },
  {
    id: 7,
    slug: 'sequence-20j',
    name: '2022 Thor Sequence 20J',
    type: 'Class B',
    sleeps: 2,
    image: '/images/sequence-20j.jpg',
    floorplan: null,
    price: 185,
    badges: ['Couples'],
    length: '21\'',
    slides: 0,
    description: 'Compact yet comfortable Class B van, easy to drive and park anywhere.',
    features: ['Pop-top roof', 'Swivel cab seats', 'Wet bath', 'Induction cooktop', 'Convertible bed']
  },
  {
    id: 8,
    slug: 'redhawk-26m',
    name: '2021 Jayco Redhawk 26M',
    type: 'Class C',
    sleeps: 6,
    image: '/images/redhawk-26m.jpg',
    floorplan: '/images/floorplans/redhawk-26xd-floorplan.jpg',
    price: 205,
    badges: ['Bunkhouse'],
    length: '28\'',
    slides: 1,
    description: 'Well-equipped bunkhouse model ideal for families with separate sleeping areas.',
    features: ['Bunk beds', 'Cab-over bunk', 'Full kitchen', 'Outside entertainment', 'JRIDE handling']
  },
  {
    id: 9,
    slug: 'redhawk-26xd',
    name: '2019 Jayco Redhawk 26XD',
    type: 'Class C',
    sleeps: 8,
    image: '/images/redhawk-26xd.jpg',
    floorplan: '/images/floorplans/redhawk-26xd-floorplan.jpg',
    price: 195,
    badges: ['Bunkhouse'],
    length: '28\'',
    slides: 1,
    description: 'Spacious Class C with double bunk setup, sleeps the whole crew comfortably.',
    features: ['Double bunks', 'Cab-over bed', 'U-dinette', 'Large fridge', 'Outside shower']
  },
  {
    id: 10,
    slug: 'freelander-31bh',
    name: '2019 Coachmen Freelander 31BH',
    type: 'Class C',
    sleeps: 10,
    image: '/images/freelander-31bh.jpg',
    floorplan: '/images/floorplans/freelander-31bh-floorplan.jpg',
    price: 215,
    badges: ['Large Group'],
    length: '32\'',
    slides: 2,
    description: 'Maximum sleeping capacity for large groups with spacious dual slide-out design.',
    features: ['Sleeps 10', 'Dual slides', 'Bunk beds', 'Cab-over bed', 'Large basement storage']
  },
  {
    id: 11,
    slug: 'cougar-22rbs',
    name: '2021 Keystone Cougar 22RBS',
    type: 'Travel Trailer',
    sleeps: 4,
    image: '/images/cougar-22rbs.jpg',
    floorplan: null,
    price: 125,
    badges: ['Towable'],
    length: '26\'',
    slides: 1,
    description: 'Lightweight couples trailer with rear bath and modern amenities.',
    features: ['Rear bathroom', 'Queen bed', 'U-shaped dinette', 'Outside kitchen', 'Solar prep']
  },
  {
    id: 12,
    slug: 'ibex-20bhs',
    name: '2021 Forest River Ibex 20BHS',
    type: 'Travel Trailer',
    sleeps: 6,
    image: '/images/ibex-20bhs.jpg',
    floorplan: '/images/floorplans/ibex-20bhs-floorplan.jpg',
    price: 115,
    badges: ['Off-Road'],
    length: '24\'',
    slides: 0,
    description: 'Rugged off-road trailer built for adventure with bunkhouse layout.',
    features: ['Off-road package', 'Bunk beds', 'All-terrain tires', 'Roof rack', 'High clearance']
  }
]

// Platform Logo Card Component - Square cards with actual logos
const PlatformLogos = () => {
  const platforms = [
    { name: 'Outdoorsy', logo: '/images/platforms/outdoorsy.png', url: 'https://www.outdoorsy.com' },
    { name: 'RVshare', logo: '/images/platforms/rvshare.png', url: 'https://www.rvshare.com' },
    { name: 'RVezy', logo: '/images/platforms/rvezy.png', url: 'https://www.rvezy.com' },
    { name: 'GoodSam', logo: '/images/platforms/goodsam.png', url: 'https://www.goodsam.com' },
    { name: 'WheelbasePro', logo: '/images/platforms/wheelbase.png', url: 'https://www.wheelbasepro.com' },
    { name: 'P2PRVS', logo: '/images/platforms/p2prvs.png', url: 'https://www.p2prvs.com' },
  ]

  const cardStyle = {
    width: '100px',
    height: '100px',
    background: 'white',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    padding: '16px',
    transition: 'transform 0.2s, box-shadow 0.2s'
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      {platforms.map((platform, idx) => (
        <a
          key={idx}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          style={cardStyle}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}
          title={platform.name}
        >
          <img
            src={platform.logo}
            alt={platform.name}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = `<span style="font-weight:600;font-size:0.75rem;color:#666;text-align:center">${platform.name}</span>` }}
          />
        </a>
      ))}
    </div>
  )
}

// Pricing Table Component
const PricingTable = () => {
  const pricingData = [
    { nights: '1 Night', trailer: '$525', toyHauler: '$650', classC: '$599', classB: '$585', classA: '$650', save: '-', perNight: null },
    { nights: '2 Nights', trailer: '$699', toyHauler: '$950', classC: '$849', classB: '$815', classA: '$950', save: '$177', perNight: { trailer: '$350', toyHauler: '$475', classC: '$425', classB: '$408', classA: '$475' } },
    { nights: '3 Nights', trailer: '$875', toyHauler: '$1,250', classC: '$1,099', classB: '$1,049', classA: '$1,250', save: '$236', perNight: { trailer: '$292', toyHauler: '$417', classC: '$366', classB: '$350', classA: '$417' } },
    { nights: '4 Nights', trailer: '$1,049', toyHauler: '$1,550', classC: '$1,325', classB: '$1,275', classA: '$1,550', save: '$265', perNight: { trailer: '$262', toyHauler: '$388', classC: '$331', classB: '$319', classA: '$388' } },
    { nights: '5 Nights', trailer: '$1,199', toyHauler: '$1,850', classC: '$1,575', classB: '$1,499', classA: '$1,850', save: '$283', perNight: { trailer: '$240', toyHauler: '$370', classC: '$315', classB: '$300', classA: '$370' } },
    { nights: '6 Nights', trailer: '$1,375', toyHauler: '$2,150', classC: '$1,799', classB: '$1,725', classA: '$2,150', save: '$295', perNight: { trailer: '$229', toyHauler: '$358', classC: '$300', classB: '$288', classA: '$358' } },
    { nights: '7 Nights (1 Week)', trailer: '$1,550', toyHauler: '$2,450', classC: '$2,050', classB: '$1,950', classA: '$2,450', save: '$303', perNight: { trailer: '$221', toyHauler: '$350', classC: '$293', classB: '$279', classA: '$350' }, bestValue: true },
    { nights: '30 Nights (Monthly)', trailer: '$4,500', toyHauler: '$7,500', classC: '$6,500', classB: '$6,000', classA: '$7,500', save: '$1,500+', perNight: { trailer: '$150', toyHauler: '$250', classC: '$217', classB: '$200', classA: '$250' }, monthly: true },
  ]

  const headerStyle = {
    padding: '14px 12px',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '0.85rem',
    color: 'white',
    background: '#4A1259'
  }

  const cellStyle = {
    padding: '12px 10px',
    textAlign: 'center',
    fontSize: '0.9rem',
    borderBottom: '1px solid #e0e0e0'
  }

  const saveCellStyle = {
    ...cellStyle,
    background: '#f0e6f5',
    color: '#4A1259',
    fontWeight: 700
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        <thead>
          <tr>
            <th style={{ ...headerStyle, textAlign: 'left', paddingLeft: '16px' }}>Trip Length</th>
            <th style={headerStyle}>Travel Trailers<br/><span style={{ fontWeight: 400, fontSize: '0.75rem' }}>TOTAL</span></th>
            <th style={headerStyle}>Toy Hauler / Fifth Wheel<br/><span style={{ fontWeight: 400, fontSize: '0.75rem' }}>TOTAL</span></th>
            <th style={headerStyle}>Class C<br/><span style={{ fontWeight: 400, fontSize: '0.75rem' }}>TOTAL</span></th>
            <th style={headerStyle}>Class B<br/><span style={{ fontWeight: 400, fontSize: '0.75rem' }}>TOTAL</span></th>
            <th style={headerStyle}>Class A<br/><span style={{ fontWeight: 400, fontSize: '0.75rem' }}>TOTAL</span></th>
            <th style={{ ...headerStyle, background: '#2E7D32' }}>You Save<br/><span style={{ fontWeight: 400, fontSize: '0.75rem' }}>per night</span></th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((row, idx) => (
            <tr key={idx} style={{ background: row.bestValue ? '#f9f5fc' : row.monthly ? '#f5f9f5' : (idx % 2 === 0 ? 'white' : '#fafafa') }}>
              <td style={{ ...cellStyle, textAlign: 'left', paddingLeft: '16px', fontWeight: 600, color: '#4A1259' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {row.nights}
                  {row.bestValue && (
                    <span style={{ background: '#2E7D32', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700 }}>
                      BEST VALUE - WEEKLY SPECIAL
                    </span>
                  )}
                  {row.monthly && (
                    <span style={{ background: '#1565C0', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700 }}>
                      MONTHLY RATE
                    </span>
                  )}
                </div>
              </td>
              <td style={cellStyle}>
                <div style={{ fontWeight: 600 }}>{row.trailer}</div>
                {row.perNight && <div style={{ fontSize: '0.75rem', color: '#888' }}>{row.perNight.trailer}/night</div>}
              </td>
              <td style={cellStyle}>
                <div style={{ fontWeight: 600 }}>{row.toyHauler}</div>
                {row.perNight && <div style={{ fontSize: '0.75rem', color: '#888' }}>{row.perNight.toyHauler}/night</div>}
              </td>
              <td style={cellStyle}>
                <div style={{ fontWeight: 600 }}>{row.classC}</div>
                {row.perNight && <div style={{ fontSize: '0.75rem', color: '#888' }}>{row.perNight.classC}/night</div>}
              </td>
              <td style={cellStyle}>
                <div style={{ fontWeight: 600 }}>{row.classB}</div>
                {row.perNight && <div style={{ fontSize: '0.75rem', color: '#888' }}>{row.perNight.classB}/night</div>}
              </td>
              <td style={cellStyle}>
                <div style={{ fontWeight: 600 }}>{row.classA}</div>
                {row.perNight && <div style={{ fontSize: '0.75rem', color: '#888' }}>{row.perNight.classA}/night</div>}
              </td>
              <td style={saveCellStyle}>{row.save}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Add-Ons Grid Component
const AddOnsGrid = () => {
  const addOns = [
    { icon: '🚲', name: 'Bike Rental - Regular', desc: 'Standard bike rental.', price: '$25 / day' },
    { icon: '⚡', name: 'Bike Rental - Electric', desc: 'Electric bike rental for an easier ride.', price: '$75 / day' },
    { icon: '🛏️', name: 'Bedding Kit', desc: 'Includes linens, pillows, and towels.', price: '$50' },
    { icon: '⛺', name: 'Camping Kit', desc: 'Essential camping gear for a comfortable stay.', price: '$150' },
    { icon: '📶', name: 'Unlimited Wifi - Starlink', desc: 'High-speed, unlimited internet for your trip.', price: '$199' },
    { icon: '🔌', name: 'Unlimited Generator', desc: 'On-demand power for your entire trip.', price: '$199' },
    { icon: '🐕', name: 'Dog Fee', desc: 'Per dog (service animals free).', price: '$100' },
    { icon: '🚚', name: 'Trailer Delivery', desc: 'Local delivery, setup, and pickup (trailers).', price: '$399' },
    { icon: '🏌️', name: 'Golf Cart Rental', desc: 'Golf cart rental via 3rd party partner.', price: '$199 / day' },
    { icon: '🚗', name: 'Golf Cart Delivery', desc: 'Delivery and pickup for your rented golf cart.', price: '$199' },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
      {addOns.map((item, idx) => (
        <div key={idx} style={{ background: 'white', borderRadius: '10px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ width: '50px', height: '50px', background: '#f5f0f7', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
            {item.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>{item.name}</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>{item.desc}</div>
          </div>
          <div style={{ background: '#4A1259', color: 'white', padding: '8px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
            {item.price}
          </div>
        </div>
      ))}
    </div>
  )
}

// Delivery Info Component
const DeliveryInfo = () => (
  <div style={{ background: 'linear-gradient(135deg, #4A1259 0%, #6B2D7B 100%)', borderRadius: '12px', padding: '30px', color: 'white' }}>
    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>Delivery Service</h3>
    <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
      <strong>Starting at $150 each way</strong> for local service
    </p>
    <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '20px', fontSize: '0.95rem', lineHeight: 1.8 }}>
      <p style={{ marginBottom: '12px' }}>* Includes set-up/breakdown, orientation (when applicable)</p>
      <p style={{ marginBottom: '12px' }}>* We take care of the connections for you at partial and full hook-up sites</p>
      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontStyle: 'italic' }}>
        (Please remember to pull/extend your waste levers when leaving at full hook-up sites so that tanks are emptied for pickup)
      </p>
    </div>
  </div>
)

// Header Component
const Header = ({ onNavigate }) => (
  <header style={{ background: '#4A1259', padding: '10px 20px', position: 'sticky', top: 0, zIndex: 100 }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div
        onClick={() => onNavigate('')}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <img src="/images/logo.png" alt="Always Honest RV Rentals" style={{ height: '50px', borderRadius: '4px' }} />
      </div>
      <a href="tel:619-992-0289" style={{ background: 'white', color: '#4A1259', padding: '8px 16px', borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem' }}>
        619-992-0289
      </a>
    </div>
  </header>
)

// Footer Component
const Footer = () => (
  <footer style={{ background: '#1a1a2e', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
    <img src="/images/logo.png" alt="Always Honest RV Rentals" style={{ height: '60px', marginBottom: '16px', borderRadius: '4px' }} />
    <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Always Honest RV Rentals</p>
    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
      619-992-0289 | honestrvrentals@gmail.com
    </p>
    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>San Diego, CA | 2026 Always Honest RV Rentals</p>
  </footer>
)

// Home Page Component
const HomePage = ({ onNavigate }) => {
  const [typeFilter, setTypeFilter] = useState('')
  const [sleepsFilter, setSleepsFilter] = useState('')
  const [photoView, setPhotoView] = useState({})

  const filteredRVs = rvs.filter(rv => {
    if (typeFilter && rv.type !== typeFilter) return false
    if (sleepsFilter && rv.sleeps < parseInt(sleepsFilter)) return false
    return true
  })

  const types = [...new Set(rvs.map(r => r.type))]

  const toggleView = (id, e) => {
    e.stopPropagation()
    setPhotoView(prev => ({ ...prev, [id]: prev[id] === 'floorplan' ? 'photo' : 'floorplan' }))
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #4A1259 0%, #6B2D7B 100%)', padding: '50px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <img src="/images/logo.png" alt="Always Honest RV Rentals" style={{ height: '120px', marginBottom: '16px', borderRadius: '8px' }} />
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '24px' }}>
            San Diego's Trusted RV Rental Fleet
          </p>

          {/* Search */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
              <select
                value={typeFilter}
                onChange={e => setTypeFilter(e.target.value)}
                style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem' }}
              >
                <option value="">All Types</option>
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select
                value={sleepsFilter}
                onChange={e => setSleepsFilter(e.target.value)}
                style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem' }}
              >
                <option value="">Any Sleeps</option>
                <option value="2">2+ guests</option>
                <option value="4">4+ guests</option>
                <option value="6">6+ guests</option>
                <option value="8">8+ guests</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Platforms */}
      <section style={{ background: 'white', padding: '28px 20px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <p style={{ color: '#888', fontSize: '0.75rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
          Also Listed On
        </p>
        <PlatformLogos />
      </section>

      {/* Pricing Section */}
      <section style={{ background: '#f5f5f5', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, textAlign: 'center', marginBottom: '12px', color: '#4A1259' }}>Rental Pricing</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px', fontSize: '0.95rem' }}>
            Transparent pricing with no hidden fees. Longer stays = bigger savings.
          </p>
          <PricingTable />
        </div>
      </section>

      {/* Add-Ons Section */}
      <section style={{ background: 'white', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, textAlign: 'center', marginBottom: '30px', color: '#4A1259' }}>Add-Ons & Extras</h2>
          <AddOnsGrid />

          {/* Delivery Info */}
          <div style={{ marginTop: '30px' }}>
            <DeliveryInfo />
          </div>
        </div>
      </section>

      {/* Fleet */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Our Fleet</h2>
          <span style={{ color: '#888', fontSize: '0.9rem' }}>{filteredRVs.length} available</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredRVs.map(rv => (
            <div
              key={rv.id}
              onClick={() => onNavigate(`rv/${rv.slug}`)}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <div style={{ position: 'relative', height: '180px' }}>
                <img
                  src={photoView[rv.id] === 'floorplan' && rv.floorplan ? rv.floorplan : rv.image}
                  alt={rv.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: photoView[rv.id] === 'floorplan' ? 'contain' : 'cover',
                    background: photoView[rv.id] === 'floorplan' ? '#fff' : '#f0f0f0'
                  }}
                />
                <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px' }}>
                  {rv.badges.map((b, i) => (
                    <span key={i} style={{ background: '#4A1259', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>{b}</span>
                  ))}
                  <span style={{ background: 'rgba(0,0,0,0.65)', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem' }}>{rv.type}</span>
                </div>
                {rv.floorplan && (
                  <button
                    onClick={(e) => toggleView(rv.id, e)}
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(255,255,255,0.95)',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    {photoView[rv.id] === 'floorplan' ? 'View Photo' : 'View Floorplan'}
                  </button>
                )}
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px', lineHeight: 1.3 }}>{rv.name}</h3>
                <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '12px' }}>{rv.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#666', fontSize: '0.85rem' }}>
                    Sleeps {rv.sleeps} | {rv.length}
                  </span>
                  <span style={{ color: '#4A1259', fontWeight: 700, fontSize: '1.2rem' }}>
                    ${rv.price}<span style={{ fontSize: '0.8rem', fontWeight: 400 }}>/night</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cleaning Section */}
      <section style={{ background: 'white', padding: '40px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px' }}>Professional Cleaning by</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#4A1259' }}>CHAMPION CLEANING</span>
              <span style={{ color: '#FFD700', fontSize: '1.1rem' }}>★★★★★</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '6px' }}>Licensed & Certified 3rd Party Cleaning</p>
          </div>

          <div style={{ background: '#f9f9f9', borderRadius: '10px', padding: '24px', fontSize: '0.95rem', lineHeight: 1.8, color: '#444' }}>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: '#4A1259' }}>✓</strong> All units provided clean inside and out</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: '#4A1259' }}>✓</strong> Complete walkthrough tutorial with every reservation</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: '#4A1259' }}>✓</strong> These are rental units — some wear and tear over time is expected</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: '#4A1259' }}>✓</strong> We are straight forward with you and ask you be the same with us</p>
            <p><strong style={{ color: '#4A1259' }}>✓</strong> If something's wrong, let us know and we'll do our best to make it right</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: '#f5f5f5', padding: '40px 20px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px', color: '#4A1259' }}>A Note From Me</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#555' }}>
            This is a 2nd job for me — I have a full-time day job, am a mom of an infant, and am not super experienced with RVs.
            I hire independent contractors and vendors to help with showings, hand-offs, inspections, and maintenance.
            If they aren't 5-star status, please let me know so I can address it.
          </p>
        </div>
      </section>
    </>
  )
}

// RV Detail Page Component
const RVDetailPage = ({ slug, onNavigate }) => {
  const [showFloorplan, setShowFloorplan] = useState(false)
  const rv = rvs.find(r => r.slug === slug)

  if (!rv) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>RV Not Found</h1>
        <button onClick={() => onNavigate('')} style={{ background: '#4A1259', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Back to Fleet
        </button>
      </div>
    )
  }

  // RVFMS booking URL - this is the white-label integration point
  const bookingUrl = `https://rvfms.stressfreervs.com/book?unit=${rv.slug}`

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 20px' }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate('')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'none',
          border: 'none',
          color: '#4A1259',
          fontSize: '0.95rem',
          cursor: 'pointer',
          marginBottom: '20px',
          fontWeight: 500
        }}
      >
        ← Back to Fleet
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
        {/* Main Image / Floorplan */}
        <div style={{ position: 'relative' }}>
          <img
            src={showFloorplan && rv.floorplan ? rv.floorplan : rv.image}
            alt={rv.name}
            style={{
              width: '100%',
              height: '400px',
              objectFit: showFloorplan ? 'contain' : 'cover',
              borderRadius: '12px',
              background: '#f0f0f0'
            }}
          />
          {rv.floorplan && (
            <button
              onClick={() => setShowFloorplan(!showFloorplan)}
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: 'rgba(255,255,255,0.95)',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                cursor: 'pointer',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            >
              {showFloorplan ? 'View Photo' : 'View Floorplan'}
            </button>
          )}
          <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px' }}>
            {rv.badges.map((b, i) => (
              <span key={i} style={{ background: '#4A1259', color: 'white', padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>{b}</span>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <span style={{ background: '#f0f0f0', color: '#666', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', display: 'inline-block', marginBottom: '12px' }}>
              {rv.type}
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', lineHeight: 1.3 }}>{rv.name}</h1>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>{rv.description}</p>

            {/* Specs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: '#f9f9f9', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4A1259' }}>{rv.sleeps}</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Sleeps</div>
              </div>
              <div style={{ background: '#f9f9f9', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4A1259' }}>{rv.length}</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Length</div>
              </div>
              <div style={{ background: '#f9f9f9', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4A1259' }}>{rv.slides}</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Slides</div>
              </div>
            </div>

            {/* Features */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>Features</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {rv.features.map((f, i) => (
                <span key={i} style={{ background: '#f0f0f0', padding: '8px 14px', borderRadius: '20px', fontSize: '0.85rem', color: '#444' }}>
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Card */}
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '28px', alignSelf: 'start', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '20px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 700, color: '#4A1259' }}>${rv.price}</span>
              <span style={{ color: '#666', fontSize: '1rem' }}>/ night</span>
            </div>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '16px',
                background: '#4A1259',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'none',
                marginBottom: '16px'
              }}
            >
              Check Availability
            </a>

            <a href="tel:619-992-0289" style={{
              display: 'block',
              width: '100%',
              padding: '14px',
              background: 'white',
              color: '#4A1259',
              border: '2px solid #4A1259',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              textAlign: 'center',
              textDecoration: 'none'
            }}>
              Call 619-992-0289
            </a>

            <div style={{ marginTop: '20px', padding: '16px', background: '#f9f9f9', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>
                <strong>Pickup and Return</strong><br/>
                Sycuan Casino Resort<br/>
                5469 Casino Way, El Cajon, CA 92019<br/>
                <span style={{ fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>
                  Pickup: 2:00 PM | Return by: 12:00 PM
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <div style={{ marginTop: '40px', padding: '30px', background: '#f9f9f9', borderRadius: '12px', textAlign: 'center' }}>
        <p style={{ color: '#888', fontSize: '0.75rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
          This unit is also listed on
        </p>
        <PlatformLogos />
      </div>
    </main>
  )
}

// Main App with Hash Router
function App() {
  const [route, setRoute] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove #
      setRoute(hash)
    }

    handleHashChange() // Initial load
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (path) => {
    window.location.hash = path
    window.scrollTo(0, 0)
  }

  // Route parsing
  let content
  if (route.startsWith('rv/')) {
    const slug = route.replace('rv/', '')
    content = <RVDetailPage slug={slug} onNavigate={navigate} />
  } else {
    content = <HomePage onNavigate={navigate} />
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; color: #333; }
        a { text-decoration: none; color: inherit; }
        img { max-width: 100%; }
        @media (max-width: 768px) {
          main > div { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Header onNavigate={navigate} />
      {content}
      <Footer />
    </>
  )
}

export default App
