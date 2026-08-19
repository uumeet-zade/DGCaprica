import dgcLogo from '../assets/democraticgreensnew.png';
import alpLogo from '../assets/Altenative_ALP_Logo.png';
import dglLogo from '../assets/DGL.png';

export default function Partnerships() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Our Partnerships</h1>
        </div>
      </header>
      <section className="section section-light">
        <div className="container">
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
            The Democratic Greens of Caprica believe in solidarity and coalition-building. We work closely with progressive and labor-aligned political parties across the colonies to advance our shared goals.
          </p>

          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 style={{ color: 'var(--color-green)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>A Historic Alliance</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', fontWeight: '500' }}>
              We are proud to publicly announce our formal alliance with the <strong>Alternative Labor Party</strong>. Together, we are <strong>Democratic Green Labor</strong>.
            </p>
            
            <div style={{ marginBottom: '3rem' }}>
              <img src={dglLogo} alt="Democratic Green Labor Logo" style={{ height: '140px', width: 'auto', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', margin: '3rem 0' }}>
              <img src={dgcLogo} alt="Democratic Greens of Caprica Logo" style={{ height: '70px', width: 'auto' }} />
              <span style={{ fontSize: '2rem', color: 'var(--color-text-muted)', fontWeight: '800' }}>+</span>
              <img src={alpLogo} alt="Alternative Labor Party Logo" style={{ height: '70px', width: 'auto' }} />
            </div>
            
            <p style={{ marginTop: '2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              By uniting the environmental focus of the Democratic Greens with the workers' rights advocacy of Alternative Labor, the Democratic Green Labor alliance represents the strongest unified front for progressive policy in Caprican history.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
