// src/components/Options/Options.jsx
import React from 'react';

const Options = ({ onLeaveFeedback }) => (
  <div className="options">
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
  </div>
);

export default Options;
