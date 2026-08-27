export default function Platform() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Our Platform</h1>
        </div>
      </header>

      {/* Light Section -> Dark Cards */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Founding Principles</h2>
            <p style={{ fontSize: '1.25rem' }}>A return to radical liberal and reformist roots.</p>
          </div>
          <div className="grid grid-3">
            <div className="card card-dark">
              <h3 style={{ color: 'var(--color-yellow)' }}>Governance-Wide Sustainability</h3>
              <p>Sustainability must extend beyond environmental policy into fiscal, infrastructure, and social policy as a fundamental duty of the state.</p>
            </div>
            <div className="card card-dark">
              <h3 style={{ color: 'var(--color-yellow)' }}>Empathetic Governance</h3>
              <p>Policy must be grounded in empirical data, evidence, and the lived experiences of Caprican communities across all regions.</p>
            </div>
            <div className="card card-dark">
              <h3 style={{ color: 'var(--color-yellow)' }}>Land as a Birthright</h3>
              <p>Eco-friendly development and reduced inequality driven by a Land Value Tax and similar taxes on harmful activity and speculation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section -> Light Cards */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-white)' }}>Economic & Social Vision</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-yellow)' }}>Building a fairer, greener future for all Capricans.</p>
          </div>
          <div className="grid grid-3">
            <div className="card" style={{ backgroundColor: 'var(--color-pure-white)' }}>
              <h3 style={{ color: 'var(--color-green)' }}>Green-Liberal Economics</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Market mechanisms alongside composed fiscal and monetary policy, directed toward environmental and economic stewardship.</p>
            </div>
            <div className="card" style={{ backgroundColor: 'var(--color-pure-white)' }}>
              <h3 style={{ color: 'var(--color-green)' }}>Civil & Human Rights</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Uncompromising dedication to education, universal healthcare, feminism, and sweeping social justice reform.</p>
            </div>
            <div className="card" style={{ backgroundColor: 'var(--color-pure-white)' }}>
              <h3 style={{ color: 'var(--color-green)' }}>Political Renewal</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>A definitive corrective to the ailing Caprican political environment that currently fails to reflect the character of the people it governs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
