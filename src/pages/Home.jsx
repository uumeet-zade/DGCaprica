import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const words = ['Greener', 'Safer', 'Resilient', 'Prosperous', 'Fairer'];
  const images = [
    'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1920&h=1080', // Greener
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1920&h=1080', // Safer
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lifeboat.17-31.underway.arp.jpg/1280px-Lifeboat.17-31.underway.arp.jpg', // Resilient (Generic Lifeboat / Coast Guard)
    'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1920&h=1080', // Prosperous
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1920&h=1080', // Fairer
  ];

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const wordRefs = useRef([]);

  // Interval to increment index and roll to the next word
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((current) => current + 1);
    }, 3500); // Slowed down slightly so users can appreciate the images
    return () => clearInterval(interval);
  }, []);

  // When we reach the cloned first word at the end, wait for the transition to finish,
  // then silently snap back to the actual first word at the top without animation.
  useEffect(() => {
    if (index === words.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 600); // Wait the exact duration of the CSS transition (600ms)
      return () => clearTimeout(timeout);
    }
  }, [index, words.length]);

  // Adjust container width to exactly match the active word
  useEffect(() => {
    if (wordRefs.current[index]) {
      setContainerWidth(wordRefs.current[index].offsetWidth);
    }
  }, [index]);

  // Clone the first word to the end to create a seamless infinite loop
  const displayWords = [...words, words[0]];
  const displayImages = [...images, images[0]];

  return (
    <div>
      <section className="hero">
        {/* Background Image Slider */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.68, -0.2, 0.265, 1.2)' : 'none',
            transform: `translateY(calc(-${index} * 100%))`
          }}>
            {displayImages.map((img, i) => (
              <div key={i} style={{
                flexShrink: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
            ))}
          </div>
          {/* Dark Overlay for Text Legibility */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to right, rgba(8, 6, 13, 0.95) 0%, rgba(8, 6, 13, 0.4) 100%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span>A</span>
              {/* Slot-machine wheel container with dynamic width */}
              <span style={{
                display: 'inline-flex',
                flexDirection: 'column',
                height: '1em', /* Exactly one line of text visible */
                width: containerWidth ? `${containerWidth}px` : 'auto',
                overflow: 'hidden',
                verticalAlign: 'bottom',
                color: 'var(--color-yellow)',
                borderBottom: '12px solid var(--color-yellow)',
                transition: isTransitioning ? 'width 0.6s cubic-bezier(0.68, -0.2, 0.265, 1.2)' : 'none'
              }}>
                <span style={{
                  display: 'flex',
                  flexDirection: 'column',
                  transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.68, -0.2, 0.265, 1.2)' : 'none',
                  transform: `translateY(calc(-${index} * 1em))`
                }}>
                  {displayWords.map((word, i) => (
                    <span 
                      key={`${word}-${i}`} 
                      ref={(el) => (wordRefs.current[i] = el)}
                      style={{ 
                        display: 'block', 
                        height: '1em', 
                        lineHeight: '0.9', /* Match exact height */
                        paddingBottom: '0.1em',
                        whiteSpace: 'nowrap',
                        width: 'max-content'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </div>
            <div style={{ fontSize: '7rem', color: 'var(--color-pure-white)', fontWeight: '800' }}>
              CAPRICA.
            </div>
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '3rem' }}>
            Join the Democratic Greens of Caprica to fight for environmental justice, grassroots democracy, and a sustainable future for all colonies.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/join" className="btn btn-secondary">Get Involved</Link>
            <Link to="/platform" className="btn btn-outline">Read Our Platform</Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '5rem' }}>Our Core Values</h2>
            <p style={{ fontSize: '1.5rem' }}>We stand for principles that protect our planet and empower our people.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3 style={{ color: 'var(--color-green)' }}>Ecological Wisdom</h3>
              <p>We acknowledge that human beings are part of the natural world and we respect the specific values of all forms of life.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--color-green)' }}>Social Justice</h3>
              <p>We assert the right of all persons to a safe and supportive environment, free from discrimination and exploitation.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--color-green)' }}>Grassroots Democracy</h3>
              <p>We strive for a participatory democracy where every citizen has a direct voice in the decisions that affect their lives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-yellow" style={{ borderBottom: 'none' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '5rem' }}>Ready to make a difference?</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.5rem' }}>Our movement relies on people like you. Stand with us to build a sustainable Caprica.</p>
          <Link to="/donate" className="btn btn-primary">Support Our Campaign</Link>
        </div>
      </section>
    </div>
  );
}
