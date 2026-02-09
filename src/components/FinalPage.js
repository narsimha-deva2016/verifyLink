import React, { useEffect, useState } from 'react';
import './Page.css';
import './FinalPage.css';

function FinalPage() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💘', '💝', '💞', '💓', '💟', '❣️'];
    
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        size: Math.random() * 30 + 20
      };

      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="page active final-page">
        <div className="love-emoji">❤️</div>
        <div className="love-emoji">💕</div>
        <div className="love-emoji">💖</div>
        <h1>Thank You for Accepting My Love! 💗</h1>
        <div className="love-emoji">😍</div>
        <div className="love-emoji">💘</div>
        <div className="love-emoji">💝</div>
        <p>You've made me the happiest person in the world!</p>
        <div className="love-emoji">🥰</div>
        <div className="love-emoji">💞</div>
        <div className="love-emoji">💓</div>
      </div>
      <div className="hearts-container">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.duration}s`,
              fontSize: `${heart.size}px`
            }}
          >
            {heart.symbol}
          </div>
        ))}
      </div>
    </>
  );
}

export default FinalPage;
