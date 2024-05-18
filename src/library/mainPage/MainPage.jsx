import { useState, useEffect } from 'react';
import AnimatedPage from '../../theme/AnimatedPage';
import 'react-awesome-button/dist/styles.css';
import '../../assets/css/Awesome_Buttons.css';
import GameCard from './components/GameCard';
import axios from 'axios';
import Loading from '../games/genericPages/components/Loading';

const MainPage = () => {
    const [gameData, setGameData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
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
            {!loading && (<AnimatedPage>
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
            {loading && <Loading />}
        </>
    );
}

export default MainPage;
