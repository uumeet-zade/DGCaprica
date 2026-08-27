import adrianaImg from '../assets/Adriannaflashportrait2.png';
import asterImg from '../assets/Asterskye.png';
import henrikImg from '../assets/Heinrikofficialportrait.png';

export default function Leadership() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Our Leadership</h1>
        </div>
      </header>
      <section className="section section-light">
        <div className="container">
          
          <div style={{ marginBottom: '3rem' }}>
            <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <img src={adrianaImg} alt="Adriana E. Flash" style={{ width: '160px', height: '160px', objectFit: 'cover', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)', borderRadius: '0' }} />
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>Adriana E. Flash</h2>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Party Leader</p>
              <p style={{ fontSize: '1.2rem', fontWeight: '500', color: 'var(--color-text)', marginTop: '0.5rem' }}>19th Prime Minister of Caprica</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={asterImg} alt="Aster Skye" style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1rem', border: '2px solid var(--color-green)' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Aster Skye</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Party Chairman</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Former Minister of Housing and Urban Development</p>
            </div>
            
            <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: '0.9' }}>
              <img src={henrikImg} alt="Henrik Vasmer" style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1rem', border: '2px dashed var(--color-green)' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Henrik Vasmer</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Senior Counsel</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Governor of Cambria</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
