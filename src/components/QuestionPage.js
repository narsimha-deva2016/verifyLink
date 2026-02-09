import React, { useState, useRef, useEffect } from 'react';
import './Page.css';

function QuestionPage({ onNext }) {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);
  const noBtnRef = useRef(null);
  const containerRef = useRef(null);

  const noButtonTexts = [
    "Please bha say yes 🥺",
    "One Anthe naha Bha 😢",
    "Think again... 💔",
    "Are you sure? 🥺",
    "Please please please 🙏",
    "Don't break my heart 💔",
    "Just say yes na 😊",
    "Come on... 💕",
    "Why not? 😢",
    "I'll be sad 😭"
  ];

  useEffect(() => {
    // Initialize button position after component mounts
    if (noBtnRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const btnRect = noBtnRef.current.getBoundingClientRect();
      const initialX = (containerRect.width - btnRect.width) / 2;
      const initialY = containerRect.height / 2 + 20;
      setNoPosition({ x: initialX, y: initialY });
    }
  }, []);

  const moveButton = () => {
    if (!noBtnRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const btn = noBtnRef.current;
    
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    setNoPosition({ x: randomX, y: randomY });
    setNoClickCount(prev => prev + 1);

    // Make button smaller after 3 clicks
    if (noClickCount > 2) {
      const newScale = Math.max(0.6, 1.2 - ((noClickCount + 1) * 0.05));
      setNoScale(newScale);
    }
  };

  return (
    <div className="page active">
      <h1>Will You Be My Valentine? 💖</h1>
      <p>This is a very important question...</p>
      <div className="button-container" ref={containerRef}>
        <button className="btn btn-yes" onClick={onNext}>
          Yes! 💕
        </button>
        <button
          ref={noBtnRef}
          className="btn btn-no"
          onMouseEnter={moveButton}
          onClick={moveButton}
          style={{
            left: `${noPosition.x}px`,
            top: `${noPosition.y}px`,
            transform: `scale(${noScale})`
          }}
        >
          {noClickCount === 0 ? 'No' : noButtonTexts[noClickCount % noButtonTexts.length]}
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;
