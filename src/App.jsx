import { useState } from 'react'

const rvs = [
  {
    id: 1,
    name: '2024 Grand Design Solitude 391DL',
    type: 'Fifth Wheel',
    sleeps: 6,
    image: 'https://www.dropbox.com/scl/fi/5e7suf0dg80awbicko4pt/70-SOLITUDE-PHOTO-2025.11.19_1.jpg?rlkey=0bagmv3u8dze0erg6tftmw1nf&raw=1',
    price: 275,
    features: ['Washer/Dryer', 'Residential Fridge', 'Fireplace'],
    badges: ['NEW', 'Luxury']
  },
  {
    id: 2,
    name: '2023 Grand Design Solitude 390RK',
    type: 'Fifth Wheel',
    sleeps: 4,
    image: 'https://www.dropbox.com/scl/fi/70083j29on1l3qsx75h6v/71-PHOTOS-PrelimIntake-exist-dam-1.jpg?rlkey=m310iefzbyyeq9du9xc9b0puv&raw=1',
    price: 265,
    features: ['Rear Kitchen', 'King Bed', 'Theater Seats'],
    badges: ['Luxury']
  },
  {
    id: 3,
    name: '2021 Grand Design Momentum 29G',
    type: 'Toy Hauler',
    sleeps: 8,
    image: 'https://www.dropbox.com/scl/fi/o0r7meo4ystl8mmouc4ju/17-MOMENTUM-PHOTOS-2025.10.06-1.jpg?rlkey=wjmdom1p9rsfg8ryjw4wpjjxb&raw=1',
    price: 245,
    features: ['Garage', 'Fuel Station', 'Loft'],
    badges: ['Toy Hauler']
  },
  {
    id: 4,
    name: '2022 Coachmen Cross Trail 23XG',
    type: 'Class B+',
    sleeps: 4,
    image: 'https://www.dropbox.com/scl/fi/64whcge34s73yuukr1epv/27-PHOTOS-2025.07.20-1.jpg?rlkey=mq0jtogjg9e2ty7x3aoavnh3h&raw=1',
    price: 225,
    features: ['4x4 Capable', 'Solar Ready', 'Compact'],
    badges: ['Adventure']
  },
  {
    id: 5,
    name: '2019 Winnebago Outlook 25J',
    type: 'Class C',
    sleeps: 6,
    image: 'https://www.dropbox.com/scl/fi/9kgodt3f62c3r2tiuk46y/20260326_144007.jpg?rlkey=74e5nmckur6ntr9417lhv7ryb&raw=1',
    price: 195,
    features: ['Cab-over Bed', 'Slide Out', 'Full Kitchen'],
    badges: ['Family Friendly']
  },
  {
    id: 6,
    name: '2018 Winnebago Fuse 23T',
    type: 'Class C',
    sleeps: 4,
    image: 'https://www.dropbox.com/scl/fi/ndb63h6he1melxgxrcbgy/FUZE23T-web-1.jpg?rlkey=86ylpr3kjdl019lsi6zos741q&raw=1',
    price: 175,
    features: ['Diesel', 'Easy to Drive', 'Murphy Bed'],
    badges: ['Fuel Efficient']
  },
  {
    id: 7,
    name: '2022 Thor Sequence 20J',
    type: 'Class B',
    sleeps: 2,
    image: 'https://www.dropbox.com/scl/fi/21wsgvf31t75b944mnz8y/2022-Sequence-20J-2025.08.05-1.jpg?rlkey=8qg8a9dstuec3o73zztnd7tfx&raw=1',
    price: 185,
    features: ['Compact', 'Pop Top', 'Efficient'],
    badges: ['Couples']
  },
  {
    id: 8,
    name: '2021 Jayco Redhawk 26M',
    type: 'Class C',
    sleeps: 6,
    image: 'https://www.dropbox.com/scl/fi/9vet3j16lqe9q1qsymx7a/46-PHOTOS-2026.06.22_01.jpg?rlkey=emycug5kz18adpcu61nsb7khc&raw=1',
    price: 205,
    features: ['Bunkhouse', 'Outdoor Kitchen', 'Generator'],
    badges: ['Family Friendly']
  },
  {
    id: 9,
    name: '2019 Jayco Redhawk 26XD',
    type: 'Class C',
    sleeps: 8,
    image: 'https://www.dropbox.com/scl/fi/9n0x6rg40mfzid16dfvag/20260316_161711.jpg?rlkey=7gbqnoys1k24lnspkixz0t23k&raw=1',
    price: 195,
    features: ['Double Slide', 'Bunks', 'Entertainment'],
    badges: ['Bunkhouse']
  },
  {
    id: 10,
    name: '2019 Coachmen Freelander 31BH',
    type: 'Class C',
    sleeps: 10,
    image: 'https://www.dropbox.com/scl/fi/wffe1vkt919cjjbxt9qos/20260227_130655.jpg?rlkey=1hkhqxi4l869hu8yi5ojaupc6&raw=1',
    price: 215,
    features: ['Triple Slide', 'Bunk Beds', 'Spacious'],
    badges: ['Large Groups', 'Bunkhouse']
  },
  {
    id: 11,
    name: '2021 Keystone Cougar 22RBS',
    type: 'Travel Trailer',
    sleeps: 4,
    image: 'https://www.dropbox.com/scl/fi/tf0ia2mfs5rz7lf9cvj4v/66-COUGAR-PHOTOS-2025.10.05-1.jpg?rlkey=30jy2o32a64ars08puna1qvac&raw=1',
    price: 125,
    features: ['Lightweight', 'Slide Out', 'Outdoor Kitchen'],
    badges: ['Towable']
  },
  {
    id: 12,
    name: '2021 Forest River Ibex 20BHS',
    type: 'Travel Trailer',
    sleeps: 6,
    image: 'https://www.dropbox.com/scl/fi/p9yv33364fie3doq3007e/67_TripStart_01.jpg?rlkey=bw4pz1vdj6sluzutf9wk92ccp&raw=1',
    price: 115,
    features: ['Off-Road Ready', 'Bunks', 'Compact'],
    badges: ['Adventure', 'Bunkhouse']
  }
]

