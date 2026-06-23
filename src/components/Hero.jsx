import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="bg-sky">
      <div className="container hero-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h2 className="subtitle">THE WORLD'S GREATEST</h2>
          <h1 className="hero-title">Lionel <br/><span>Messi</span></h1>
          <p className="hero-description">
            From Rosario to the clouds of glory. Discover the incredible journey of 
            the man who redefined football forever.
          </p>
          <div className="hero-btns">
            <a href="#career" className="btn btn-primary">The Journey</a>
            <a href="#stats" className="btn btn-outline" style={{ marginLeft: '15px' }}>View Stats</a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-image"
        >
          <div className="img-frame">
            <img src="/hero.png" alt="Lionel Messi" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 50px;
        }
        .subtitle {
          color: var(--primary);
          letter-spacing: 5px;
          font-size: 1rem;
          margin-bottom: 20px;
        }
        .hero-title {
          font-size: 6rem;
          line-height: 0.9;
          margin-bottom: 30px;
        }
        .hero-title span {
          color: var(--primary);
        }
        .hero-description {
          font-size: 1.25rem;
          color: #666;
          max-width: 500px;
          margin-bottom: 40px;
        }
        .hero-image {
          position: relative;
        }
        .img-frame {
          position: relative;
          z-index: 1;
        }
        .img-frame img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
        }
        .img-frame:before {
          content: '';
          position: absolute;
          top: -20px;
          right: -20px;
          bottom: 20px;
          left: 20px;
          border: 10px solid var(--primary);
          border-radius: 30px;
          z-index: -1;
        }
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-description {
            margin: 0 auto 40px;
          }
          .hero-title {
            font-size: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
