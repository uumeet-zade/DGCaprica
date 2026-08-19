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
          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ width: '150px', height: '150px', backgroundColor: '#e0e0e0', margin: '0 auto 1rem', border: '2px solid var(--color-green)' }}></div>
              <h3>Jane Doe</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>Party Co-Chair</p>
              <p>Long-time environmental activist and former union organizer.</p>
            </div>
            <div className="card text-center">
              <div style={{ width: '150px', height: '150px', backgroundColor: '#e0e0e0', margin: '0 auto 1rem', border: '2px solid var(--color-green)' }}></div>
              <h3>John Smith</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>Party Co-Chair</p>
              <p>Urban planning expert dedicated to sustainable city development.</p>
            </div>
            <div className="card text-center">
              <div style={{ width: '150px', height: '150px', backgroundColor: '#e0e0e0', margin: '0 auto 1rem', border: '2px solid var(--color-green)' }}></div>
              <h3>Elena Rostova</h3>
              <p style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>Treasurer</p>
              <p>Advocate for transparent political funding and wealth redistribution.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
