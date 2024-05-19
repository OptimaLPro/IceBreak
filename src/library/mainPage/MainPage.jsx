import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-awesome-button/dist/styles.css';
import '../../assets/css/Awesome_Buttons.css';
import AnimatedPage from '../../theme/AnimatedPage';
import Loading from '../games/genericPages/components/Loading';
import GameCard from './components/GameCard';
import LandingPage from './components/LandingPage';

const MainPage = () => {
    const [gameData, setGameData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showLandingPage, setShowLandingPage] = useState(false); // Initialize as false

    useEffect(() => {
        // Check if the landing page has been shown before
        const hasShownLandingPage = sessionStorage.getItem('hasShownLandingPage');
        if (!hasShownLandingPage) {
            setShowLandingPage(true); // Show the landing page
            sessionStorage.setItem('hasShownLandingPage', 'true'); // Set the flag
        }

        setLoading(true);
        axios.get('https://icebreak-backend.onrender.com/games/allGames')
            .then(response => {
                setGameData(response.data);
            })
            .catch(error => {
                console.error('Error fetching game data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const shortGames = gameData.filter(game => game.tags.includes('short'));
    const funnyGames = gameData.filter(game => game.tags.includes('funny'));
    const drinkingGames = gameData.filter(game => game.tags.includes('drinking'));

    return (
        <>
            {!loading && !showLandingPage && (<AnimatedPage>
                <div className="main-page">
                    <div className="category-headers">
                        Short games 🕒
                    </div>
                    <div className="cards" >
                        {shortGames.map(game => (
                            <GameCard key={game.name} game={game} />
                        ))}
                    </div>
                    <div className="category-headers">
                        Funny games 😂
                    </div>
                    <div className="cards">
                        {funnyGames.map(game => (
                            <GameCard key={game.name} game={game} />
                        ))}
                    </div>
                    <div className="category-headers">
                        Drinking Games 🍻
                    </div>
                    <div className="cards">
                        {drinkingGames.map(game => (
                            <GameCard key={game.name} game={game} />
                        ))}
                    </div>
                </div>
            </AnimatedPage>)}
            {loading && !showLandingPage && <Loading />}
            {showLandingPage && <LandingPage setShowLandingPage={setShowLandingPage} />}
        </>
    );
}

export default MainPage;
