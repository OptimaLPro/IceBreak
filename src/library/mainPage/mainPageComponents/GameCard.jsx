import React, { useState } from 'react';
import { Button } from '@mui/material';
import ReactCardFlip from "react-card-flip";
import { Tilt } from 'react-tilt'
import { Link } from 'react-router-dom';
import '../mainPage.css';

const gameCard = ({ game }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      console.log('Button clicked');
      return;
    }
    setIsFlipped(!isFlipped);
  }

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 20,     // max tilt rotation (degrees)
    perspective: 2000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <>
      <Tilt options={defaultOptions}>

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
      </Tilt>
    </>
  );
}

export default gameCard;