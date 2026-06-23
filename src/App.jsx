import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Career from './components/Career';
import Stats from './components/Stats';
import FanZone from './components/FanZone';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Career />
      <Stats />
      <FanZone />
      <footer style={{ padding: '40px', textAlign: 'center', background: '#f5f7fa' }}>
        <p>© 2026 Leo Messi Tribute | Built with ❤️ for the GOAT</p>
      </footer>
    </div>
  );
}

export default App;
