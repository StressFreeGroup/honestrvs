import { useState } from 'react'

const rvs = [
  { id: 1, name: '2024 Grand Design Solitude 391DL', type: 'Fifth Wheel', sleeps: 6, image: '/images/solitude-391dl.jpg', floorplan: '/images/floorplans/solitude-391dl-floorplan.jpg', price: 275, badges: ['NEW'] },
  { id: 2, name: '2023 Grand Design Solitude 390RK', type: 'Fifth Wheel', sleeps: 4, image: '/images/solitude-390rk.jpg', floorplan: '/images/floorplans/solitude-390rk-floorplan.png', price: 265, badges: ['Luxury'] },
  { id: 3, name: '2021 Grand Design Momentum 29G', type: 'Toy Hauler', sleeps: 8, image: '/images/momentum-29g.jpg', floorplan: null, price: 245, badges: ['Toy Hauler'] },
  { id: 4, name: '2022 Coachmen Cross Trail 23XG', type: 'Class B+', sleeps: 4, image: '/images/crosstrail-23xg.jpg', floorplan: null, price: 225, badges: ['Adventure'] },
  { id: 5, name: '2019 Winnebago Outlook 25J', type: 'Class C', sleeps: 6, image: '/images/outlook-25j.jpg', floorplan: null, price: 195, badges: ['Family'] },
  { id: 6, name: '2018 Winnebago Fuse 23T', type: 'Class C', sleeps: 4, image: '/images/fuse-23t.jpg', floorplan: null, price: 175, badges: ['Efficient'] },
  { id: 7, name: '2022 Thor Sequence 20J', type: 'Class B', sleeps: 2, image: '/images/sequence-20j.jpg', floorplan: null, price: 185, badges: ['Couples'] },
  { id: 8, name: '2021 Jayco Redhawk 26M', type: 'Class C', sleeps: 6, image: '/images/redhawk-26m.jpg', floorplan: '/images/floorplans/redhawk-26xd-floorplan.jpg', price: 205, badges: ['Bunkhouse'] },
  { id: 9, name: '2019 Jayco Redhawk 26XD', type: 'Class C', sleeps: 8, image: '/images/redhawk-26xd.jpg', floorplan: '/images/floorplans/redhawk-26xd-floorplan.jpg', price: 195, badges: ['Bunkhouse'] },
  { id: 10, name: '2019 Coachmen Freelander 31BH', type: 'Class C', sleeps: 10, image: '/images/freelander-31bh.jpg', floorplan: '/images/floorplans/freelander-31bh-floorplan.jpg', price: 215, badges: ['Large Group'] },
  { id: 11, name: '2021 Keystone Cougar 22RBS', type: 'Travel Trailer', sleeps: 4, image: '/images/cougar-22rbs.jpg', floorplan: null, price: 125, badges: ['Towable'] },
  { id: 12, name: '2021 Forest River Ibex 20BHS', type: 'Travel Trailer', sleeps: 6, image: '/images/ibex-20bhs.jpg', floorplan: null, price: 115, badges: ['Off-Road'] }
]

