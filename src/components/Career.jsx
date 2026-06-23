import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2004',
    title: 'The Beginning',
    desc: 'Made his first-team debut for FC Barcelona at age 17, starting a legendary era.',
    icon: '⚽'
  },
  {
    year: '2009',
    title: 'European Glory',
    desc: 'Won his first Ballon d\'Or and led Barca to a historic treble.',
    icon: '🏆'
  },
  {
    year: '2021',
    title: 'Copa America',
    desc: 'Finally secured major international glory with Argentina in Maracana.',
    icon: '🇦🇷'
  },
  {
    year: '2022',
    title: 'World Champion',
    desc: 'Lifted the FIFA World Cup trophy in Qatar, cementing his status as the GOAT.',
    icon: '👑'
  },
  {
    year: '2023',
    title: 'A New Chapter',
    desc: 'Joined Inter Miami, bringing his magic to the United States.',
    icon: '🌴'
  }
];

const Career = () => {
  return (
    <section id="career" className="bg-white">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Career Journey</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
        </div>
        
        <div className="timeline">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content glass-panel">
                <span className="year">{item.year}</span>
                <h3>{item.icon} {item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background: var(--primary);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          right: -10px;
          background: var(--secondary);
          border: 4px solid var(--primary);
          top: 30px;
          border-radius: 50%;
          z-index: 1;
        }
        .left { left: 0; }
        .right { left: 50%; }
        .right::after { left: -10px; }
        
        .timeline-content {
          padding: 20px 30px;
          position: relative;
          transition: var(--transition);
        }
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .year {
          color: var(--primary);
          font-weight: 800;
          font-size: 1.2rem;
          display: block;
          margin-bottom: 5px;
        }
        h3 { margin-bottom: 15px; }

        @media (max-width: 768px) {
          .timeline::after { left: 31px; }
          .timeline-item { width: 100%; padding-left: 70px; padding-right: 25px; }
          .timeline-item::after { left: 21px; }
          .right { left: 0; }
        }
      `}</style>
    </section>
  );
};

export default Career;
