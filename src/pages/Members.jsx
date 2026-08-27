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
            <div className="card card-dark text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <img src={adrianaImg} alt="Adriana E. Flash" style={{ width: '160px', height: '160px', objectFit: 'cover', margin: '0 auto 1.5rem', border: '2px solid var(--color-yellow)', borderRadius: '0' }} />
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>Adriana E. Flash</h2>
              <p style={{ color: 'var(--color-yellow)', fontWeight: '800', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Party Leader</p>
              <p style={{ fontSize: '1.2rem', fontWeight: '500', marginTop: '0.5rem' }}>19th Prime Minister of Caprica</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))', justifyContent: 'center', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="card card-dark text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={asterImg} alt="Aster Skye" style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1rem', border: '2px solid var(--color-yellow)' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Aster Skye</h3>
              <p style={{ color: 'var(--color-yellow)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Party Chairman</p>
              <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Minister of Housing and Urban Development</p>
            </div>
            <div className="card card-dark text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={henrikImg} alt="Henrik Vasmer" style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1rem', border: '2px solid var(--color-yellow)' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Henrik Vasmer</h3>
              <p style={{ color: 'var(--color-yellow)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Senior Counsel</p>
              <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Governor of Cambria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Constituency MPs Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-white)' }}>Constituency MPs</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-green)' }}>Elected directly by the people across Caprican districts.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))', justifyContent: 'center', gap: '2rem' }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-pure-white)' }}>
              <img src={adrianaImg} alt="Adriana E. Flash" style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>Adriana E. Flash</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Constituency MP</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Costa Blanca</p>
            </div>
          </div>
        </div>
      </section>

      {/* Governors Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Governors</h2>
            <p style={{ fontSize: '1.25rem' }}>Our official party leadership at the regional level.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))', justifyContent: 'center', gap: '2rem' }}>
            <div className="card card-dark text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={henrikImg} alt="Henrik Vasmer" style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1rem', border: '2px solid var(--color-yellow)' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Henrik Vasmer</h3>
              <p style={{ color: 'var(--color-yellow)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Governor</p>
              <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Cambria</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
