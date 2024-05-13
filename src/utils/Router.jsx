import { Routes, Route } from 'react-router-dom';
import MainPage from '../library/mainPage/MainPage';
import RoomEnter from '../library/games/genericPages/RoomEnter';
import TestPage from '../Test';
import PageNotFound from './404Page/PageNotFound';
import NameEnter from '../library/games/genericPages/NameEnter';
import WaitingRoom from '../library/games/genericPages/WaitingRoom';
import StartCountdown from '../library/games/genericPages/StartCountdown';
import ProfilePage from '../library/userProfile/ProfilePage'
import Survey from '../library/mainPage/components/Survey';

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
            </Routes>
        </>
    );
}

export default Router;
