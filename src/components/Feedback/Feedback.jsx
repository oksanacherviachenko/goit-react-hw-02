// src/components/Feedback/Feedback.jsx
import React from 'react';

const Feedback = ({ feedback }) => (
  <div className="feedback">
    <h2>Feedback Statistics</h2>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
  </div>
);

export default Feedback;
