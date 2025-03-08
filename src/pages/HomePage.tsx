import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const gameData = [
  {
    id: 'wheel',
    name: 'Wheel',
    description: 'Spin the wheel and test your luck. Higher risk, higher reward.',
    path: '/wheel'
  },
  {
    id: 'poker',
    name: 'Poker',
    description: 'Texas Hold\'em with no limits. Bluff, raise, and outsmart your enemies.',
    path: '/poker'
  },
  {
    id: 'blackjack',
    name: 'Blackjack',
    description: 'Beat the dealer to 21 \nbut don\'t go over. \nDouble down for huge \nwins.',
    path: '/blackjack'
  },
  {
    id: 'roulette',
    name: 'Roulette',
    description: 'Place your bets and \nwatch the ball spin. \nRed, black, or go all \nin on a number.',
    path: '/roulette'
  },
  {
    id: 'tower',
    name: 'Tower',
    description: 'Climb the tower for increasing multipliers. \nCash out or risk it all.',
    path: '/tower'
  },
  {
    id: 'pvp',
    name: 'PvP',
    description: 'Direct player vs player betting. Create custom challenges and wagers.',
    path: '/pvp'
  }
];

const GameCard = ({ game, onPlay }) => {
  return (
    <div className={`game-card ${game.id}-card`}>
      <div className="card-front">
        <h3>{game.name}</h3>
      </div>
      <div className="card-back">
        <p className="description-card">{game.description}</p>
        <div className="button-group">
          <button 
            className="play-button solo" 
            onClick={() => onPlay(game.path, 'solo')}
          >
            Solo
          </button>
          <button 
            className="play-button squads" 
            onClick={() => onPlay(game.path, 'squads')}
          >
            Squads
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();
  
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

  const handlePlay = (path, mode) => {
    console.log(`Playing in ${mode} mode`);
    navigate(path);
  };

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
      <section className="game-selection">
        <h2>Game Selection</h2>
        <div className="game-cards-container">
          {gameData.map(game => (
            <GameCard key={game.id} game={game} onPlay={handlePlay} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;