import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Platform from './pages/Platform';
import Leadership from './pages/Leadership';
import Partnerships from './pages/Partnerships';
import Join from './pages/Join';
import Donate from './pages/Donate';

function App() {
  return (
    <Router basename="/DGCaprica">
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/join" element={<Join />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
