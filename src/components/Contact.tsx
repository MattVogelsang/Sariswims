import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact & Booking</h2>
      <p>Ready to dive in? Send a message and I'll get back to you ASAP!</p>
      <form action="https://formspree.io/f/xdkdnrap" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
        />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact; 