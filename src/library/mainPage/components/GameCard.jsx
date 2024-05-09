import React, { useState } from 'react';
import { Button } from '@mui/material';
import ReactCardFlip from "react-card-flip";
import { Tilt } from 'react-tilt'
import { Link } from 'react-router-dom';
import '../mainPage.css';

const GameCard = ({ game }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      console.log('Button clicked');
      return;
    }
    setIsFlipped(!isFlipped);
  }

  const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 2000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }

  return (
    <Tilt options={defaultOptions}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* Front side of the card */}
        <div className={`game-card ${game.class}`} onClick={handleClick}>
          <div className="game-card-content">
            <div className="game-card-title">
              {game.title}
            </div>
            <div className="game-card-img" style={{ overflow: 'visible' }}>
              <img
                src={game.image}
                alt={game.title}
                className={game.name}
                loading="lazy"
              />
            </div>
            <div className="game-card-text">
              {game.trailer}
            </div>
          </div>
        </div>

        {/* Back side of the card */}
        <div className={`game-card ${game.class}`} onClick={handleClick}>
          <div className="game-card-content">
            <div className="game-card-header">
              <div className="game-card-title">
                {game.title}
              </div>
              <Link to={`/${game.name}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="ochre">Play!</Button>
              </Link>
            </div>
            <div className="game-card-explanation">
              {game.description}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </Tilt>
  );
}

export default GameCard;
