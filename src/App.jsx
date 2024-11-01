// src/App.jsx
import React, { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
// src/App.jsx
import './index.css';


const App = () => {
  // Стан для зберігання типів відгуків
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  // Оновлення LocalStorage при зміні стану
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  // Функція для обробки кліків на кнопках
  const handleFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div className="app">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options onLeaveFeedback={handleFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
