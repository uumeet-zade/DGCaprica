import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Donate() {
  const [amount, setAmount] = useState(27);
  const [isCustom, setIsCustom] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const amounts = [10, 27, 50, 100];

  const handleDonate = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div>
        <header className="page-header">
          <div className="container">
            <h1>Thank You!</h1>
          </div>
        </header>
        <section className="section section-light">
          <div className="container text-center" style={{ maxWidth: '600px', padding: '6rem 0' }}>
            <h2 style={{ color: 'var(--color-green)', marginBottom: '2rem' }}>Donation Processed</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
              Your contribution of ${amount} fuels our grassroots movement across Caprica. Together, we are unstoppable.
            </p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Make Another Donation</button>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/" style={{ color: 'var(--color-green)', textDecoration: 'underline', fontWeight: 'bold' }}>Return Home</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Donate</h1>
        </div>
      </header>
      
      {/* Light section, Dark Card (Alternating Contrast Rule) */}
      <section className="section section-light">
        <div className="container">
          <div className="card card-dark text-center" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{ color: 'var(--color-yellow)', marginBottom: '1rem', fontSize: '3rem' }}>Fund the Revolution</h2>
            <p style={{ color: 'var(--color-pure-white)', marginBottom: '3rem', fontSize: '1.2rem', fontWeight: '500' }}>
              We refuse corporate PAC money. Our campaign relies entirely on grassroots funding from everyday citizens.
            </p>
            
            <form onSubmit={handleDonate}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {amounts.map(amt => (
                  <button 
                    key={amt}
                    type="button"
                    onClick={() => { setAmount(amt); setIsCustom(false); }}
                    className="btn" 
                    style={{ 
                      backgroundColor: amount == amt && !isCustom ? 'var(--color-yellow)' : 'var(--color-pure-white)', 
                      color: amount == amt && !isCustom ? 'var(--color-text)' : 'var(--color-text-muted)',
                      border: '2px solid transparent',
                      fontSize: '1.25rem'
                    }}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <div style={{ marginBottom: '3rem' }}>
                {isCustom ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--color-pure-white)', padding: '0.5rem 1rem', border: '2px solid var(--color-yellow)' }}>
                    <span style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontWeight: '800' }}>$</span>
                    <input 
                      type="number" 
                      min="1"
                      value={amount} 
                      onChange={(e) => setAmount(e.target.value)}
                      style={{ border: 'none', background: 'transparent', fontSize: '1.5rem', width: '100%', outline: 'none', color: 'var(--color-text)', fontWeight: '800' }}
                      autoFocus
                    />
                  </div>
                ) : (
                  <button 
                    type="button"
                    onClick={() => { setIsCustom(true); setAmount(''); }}
                    className="btn" 
                    style={{ width: '100%', backgroundColor: 'transparent', color: 'var(--color-pure-white)', border: '2px solid var(--color-pure-white)', fontSize: '1.25rem' }}
                  >
                    Custom Amount
                  </button>
                )}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.5rem', padding: '1.5rem' }} disabled={!amount || amount <= 0}>
                Donate ${amount || 0}
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}
