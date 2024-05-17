import { Route, Routes } from "react-router-dom";
import TestPage from "../Test";
import Gameplay from "../library/games/gamePlayPages/Gameplay";
import GameSettings from "../library/games/genericPages/GameSettings";
import GameType from "../library/games/genericPages/GameType";
import NameEnter from "../library/games/genericPages/NameEnter";
import PlayMode from "../library/games/genericPages/PlayMode";
import RoomEnter from "../library/games/genericPages/RoomEnter";
import StartCountdown from "../library/games/genericPages/StartCountdown";
import Survey from "../library/games/genericPages/Survey";
import WaitingRoom from "../library/games/genericPages/WaitingRoom";
import SignIn from "../library/logInPages/SignIn";
import SignUp from "../library/logInPages/SignUp";
import MainPage from "../library/mainPage/MainPage";
import ProfilePage from "../library/userProfile/ProfilePage";
import PageNotFound from "./404Page/PageNotFound";

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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/survey" element={<Survey />} />
        {/* <Route path="/:game" element={<Trivia />} /> */}
        <Route path="/:game/playmode" element={<PlayMode />} />
        <Route path="/:game/type" element={<GameType />} />
        <Route path="/:game/:type/settings" element={<GameSettings />} />
        {/* <Route path="/SocketFuncs" element={<SocketFuncs />} /> */}
      </Routes>
    </>
  );
};

export default Router;
