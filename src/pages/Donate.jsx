export default function Donate() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Donate</h1>
        </div>
      </header>
      <section className="section section-yellow">
        <div className="container text-center" style={{ maxWidth: '600px' }}>
          <h2>Fund the Revolution</h2>
          <p>We refuse corporate PAC money. Our campaign relies entirely on grassroots funding from everyday citizens.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '3rem 0', flexWrap: 'wrap' }}>
            <button className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-text)' }}>$10</button>
            <button className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-text)' }}>$27</button>
            <button className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-text)' }}>$50</button>
            <button className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-text)' }}>$100</button>
          </div>
          <button className="btn btn-primary" style={{ width: '100%' }}>Donate Custom Amount</button>
        </div>
      </section>
    </div>
  );
}
