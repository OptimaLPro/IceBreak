import { Routes, Route } from 'react-router-dom';
import MainPage from '../library/mainPage/MainPage';
import RoomEnter from '../games/generic/RoomEnter';
import TestPage from '../Test';
import PageNotFound from '../utils/404Page/PageNotFound';
import NameEnter from '../games/generic/NameEnter';
import WaitingRoom from '../games/generic/WaitingRoom';
import StartCountdown from '../games/generic/StartCountdown';
import ProfilePage from '../library/userProfile/ProfilePage';

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
            </Routes>
        </>
    );
}

export default Router;
