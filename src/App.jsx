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

// Platform logos SVG components (brand-accurate colors)
const PlatformLogos = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
    {/* Outdoorsy - tan/beige */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B8860B' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Outdoorsy</span>
    </div>
    {/* RVshare - grey */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#5A5A5A' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 17h2v-6h-2v6zm-4 0h2V7h-2v10zm-4 0h2v-4h-2v4zm-4 0h2v-2H7v2zM5 3v18h14V3H5z"/></svg>
      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>RVshare</span>
    </div>
    {/* RVezy - navy */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1B3A5F' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>RVezy</span>
    </div>
    {/* GoodSam - red */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C41E3A' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>GoodSam</span>
    </div>
    {/* WheelbasePro - bright blue */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0096FF' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="3"/></svg>
      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>WheelbasePro</span>
    </div>
    {/* P2PRVS - orange */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF6B35' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>P2PRVS</span>
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
                <strong>Pickup Location:</strong><br/>
                Sycuan Market, 4915 Dehesa Rd, El Cajon, CA
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
