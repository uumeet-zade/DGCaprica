import { Link } from 'react-router-dom';
import logo from '../assets/democraticgreensnew.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="DGC Logo" style={{ height: '55px', width: 'auto' }} />
          <span style={{ fontSize: '1.25rem', marginLeft: '0.5rem' }}>Democratic Greens</span>
        </Link>
        <ul className="navbar-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/platform">Platform</Link></li>
          <li><Link to="/members">Our Members</Link></li>
          <li><Link to="/elections">Elections</Link></li>
          <li><Link to="/partnerships">Partnerships</Link></li>
          <li><Link to="/donate" className="btn btn-nav">Support Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}
