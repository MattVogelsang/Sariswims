import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+19547582006';
  };

  return (
    <header className="header">
      <h1>Private Swim Lessons with Coach Sara</h1>
      <p>Personalized swim training for all ages — at your pool, on your schedule.</p>
      <button 
        className="phone-number" 
        onClick={handlePhoneClick}
        aria-label="Call Coach Sara at (954) 758-2006"
      >
        📞 (954) 758-2006
      </button>
    </header>
  );
};

export default Header; 