import { Routes, Route } from 'react-router-dom';
import MainPage from '../library/mainPage/MainPage';
import RoomEnter from '../library/games/genericPages/RoomEnter';
import TestPage from '../Test';
import PageNotFound from './404Page/PageNotFound';
import NameEnter from '../library/games/genericPages/NameEnter';
import WaitingRoom from '../library/games/genericPages/WaitingRoom';
import StartCountdown from '../library/games/genericPages/StartCountdown';
import ProfilePage from '../library/profilePage/ProfilePage';
import Survey from '../library/games/genericPages/Survey';
import Trivia from '../library/games/Trivia/Trivia';
import PlayMode from '../library/games/genericPages/PlayMode';
import GameType from '../library/games/genericPages/GameType';
import GameSettings from '../library/games/genericPages/GameSettings';
import Gameplay from '../library/games/gamePlayPages/Gameplay';

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/enter" element={<RoomEnter />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/:pin/nameenter" element={<NameEnter />} />
                <Route path="/:pin/waitingroom" element={<WaitingRoom />} />
                <Route path="/:pin/startcountdown" element={<StartCountdown />} />
                <Route path="/:pin/gameplay" element={<Gameplay />} />
                <Route path="/survey" element={<Survey />} />
                {/* <Route path="/:game" element={<Trivia />} /> */}
                <Route path="/:game/playmode" element={<PlayMode />} />
                <Route path="/:game/type" element={<GameType />} />
                <Route path="/:game/:type/settings" element={<GameSettings />} />
                {/* <Route path="/SocketFuncs" element={<SocketFuncs />} /> */}
            </Routes>
        </>
    );
}

export default Router;
