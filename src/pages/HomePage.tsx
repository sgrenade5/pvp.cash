import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Reset animations
    if (headingRef.current) {
      headingRef.current.classList.remove('animate-underline');
      void headingRef.current.offsetWidth;
      headingRef.current.classList.add('animate-underline');
    }
    
    if (descriptionRef.current) {
      // Force animation restart by removing and re-adding the element
      descriptionRef.current.style.animation = 'none';
      void descriptionRef.current.offsetWidth;
      descriptionRef.current.style.animation = '';
    }
    
    return () => {
      if (headingRef.current) {
        headingRef.current.classList.remove('animate-underline');
      }
    };
  }, []);

  return (
    <div className="page-content">
      <div className="heading-container">
        <h1 ref={headingRef} className="welcome-heading">
          welcome to pvp.cash
        </h1>
        <p ref={descriptionRef} className="description">
          type in your own custom bets, raise the stakes, and see who wins. no restrictions, no downtime — <em>just pure degeneracy.</em>
        </p>
      </div>
      <section>
        <h2>Game Selection</h2>
        <ul>
          <li><Link to="/wheel">Wheel</Link></li>
          <li><Link to="/poker">Poker</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;

// Wheel, Poker, Blackjack, Roulette, Tower, PvP