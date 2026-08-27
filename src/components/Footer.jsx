import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Democratic Greens of Caprica</h4>
            <p><strong>National Headquarters:</strong><br/>110 Acton Circle, Montiablo</p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Advancing ecological wisdom, social justice, and grassroots democracy across Caprica.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/platform">Platform</Link></li>
              <li><Link to="/members">Members</Link></li>
              <li><Link to="/partnerships">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h4>Take Action</h4>
            <ul>
              <li><Link to="/join">Get Involved</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Democratic Greens of Caprica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