const styles = {
  global: `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: #f8f9fa;
      color: #333;
    }
    a { text-decoration: none; color: inherit; }
  `,
  header: {
    background: '#4A1259',
    padding: '12px 0',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  headerInner: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700
  },
  nav: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  },
  navLink: {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 500,
    transition: 'color 0.2s'
  },
  phoneBtn: {
    background: 'white',
    color: '#4A1259',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  hero: {
    background: 'linear-gradient(135deg, #4A1259 0%, #6B2D7B 50%, #8B4A9B 100%)',
    padding: '80px 24px 100px',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
  },
  heroPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.5
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '900px',
    margin: '0 auto'
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    marginBottom: '16px',
    textShadow: '0 2px 20px rgba(0,0,0,0.2)'
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    opacity: 0.95,
    marginBottom: '40px',
    fontWeight: 400
  },
  searchBox: {
    background: 'white',
    borderRadius: '16px',
    padding: '24px',
    maxWidth: '900px',
    margin: '0 auto',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  searchGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '20px'
  },
  select: {
    padding: '14px 16px',
    borderRadius: '10px',
    border: '2px solid #e5e7eb',
    fontSize: '1rem',
    color: '#333',
    background: 'white',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  searchBtn: {
    width: '100%',
    padding: '16px',
    background: '#4A1259',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  quickFilters: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '32px',
    flexWrap: 'wrap'
  },
  chip: {
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(8px)',
    padding: '10px 20px',
    borderRadius: '50px',
    color: 'white',
    fontWeight: 500,
    border: '1px solid rgba(255,255,255,0.3)',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  trustSection: {
    background: 'white',
    padding: '40px 24px',
    borderBottom: '1px solid #e5e7eb'
  },
  trustGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    gap: '48px',
    flexWrap: 'wrap'
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#4A1259'
  },
  trustIcon: {
    width: '40px',
    height: '40px',
    background: '#f3e8f7',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem'
  },
  trustText: {
    fontWeight: 600,
    fontSize: '0.95rem'
  },
  main: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '60px 24px'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1a1a2e'
  },
  rvGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '28px'
  },
  rvCard: {
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  },
  rvImageWrap: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden'
  },
  rvImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s'
  },
  rvBadges: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  },
  badge: {
    background: '#4A1259',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  rvContent: {
    padding: '20px'
  },
  rvType: {
    color: '#6B2D7B',
    fontSize: '0.85rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px'
  },
  rvName: {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: '12px',
    lineHeight: 1.3
  },
  rvMeta: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
    color: '#666',
    fontSize: '0.9rem'
  },
  rvFeatures: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '16px'
  },
  featureTag: {
    background: '#f3f4f6',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '0.8rem',
    color: '#555'
  },
  rvFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #eee'
  },
  rvPrice: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#4A1259'
  },
  priceLabel: {
    fontSize: '0.85rem',
    color: '#888',
    fontWeight: 400
  },
  viewBtn: {
    background: '#4A1259',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  footer: {
    background: '#1a1a2e',
    color: 'white',
    padding: '60px 24px 30px'
  },
  footerGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px'
  },
  footerSection: {},
  footerTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '20px',
    color: '#a78bfa'
  },
  footerText: {
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.8
  },
  footerLink: {
    display: 'block',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '12px',
    transition: 'color 0.2s'
  },
  footerBottom: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '30px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.9rem'
  }
}

