import { Link } from 'react-router-dom';
import AnimatedPage from '../../theme/AnimatedPage';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../../assets/css/Awesome_Buttons.css';
import GameCard from './components/GameCard';
import { gameData } from './gameData';

const MainPage = () => {

    const shortGames = gameData.filter(game => game.tags.includes('short'));
    const funnyGames = gameData.filter(game => game.tags.includes('funny'));
    const drinkingGames = gameData.filter(game => game.tags.includes('drinking'));

    return (
        <>
            <AnimatedPage>
                <div className="main-page">
                    <Link to="/test" style={{ textDecoration: 'none' }}>
                        <div className="">
                            <AwesomeButton type="primary">Test page</AwesomeButton>
                        </div>
                    </Link>

                    <div className="category-headers">
                        Short games 🕒
                    </div>
                    <div className="cards">
                        {shortGames.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>

                    <div className="category-headers">
                        Funny games 😂
                    </div>
                    <div className="cards">
                        {funnyGames.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>

                    <div className="category-headers">
                        Drinking Games 🍻
                    </div>
                    <div className="cards">
                        {drinkingGames.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div >
            </AnimatedPage >
        </>
    );
}

export default MainPage;
