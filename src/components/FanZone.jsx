import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FanZone = () => {
  const [quizState, setQuizState] = useState({ answered: false, correct: false });
  const [pollVoted, setPollVoted] = useState(false);

  const handleQuiz = (answer) => {
    if (answer === '2022') {
      setQuizState({ answered: true, correct: true });
    } else {
      setQuizState({ answered: true, correct: false });
    }
  };

  return (
    <section id="fanzone" className="bg-white">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Fan Zone</h2>
          <p style={{ color: '#666' }}>Connect with the Messi community, test your knowledge, and vote!</p>
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

        <div className="interactive-section" style={{ marginTop: '50px' }}>
          <div className="fan-grid">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="fan-card glass-panel"
            >
              <h3>Messi Quiz 🧠</h3>
              <p style={{ marginBottom: '15px' }}>In which year did Messi finally win the FIFA World Cup?</p>
              {!quizState.answered ? (
                <div className="quiz-options" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <button className="btn btn-outline" onClick={() => handleQuiz('2014')}>2014</button>
                  <button className="btn btn-outline" onClick={() => handleQuiz('2018')}>2018</button>
                  <button className="btn btn-outline" onClick={() => handleQuiz('2022')}>2022</button>
                </div>
              ) : (
                <div className="quiz-result" style={{ 
                  marginTop: '15px', padding: '15px', borderRadius: '10px', 
                  background: quizState.correct ? '#e6ffe6' : '#ffe6e6', 
                  color: quizState.correct ? '#006600' : '#cc0000',
                  fontWeight: '600' 
                }}>
                  {quizState.correct ? '🏆 Correct! What an iconic moment in 2022.' : '❌ Incorrect! He won it in 2022.'}
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="fan-card glass-panel"
            >
              <h3>Fan Poll 📊</h3>
              <p style={{ marginBottom: '15px' }}>Which is your favorite era of Messi's career?</p>
              {!pollVoted ? (
                <div className="poll-options" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button className="btn btn-outline" onClick={() => setPollVoted(true)}>Barcelona (Pep Guardiola era)</button>
                  <button className="btn btn-outline" onClick={() => setPollVoted(true)}>Barcelona (MSN Trio)</button>
                  <button className="btn btn-outline" onClick={() => setPollVoted(true)}>Argentina (World Cup Glory)</button>
                </div>
              ) : (
                <div className="poll-result" style={{ padding: '15px', background: 'var(--light-gray)', borderRadius: '10px' }}>
                  <p style={{ fontWeight: '600', marginBottom: '15px' }}>Thanks for voting! Current results:</p>
                  
                  <div className="poll-bar-container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.9rem' }}><span>Barca (Pep)</span><span>35%</span></div>
                    <div style={{ width: '100%', background: '#ddd', height: '8px', borderRadius: '4px' }}><div style={{ width: '35%', background: 'var(--primary)', height: '100%', borderRadius: '4px' }}></div></div>
                  </div>
                  
                  <div className="poll-bar-container" style={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.9rem' }}><span>Barca (MSN)</span><span>25%</span></div>
                    <div style={{ width: '100%', background: '#ddd', height: '8px', borderRadius: '4px' }}><div style={{ width: '25%', background: 'var(--primary)', height: '100%', borderRadius: '4px' }}></div></div>
                  </div>
                  
                  <div className="poll-bar-container" style={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.9rem' }}><span>Argentina</span><span>40%</span></div>
                    <div style={{ width: '100%', background: '#ddd', height: '8px', borderRadius: '4px' }}><div style={{ width: '40%', background: 'var(--primary)', height: '100%', borderRadius: '4px' }}></div></div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
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
        h3 { margin-bottom: 20px; font-size: 1.8rem; }
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