function App() {
  const [typeFilter, setTypeFilter] = useState('')
  const [sleepsFilter, setSleepsFilter] = useState('')
  const [photoView, setPhotoView] = useState({})

  const filteredRVs = rvs.filter(rv => {
    if (typeFilter && rv.type !== typeFilter) return false
    if (sleepsFilter && rv.sleeps < parseInt(sleepsFilter)) return false
    return true
  })

  const types = [...new Set(rvs.map(r => r.type))]

  const toggleView = (id) => {
    setPhotoView(prev => ({ ...prev, [id]: prev[id] === 'floorplan' ? 'photo' : 'floorplan' }))
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; color: #333; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* Minimal Header */}
      <header style={{ background: '#4A1259', padding: '8px 20px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: 'white', fontSize: '1rem', fontWeight: 600 }}>Always Honest RV Rentals</div>
          <a href="tel:619-992-0289" style={{ background: 'white', color: '#4A1259', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem' }}>619-992-0289</a>
        </div>
      </header>

      {/* Hero - Minimal with Logo Centered */}
      <section style={{ background: 'linear-gradient(135deg, #4A1259 0%, #6B2D7B 100%)', padding: '60px 20px 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🚐</div>
          <h1 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 700, marginBottom: '6px' }}>Always Honest RV Rentals</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '24px' }}>San Diego, CA</p>

          {/* Search */}
          <div style={{ background: 'white', borderRadius: '10px', padding: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
              <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '0.9rem' }}>
                <option value="">All Types</option>
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select value={sleepsFilter} onChange={e => setSleepsFilter(e.target.value)} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '0.9rem' }}>
                <option value="">Sleeps</option>
                <option value="2">2+</option>
                <option value="4">4+</option>
                <option value="6">6+</option>
                <option value="8">8+</option>
              </select>
            </div>
            <button style={{ width: '100%', padding: '12px', background: '#4A1259', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>Search RVs</button>
          </div>
        </div>
      </section>

      {/* Trusted Platforms */}
      <section style={{ background: 'white', padding: '24px 20px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Trust Me — Listed On</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.85rem', color: '#555' }}>
          <span style={{ fontWeight: 600 }}>P2PRVS</span>
          <span>•</span>
          <span style={{ fontWeight: 600 }}>WheelbasePro</span>
          <span>•</span>
          <span style={{ fontWeight: 600 }}>Outdoorsy</span>
          <span>•</span>
          <span style={{ fontWeight: 600 }}>RVshare</span>
          <span>•</span>
          <span style={{ fontWeight: 600 }}>RVezy</span>
          <span>•</span>
          <span style={{ fontWeight: 600 }}>GoodSam</span>
        </div>
      </section>

      {/* Fleet */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Our Fleet</h2>
          <span style={{ color: '#888', fontSize: '0.85rem' }}>{filteredRVs.length} available</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          {filteredRVs.map(rv => (
            <div key={rv.id} style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ position: 'relative', height: '140px' }}>
                <img
                  src={photoView[rv.id] === 'floorplan' && rv.floorplan ? rv.floorplan : rv.image}
                  alt={rv.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: photoView[rv.id] === 'floorplan' ? 'contain' : 'cover',
                    background: photoView[rv.id] === 'floorplan' ? '#fff' : 'transparent'
                  }}
                />
                <div style={{ position: 'absolute', top: '8px', left: '8px', display: 'flex', gap: '4px' }}>
                  {rv.badges.map((b, i) => (
                    <span key={i} style={{ background: '#4A1259', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600 }}>{b}</span>
                  ))}
                  <span style={{ background: 'rgba(0,0,0,0.6)', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.65rem' }}>{rv.type}</span>
                </div>
                {rv.floorplan && (
                  <button onClick={() => toggleView(rv.id)} style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(255,255,255,0.9)', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '0.65rem', cursor: 'pointer' }}>
                    {photoView[rv.id] === 'floorplan' ? 'Photo' : 'Floorplan'}
                  </button>
                )}
              </div>
              <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', lineHeight: 1.3 }}>{rv.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#666', fontSize: '0.75rem' }}>Sleeps {rv.sleeps}</span>
                  <span style={{ color: '#4A1259', fontWeight: 700, fontSize: '1rem' }}>${rv.price}<span style={{ fontSize: '0.7rem', fontWeight: 400 }}>/nt</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cleaning & Expectations */}
      <section style={{ background: 'white', padding: '30px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>Professional Cleaning by</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#4A1259' }}>CHAMPION CLEANING ⭐⭐⭐⭐⭐</p>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>Licensed & Certified 3rd Party Cleaning</p>
          </div>

          <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '20px', fontSize: '0.85rem', lineHeight: 1.7, color: '#444' }}>
            <p style={{ marginBottom: '12px' }}><strong>✓</strong> All units provided clean inside and out</p>
            <p style={{ marginBottom: '12px' }}><strong>✓</strong> Complete walkthrough tutorial with every reservation</p>
            <p style={{ marginBottom: '12px' }}><strong>✓</strong> These are rental units — some wear and tear over time is expected</p>
            <p style={{ marginBottom: '12px' }}><strong>✓</strong> We are straight forward with you and ask you be the same with us</p>
            <p><strong>✓</strong> If something's wrong, let us know and we'll do our best to make it right</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: '#f5f5f5', padding: '30px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '12px', color: '#4A1259' }}>A Note From Me</h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#555' }}>
            This is a 2nd job for me — I have a full-time day job, am a mom of an infant, and am not super experienced with RVs.
            I hire independent contractors and vendors to help with showings, hand-offs, inspections, and maintenance.
            If they aren't 5-star status, please let me know so I can address it.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a2e', color: 'white', padding: '30px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Always Honest RV Rentals</p>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>619-992-0289 • honestrvrentals@gmail.com</p>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>San Diego, CA • © 2026</p>
      </footer>
    </>
  )
}

export default App
