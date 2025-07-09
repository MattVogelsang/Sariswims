import React from 'react';
import './WhyChoose.css';

const WhyChoose: React.FC = () => {
  const benefits = [
    'Certified Swim Instructor',
    'Custom lessons tailored to your goals',
    'Flexible scheduling — I travel to your pool',
    'Great for beginners, competitive swimmers, or fitness'
  ];

  return (
    <section className="why-choose">
      <h2>Why Choose Coach Sara?</h2>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>✅ {benefit}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChoose; 