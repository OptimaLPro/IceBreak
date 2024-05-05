import React, { useState } from 'react';
// import Trivia from '../../../assets/images/Trivia.png';
// import Spy from '../../assets/images/Spy.png';
// import Answer from '../../assets/images/Answer.png';
// import WouldYouRather from '../../assets/images/WouldYouRather.png';
import { Button } from '@mui/material';
import ReactCardFlip from "react-card-flip";
import { Link } from 'react-router-dom';
import '../mainPage.css';

const gameCard = ({ game }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      // If the click target is a button, don't flip the card
      console.log('Button clicked');
      return;
    }
    setIsFlipped(!isFlipped);
  }
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

        <div className={`game-card ${game.class}`} onClick={handleClick}>
          <div className="game-card-content">
            <div className="game-card-title">
              {game.title}
            </div>
            <div className="game-card-img" style={{ overflow: 'visible' }}>
              <img
                src={game.image}
                alt={game.image}
                className={game.name}
                loading="lazy" />
            </div>
            <div className="game-card-text">
              {game.trailer}
            </div>
          </div>
        </div>

        <div className={`game-card ${game.class}`} onClick={handleClick}>
          <div className="game-card-content">
            <div className="game-card-header">
              <div className="game-card-title">
                {game.title}
              </div>
              <Button variant="contained" color="ochre">Play!</Button>
            </div>
            <div className="game-card-explanation">
              {game.description}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
}

export default gameCard;