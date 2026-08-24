import adrianaImg from '../assets/Adriannaflashportrait2.png';
import asterImg from '../assets/Asterskye.png';
import henrikImg from '../assets/Heinrikofficialportrait.png';

export default function Members() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Our Members</h1>
        </div>
      </header>

      {/* Leadership Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Party Leadership</h2>
            <p style={{ fontSize: '1.25rem' }}>The guiding voices of the Democratic Greens of Caprica.</p>
          </div>
          
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
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Minister of Housing and Urban Development</p>
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

      {/* List MPs Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-yellow)' }}>List MPs</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-green)' }}>Our proportional representation in the Caprican Parliament.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e0e0e0', margin: '0 auto 1rem', border: '2px solid var(--color-green)' }}></div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>[ Name TBA ]</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>List MP</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>National List</p>
            </div>
          </div>
        </div>
      </section>

      {/* Constituency MPs Section */}
      <section className="section section-light" style={{ backgroundColor: 'var(--color-light-grey)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Constituency MPs</h2>
            <p style={{ fontSize: '1.25rem' }}>Elected directly by the people across Caprican districts.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e0e0e0', margin: '0 auto 1rem', border: '2px solid var(--color-green)' }}></div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>[ Name TBA ]</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Constituency MP</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Mezata</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Sitting Members Section */}
      <section className="section section-dark" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-white)' }}>Local Elected Officials</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-green)' }}>Our current municipal officials fighting for a greener Caprica.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e0e0e0', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)' }}></div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>[ Name TBA ]</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mayor</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Montiablo</p>
            </div>
            
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e0e0e0', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)' }}></div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>[ Name TBA ]</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>City Council</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Ventura</p>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e0e0e0', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)' }}></div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>[ Name TBA ]</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Assembly Member</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Ambarino</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
