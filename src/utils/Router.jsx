import { Routes, Route } from 'react-router-dom';
import MainPage from '../library/mainPage/MainPage';
import RoomEnter from '../library/games/genericPages/RoomEnter';
import TestPage from '../Test';
import PageNotFound from './404Page/PageNotFound';
import NameEnter from '../library/games/genericPages/NameEnter';
import WaitingRoom from '../library/games/genericPages/WaitingRoom';
import StartCountdown from '../library/games/genericPages/StartCountdown';
import ProfilePage from '../library/profilePage/ProfilePage';
import Survey from '../library/mainPage/components/Survey';
import Trivia from '../library/games/Trivia/Trivia';
import PlayMode from '../library/games/genericPages/PlayMode';
import GameType from '../library/games/genericPages/GameType';

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/enter" element={<RoomEnter />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/nameenter" element={<NameEnter />} />
                <Route path="/waitingroom" element={<WaitingRoom />} />
                <Route path="/startcountdown" element={<StartCountdown />} />
                <Route path="/survey" element={<Survey />} />
                <Route path="/trivia" element={<Trivia />} />
                <Route path="/playmode" element={<PlayMode />} />
                <Route path="/type" element={<GameType />} />
            </Routes>
        </>
    );
}

export default Router;
