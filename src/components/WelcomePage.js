import React from 'react';
import './Page.css';

function WelcomePage({ onNext }) {
  return (
    <div className="page active">
      <h1>Hi Cutie! 💕</h1>
      <p>How are you doing today?</p>
      <p>Let's start a special survey just for you!</p>
      <button className="btn btn-primary" onClick={onNext}>
        Click to Start Survey
      </button>
    </div>
  );
}

export default WelcomePage;
