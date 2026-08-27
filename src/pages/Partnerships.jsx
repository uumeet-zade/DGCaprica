import dgcLogo from '../assets/democraticgreensnew.png';
import blocLogo from '../assets/bloc_logo.png';

export default function Partnerships() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Our Partnerships</h1>
        </div>
      </header>
      
      {/* Cambrian Bloc Alliance */}
      <section className="section section-dark">
        <div className="container">
          <p style={{ fontSize: '1.5rem', marginBottom: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', color: 'var(--color-pure-white)' }}>
            The Democratic Greens of Caprica believe in solidarity and coalition-building.
          </p>

          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--color-pure-white)' }}>
            <h2 style={{ color: 'var(--color-green)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Sister Party: The Cambrian Bloc</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              A shared vision for sustainable governance.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', margin: '4rem 0' }}>
              <img src={dgcLogo} alt="Democratic Greens of Caprica Logo" style={{ height: '115px', width: 'auto' }} />
              <span style={{ fontSize: '3rem', color: 'var(--color-text-muted)', fontWeight: '800' }}>&</span>
              <img src={blocLogo} alt="Cambrian Bloc Logo" style={{ height: '150px', width: 'auto' }} />
            </div>
            
            <p style={{ marginTop: '2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--color-text)', fontSize: '1.2rem' }}>
              With Henrik Vasmer serving as both Senior Counsel of the DGC and Chairman of the Cambrian Bloc, our organizations are united as official sister parties. We work cooperatively to coordinate regional strategies and advance our mutual green-liberal platforms.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
