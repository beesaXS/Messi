import React, { useState } from 'react';
import { motion } from 'framer-motion';

const quizQuestions = [
  {
    id: 1,
    question: "In which year did Messi finally win the FIFA World Cup?",
    options: ["2014", "2018", "2022"],
    answer: "2022",
    successMessage: "🏆 Correct! What an iconic moment in 2022.",
    errorMessage: "❌ Incorrect! He won it in 2022."
  },
  {
    id: 2,
    question: "How many Ballon d'Or awards has Messi won as of 2023?",
    options: ["7", "8", "9"],
    answer: "8",
    successMessage: "🏆 Correct! He won his 8th in 2023.",
    errorMessage: "❌ Incorrect! He has won 8 Ballon d'Or awards."
  },
  {
    id: 3,
    question: "Which club did Messi join after leaving Barcelona in 2021?",
    options: ["Inter Miami", "Manchester City", "Paris Saint-Germain"],
    answer: "Paris Saint-Germain",
    successMessage: "🏆 Correct! He joined PSG in France.",
    errorMessage: "❌ Incorrect! He joined Paris Saint-Germain."
  },
  {
    id: 4,
    question: "What is Messi's famous jersey number for Argentina and Barcelona?",
    options: ["10", "9", "30"],
    answer: "10",
    successMessage: "🏆 Correct! He is the iconic number 10.",
    errorMessage: "❌ Incorrect! His famous number is 10."
  },
  {
    id: 5,
    question: "How many goals did Messi score in the calendar year 2012 (a world record)?",
    options: ["86", "91", "95"],
    answer: "91",
    successMessage: "🏆 Correct! An unbelievable 91 goals in 2012.",
    errorMessage: "❌ Incorrect! He scored 91 goals."
  },
  {
    id: 6,
    question: "At what age did Messi make his official debut for Barcelona's first team?",
    options: ["16", "17", "18"],
    answer: "17",
    successMessage: "🏆 Correct! He debuted at 17 years old.",
    errorMessage: "❌ Incorrect! He was 17."
  },
  {
    id: 7,
    question: "Which country did Argentina defeat in the 2022 World Cup Final?",
    options: ["Brazil", "Croatia", "France"],
    answer: "France",
    successMessage: "🏆 Correct! They defeated France on penalties.",
    errorMessage: "❌ Incorrect! They played against France."
  },
  {
    id: 8,
    question: "Messi won an Olympic Gold Medal in which year?",
    options: ["2004", "2008", "2012"],
    answer: "2008",
    successMessage: "🏆 Correct! He won gold in Beijing 2008.",
    errorMessage: "❌ Incorrect! He won it in 2008."
  },
  {
    id: 9,
    question: "What is the name of Messi's childhood club in Argentina?",
    options: ["Boca Juniors", "River Plate", "Newell's Old Boys"],
    answer: "Newell's Old Boys",
    successMessage: "🏆 Correct! He started at Newell's Old Boys.",
    errorMessage: "❌ Incorrect! It was Newell's Old Boys."
  },
  {
    id: 10,
    question: "How many Champions League titles did Messi win with Barcelona?",
    options: ["3", "4", "5"],
    answer: "4",
    successMessage: "🏆 Correct! He won 4 UCL titles (2006, 2009, 2011, 2015).",
    errorMessage: "❌ Incorrect! He won 4 titles."
  },
  {
    id: 11,
    question: "What year did Messi win the Copa America with Argentina ahead of the World Cup?",
    options: ["2019", "2020", "2021"],
    answer: "2021",
    successMessage: "🏆 Correct! He won the Copa America in 2021.",
    errorMessage: "❌ Incorrect! He won it in 2021."
  }
];

const FanZone = () => {
  const [quizStates, setQuizStates] = useState({});
  const [pollVoted, setPollVoted] = useState(false);

  const handleQuiz = (id, answer, correctAnswer) => {
    setQuizStates(prev => ({
      ...prev,
      [id]: { answered: true, correct: answer === correctAnswer }
    }));
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
              style={{ maxHeight: '500px', overflowY: 'auto' }}
            >
              <h3>Messi Quiz 🧠</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {quizQuestions.map((q) => (
                  <div key={q.id}>
                    <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>{q.id}. {q.question}</p>
                    {!quizStates[q.id]?.answered ? (
                      <div className="quiz-options" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        {q.options.map(opt => (
                          <button key={opt} className="btn btn-outline" onClick={() => handleQuiz(q.id, opt, q.answer)}>{opt}</button>
                        ))}
                      </div>
                    ) : (
                      <div className="quiz-result" style={{ 
                        marginTop: '15px', padding: '15px', borderRadius: '10px', 
                        background: quizStates[q.id].correct ? '#e6ffe6' : '#ffe6e6', 
                        color: quizStates[q.id].correct ? '#006600' : '#cc0000',
                        fontWeight: '600' 
                      }}>
                        {quizStates[q.id].correct ? q.successMessage : q.errorMessage}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
