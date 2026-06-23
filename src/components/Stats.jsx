import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Ballon d\'Or', value: '8', icon: '💎' },
  { label: 'Career Goals', value: '800+', icon: '⚽' },
  { label: 'Major Trophies', value: '44', icon: '🏆' },
  { label: 'Champions Leagues', value: '4', icon: '⭐' }
];

const Stats = () => {
  return (
    <section id="stats" className="bg-sky">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Stats & Records</h2>
          <p style={{ color: '#666' }}>Numerical proof of his extraordinary legacy</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="stat-card glass-panel"
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="achievements" style={{ marginTop: '80px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>Key Historic Records</h3>
          <div className="records-list">
            <div className="record-item">Most goals in a calendar year (91)</div>
            <div className="record-item">Only player to win World Cup Golden Ball twice</div>
            <div className="record-item">Most appearances in World Cup history</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }
        .stat-card {
          text-align: center;
          padding: 40px;
          transition: var(--transition);
        }
        .stat-card:hover {
          background: white;
          transform: scale(1.05);
        }
        .stat-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .stat-value {
          font-size: 4rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
        }
        .stat-label {
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #888;
          font-size: 0.9rem;
        }
        .records-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .record-item {
          background: white;
          padding: 15px 30px;
          border-radius: 50px;
          font-weight: 500;
          box-shadow: var(--shadow);
          border: 1px solid var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Stats;
