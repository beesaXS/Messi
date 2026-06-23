import React from 'react';
import { motion } from 'framer-motion';

const FanZone = () => {
  return (
    <section id="fanzone" className="bg-white">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Fan Zone</h2>
          <p style={{ color: '#666' }}>Connect with the Messi community</p>
        </div>

        <div className="fan-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="fan-card glass-panel"
          >
            <h3>Leave a Message</h3>
            <form className="fan-form">
              <input type="text" placeholder="Your Name" />
              <textarea placeholder="Your message to Leo..."></textarea>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="fan-card highlights"
          >
            <h3>Magic Moments</h3>
            <div className="video-placeholder">
              <div className="play-btn">▶</div>
              <p>Messi's Top 10 Goals</p>
            </div>
            <div className="social-links" style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <span className="social-icon">Instagram</span>
              <span className="social-icon">Twitter</span>
              <span className="social-icon">Facebook</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .fan-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        .fan-card {
          padding: 40px;
        }
        h3 { margin-bottom: 25px; font-size: 1.8rem; }
        .fan-form input, .fan-form textarea {
          width: 100%;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-family: inherit;
        }
        .fan-form textarea { height: 120px; resize: none; }
        
        .video-placeholder {
          height: 250px;
          background: linear-gradient(45deg, #1a1a1a, #333);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: var(--transition);
        }
        .video-placeholder:hover {
          filter: brightness(1.2);
        }
        .play-btn {
          font-size: 4rem;
          margin-bottom: 10px;
          color: var(--primary);
        }
        .social-icon {
          background: var(--light-gray);
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        .social-icon:hover {
          background: var(--primary);
          color: white;
        }

        @media (max-width: 850px) {
          .fan-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default FanZone;
