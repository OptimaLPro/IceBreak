import Carousel from './mainPageComponents/Carousel';
import FlickingCarousel from './mainPageComponents/FlickingCarousel';
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from 'react-router-dom';
import AnimatedPage from '../../AnimatedPage';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../../assets/css/Awesome_Buttons.css';
import Trivia from '../../assets/images/Trivia.png';
import Spy from '../../assets/images/Spy.png';
import Answer from '../../assets/images/Answer.png';
import WouldYouRather from '../../assets/images/WouldYouRather.png';
import { Button } from '@mui/material';

const MainPage = () => {

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
            <AnimatedPage>
                <div className="main-page">
                    <Link to="/test" style={{ textDecoration: 'none' }}>
                        <div className="">
                            <AwesomeButton type="primary">Test page</AwesomeButton>
                        </div>
                    </Link>
                    <div className="games-grid" >
                        <div className="category-headers">
                            Short games 🕒
                        </div>

                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

                            <div className="game-card number-slide1" onClick={handleClick}>
                                <div className="game-card-content">
                                    <div className="game-card-title">
                                        Crazy Trivia
                                    </div>
                                    <div className="game-card-img" style={{ overflow: 'visible' }}>
                                        <img
                                            src={Trivia}
                                            alt={Trivia}
                                            style={{ maxWidth: '115px', marginLeft: '170px' }}
                                            loading="lazy" />
                                    </div>
                                    <div className="game-card-text">
                                        You think you know it all?
                                    </div>
                                </div>
                            </div>

                            <div className="game-card number-slide1" onClick={handleClick}>
                                <div className="game-card-content">
                                    <div className="game-card-header">
                                        <div className="game-card-title">
                                            Crazy Trivia
                                        </div>
                                        <Button variant="contained" color="ochre">Play!</Button>
                                    </div>
                                    <div className="game-card-explanation">
                                        Test your knowledge with Crazy Trivia! Answer a series of challenging questions and see how well you do. Challenge your friends and see who can will win!
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>

                        <div className="game-card number-slide1">
                            <div className="game-card-content">
                                <div className="game-card-title">
                                    Crazy Trivia
                                </div>
                                <div className="game-card-img" style={{ overflow: 'visible' }}>
                                    <img
                                        src={Trivia}
                                        alt={Trivia}
                                        style={{ maxWidth: '115px', textDecoration: 'none', marginLeft: '170px' }}
                                        loading="lazy" />
                                </div>
                                <div className="game-card-text">
                                    You think you know it all?
                                </div>
                            </div>
                        </div>

                        <div className="games-grid">
                            <div className="game-card number-slide2">
                                <div className="game-card-content">
                                    <div className="game-card-title">
                                        The Spy
                                    </div>
                                    <div className="game-card-img" style={{ overflow: 'visible' }}>
                                        <img
                                            src={Spy}
                                            alt={Spy}
                                            style={{ maxWidth: '115px', textDecoration: 'none', marginLeft: '170px', marginBottom: '5px' }}
                                            loading="lazy" />
                                    </div>
                                    <div className="game-card-text">
                                        Hidding is all.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="game-card number-slide5">
                            <div className="game-card-content">
                                <div className="game-card-title">
                                    Answer!
                                </div>
                                <div className="game-card-img" style={{ overflow: 'visible' }}>
                                    <img
                                        src={Answer}
                                        alt={Answer}
                                        style={{ maxWidth: '180px', textDecoration: 'none', marginLeft: '150px' }}
                                        loading="lazy" />
                                </div>
                                <div className="game-card-text">
                                    Don't by shy.
                                    Just do it.
                                </div>
                            </div>
                        </div>

                        <div className="game-card number-slide6">
                            <div className="game-card-content">
                                <div className="game-card-title">
                                    Would You Rather
                                </div>
                                <div className="game-card-img" style={{ overflow: 'visible' }}>
                                    <img
                                        src={WouldYouRather}
                                        alt={WouldYouRather}
                                        style={{ maxWidth: '250px', textDecoration: 'none', marginLeft: '110px', marginBottom: '23px' }}
                                        loading="lazy" />
                                </div>
                                <div className="game-card-text">
                                    2 options.
                                    Choose.
                                </div>
                            </div>
                        </div>

                        <div className="category-headers">
                            Funny games 😂
                        </div>

                        <div className="game-card number-slide5">
                            <div className="game-card-content">
                                <div className="game-card-title">
                                    Answer!
                                </div>
                                <div className="game-card-img" style={{ overflow: 'visible' }}>
                                    <img
                                        src={Answer}
                                        alt={Answer}
                                        style={{ maxWidth: '180px', textDecoration: 'none', marginLeft: '150px' }}
                                        loading="lazy" />
                                </div>
                                <div className="game-card-text">
                                    Don't by shy.
                                    Just do it.
                                </div>
                            </div>
                        </div>

                        <div className="category-headers">
                            Drinking Games 🍻
                        </div>

                        <div className="game-card number-slide2">
                            <div className="game-card-content">
                                <div className="game-card-title">
                                    The Spy
                                </div>
                                <div className="game-card-img" style={{ overflow: 'visible' }}>
                                    <img
                                        src={Spy}
                                        alt={Spy}
                                        style={{ maxWidth: '115px', textDecoration: 'none', marginLeft: '170px', marginBottom: '5px' }}
                                        loading="lazy" />
                                </div>
                                <div className="game-card-text">
                                    Hidding is all.
                                </div>
                            </div>
                        </div>

                        <div className="game-card number-slide1">
                            <div className="game-card-content">
                                <div className="game-card-title">
                                    Crazy Trivia
                                </div>
                                <div className="game-card-img" style={{ overflow: 'visible' }}>
                                    <img
                                        src={Trivia}
                                        alt={Trivia}
                                        style={{ maxWidth: '115px', textDecoration: 'none', marginLeft: '170px' }}
                                        loading="lazy" />
                                </div>
                                <div className="game-card-text">
                                    You think you know it all?
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </AnimatedPage >
        </>
    );
}

export default MainPage;
