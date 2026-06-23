import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">MESSI<span>.</span></a>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#career">Journey</a>
          <a href="#stats">Stats</a>
          <a href="#fanzone">Fan Zone</a>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 25px 5%;
          z-index: 1000;
          transition: var(--transition);
        }
        .navbar.scrolled {
          background: var(--glass);
          backdrop-filter: blur(10px);
          padding: 15px 5%;
          box-shadow: var(--shadow);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--dark);
          text-decoration: none;
          letter-spacing: -1px;
        }
        .logo span {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 40px;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--dark);
          font-weight: 600;
          font-size: 1rem;
          transition: var(--transition);
          position: relative;
        }
        .nav-links a:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition);
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        .nav-links a:hover:after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
