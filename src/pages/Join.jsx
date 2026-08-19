export default function Join() {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Get Involved</h1>
        </div>
      </header>
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '600px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
              <input type="text" style={{ width: '100%', padding: '0.75rem', border: '2px solid var(--color-text)', borderRadius: '0' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email Address</label>
              <input type="email" style={{ width: '100%', padding: '0.75rem', border: '2px solid var(--color-text)', borderRadius: '0' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>How would you like to help?</label>
              <select style={{ width: '100%', padding: '0.75rem', border: '2px solid var(--color-text)', borderRadius: '0' }}>
                <option>Become a Member</option>
                <option>Volunteer for Campaigns</option>
                <option>Host an Event</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }}>Join the Movement</button>
          </form>
        </div>
      </section>
    </div>
  );
}
