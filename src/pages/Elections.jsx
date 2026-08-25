import henrikImg from '../assets/Heinrikofficialportrait.png';
import mussoliniImg from '../assets/Mussolini.png';
import trumpImg from '../assets/Trump.jpg';

export default function Elections() {
  const governorRaces = [
    { region: "Cambria", candidate: "Henrik Vasmer", status: "Incumbent & Official Endorsement", isTBA: false, img: henrikImg },
    { region: "Moeras", candidate: "Benito A. A. Mussolini", status: "Official Candidate", isTBA: false, img: mussoliniImg },
    { region: "Myrati", candidate: "Donald J. Trump", status: "Official Candidate", isTBA: false, img: trumpImg }
  ];

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            
            {governorRaces.map((race, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
                {race.img ? (
                  <img src={race.img} alt={race.candidate} style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)' }} />
                ) : (
                  <div style={{ width: '120px', height: '120px', backgroundColor: '#e0e0e0', margin: '0 auto 1.5rem', border: '2px solid var(--color-green)' }}></div>
                )}
                
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>{race.candidate}</h3>
                <p style={{ color: 'var(--color-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{race.status}</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>Governor of {race.region}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
