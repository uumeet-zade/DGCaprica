export default function About() {
  const founders = [
    { name: "Adriana Flash", title: "Party Leader" },
    { name: "Aster Skye", title: "Party Chairman" },
    { name: "Henrik Vasmer", title: "Senior Counsel" },
    { name: "Christian Lindner", title: "Founding Signatory" },
    { name: "Ryan Jung-Hee Park", title: "Founding Signatory" },
    { name: "Donald Trump", title: "Founding Signatory" },
    { name: "Benito Mussolini", title: "Founding Signatory" },
    { name: "Fredrick Madden", title: "Founding Signatory" },
    { name: "Alia Zhou (阿丽娅·周)", title: "Founding Signatory" },
  ];

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </header>

      {/* History Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '4rem' }}>Our History</h2>
          </div>
          <div className="card card-dark text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: 'var(--color-pure-white)', fontSize: '1.25rem', fontWeight: '500' }}>
              The Democratic Greens of Caprica issued its founding statement from our headquarters at 110 Acton Circle, Montiablo.
              Our Steering Committee established this party to return to radical liberal and reformist roots, fighting for environmental justice, fiscal responsibility, and true political renewal.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '4rem', color: 'var(--color-white)' }}>Founding Signatories</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-yellow)' }}>The original visionaries of the Democratic Greens.</p>
          </div>
          <div className="grid grid-3" style={{ maxWidth: '1150px', margin: '0 auto' }}>
            {founders.map((founder, i) => (
              <div key={i} className="card" style={{ backgroundColor: 'var(--color-pure-white)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--color-green)', marginBottom: '0.25rem', fontSize: '1.75rem' }}>{founder.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', margin: 0, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>{founder.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