function App() {
  const [typeFilter, setTypeFilter] = useState('')
  const [sleepsFilter, setSleepsFilter] = useState('')

  const filteredRVs = rvs.filter(rv => {
    if (typeFilter && rv.type !== typeFilter) return false
    if (sleepsFilter && rv.sleeps < parseInt(sleepsFilter)) return false
    return true
  })

  const types = [...new Set(rvs.map(r => r.type))]

  return (
    <>
      <style>{styles.global}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logo}>
            <span style={{fontSize: '2rem'}}>🚐</span>
            Always Honest RV Rentals
          </div>
          <nav style={styles.nav}>
            <a href="#fleet" style={styles.navLink}>Our Fleet</a>
            <a href="#about" style={styles.navLink}>About Us</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
            <a href="tel:619-992-0289" style={styles.phoneBtn}>
              📞 619-992-0289
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroPattern} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>San Diego's Most Trusted RV Rentals</h1>
          <p style={styles.heroSubtitle}>
            Experience the freedom of the open road with our premium fleet of motorhomes and trailers.
            Honest pricing, quality rigs, local expertise.
          </p>

          {/* Search Box */}
          <div style={styles.searchBox}>
            <div style={styles.searchGrid}>
              <select
                style={styles.select}
                value={typeFilter}
                onChange={e => setTypeFilter(e.target.value)}
              >
                <option value="">All RV Types</option>
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select
                style={styles.select}
                value={sleepsFilter}
                onChange={e => setSleepsFilter(e.target.value)}
              >
                <option value="">Any Sleeps</option>
                <option value="2">2+ People</option>
                <option value="4">4+ People</option>
                <option value="6">6+ People</option>
                <option value="8">8+ People</option>
              </select>
              <select style={styles.select}>
                <option>Select Dates</option>
              </select>
            </div>
            <button style={styles.searchBtn}>
              🔍 Search Available RVs
            </button>
          </div>

          {/* Quick Filter Chips */}
          <div style={styles.quickFilters}>
            <span style={styles.chip} onClick={() => setTypeFilter('Class C')}>Class C</span>
            <span style={styles.chip} onClick={() => setTypeFilter('Travel Trailer')}>Towable</span>
            <span style={styles.chip} onClick={() => setSleepsFilter('6')}>6+ Sleeps</span>
            <span style={styles.chip} onClick={() => { setTypeFilter(''); setSleepsFilter(''); }}>View All</span>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={styles.trustSection}>
        <div style={styles.trustGrid}>
          <div style={styles.trustItem}>
            <div style={styles.trustIcon}>💰</div>
            <span style={styles.trustText}>Honest Pricing</span>
          </div>
          <div style={styles.trustItem}>
            <div style={styles.trustIcon}>✓</div>
            <span style={styles.trustText}>Verified Quality</span>
          </div>
          <div style={styles.trustItem}>
            <div style={styles.trustIcon}>🐾</div>
            <span style={styles.trustText}>Pet Friendly</span>
          </div>
          <div style={styles.trustItem}>
            <div style={styles.trustIcon}>📍</div>
            <span style={styles.trustText}>Locally Owned</span>
          </div>
          <div style={styles.trustItem}>
            <div style={styles.trustIcon}>🔄</div>
            <span style={styles.trustText}>Repeat Renters Welcome</span>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <main style={styles.main} id="fleet">
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our Fleet</h2>
          <span style={{color: '#666'}}>{filteredRVs.length} RVs available</span>
        </div>

        <div style={styles.rvGrid}>
          {filteredRVs.map(rv => (
            <div key={rv.id} style={styles.rvCard}>
              <div style={styles.rvImageWrap}>
                <img src={rv.image} alt={rv.name} style={styles.rvImage} />
                <div style={styles.rvBadges}>
                  {rv.badges.map((b, i) => (
                    <span key={i} style={styles.badge}>{b}</span>
                  ))}
                </div>
              </div>
              <div style={styles.rvContent}>
                <div style={styles.rvType}>{rv.type}</div>
                <h3 style={styles.rvName}>{rv.name}</h3>
                <div style={styles.rvMeta}>
                  <span>👥 Sleeps {rv.sleeps}</span>
                </div>
                <div style={styles.rvFeatures}>
                  {rv.features.map((f, i) => (
                    <span key={i} style={styles.featureTag}>{f}</span>
                  ))}
                </div>
                <div style={styles.rvFooter}>
                  <div>
                    <span style={styles.rvPrice}>${rv.price}</span>
                    <span style={styles.priceLabel}>/night</span>
                  </div>
                  <button style={styles.viewBtn}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer} id="contact">
        <div style={styles.footerGrid}>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Always Honest RV Rentals</h4>
            <p style={styles.footerText}>
              San Diego's trusted source for quality RV rentals.
              Family-owned, locally operated, always honest.
            </p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contact Us</h4>
            <p style={styles.footerText}>
              📞 619-992-0289<br/>
              ✉️ honestrvrentals@gmail.com<br/>
              📍 San Diego, CA
            </p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <a href="#fleet" style={styles.footerLink}>Browse RVs</a>
            <a href="#about" style={styles.footerLink}>About Us</a>
            <a href="#contact" style={styles.footerLink}>Contact</a>
            <a href="#faq" style={styles.footerLink}>FAQ</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          © 2026 Always Honest RV Rentals. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
