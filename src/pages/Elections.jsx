import henrikImg from '../assets/Heinrikofficialportrait.png';

export default function Elections() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Elections 2066</h1>
        </div>
      </header>


      {/* Governor Candidates Section */}
      <section className="section section-dark" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-white)' }}>Governor Candidates</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-green)' }}>The future leaders of the 2066 Gubernatorial elections.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
              <img src={henrikImg} alt="Henrik Vasmer" style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>Henrik Vasmer</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Incumbent & Official Endorsement</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Governor of Cambria</p>
            </div>
            
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e0e0e0', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)' }}></div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>[ Candidate TBA ]</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Candidate</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Governor of Delphi</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
