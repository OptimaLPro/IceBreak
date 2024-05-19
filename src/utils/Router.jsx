import { Routes, Route } from "react-router-dom";
import MainPage from "../library/mainPage/MainPage";
import RoomEnter from "../library/games/genericPages/RoomEnter";
import PageNotFound from "./404Page/PageNotFound";
import NameEnter from "../library/games/genericPages/NameEnter";
import WaitingRoom from "../library/games/genericPages/WaitingRoom";
import StartCountdown from "../library/games/genericPages/StartCountdown";
import ProfilePage from "../library/userProfile/ProfilePage";
import Survey from "../library/games/genericPages/Survey";
import PlayMode from "../library/games/genericPages/PlayMode";
import GameType from "../library/games/genericPages/GameType";
import GameSettings from "../library/games/genericPages/GameSettings";
import Gameplay from "../library/games/gamePlayPages/Gameplay";
import SignIn from "../library/logInPages/SignIn";
import SignUp from "../library/logInPages/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/enter" element={<RoomEnter />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/:pin/nameenter" element={<NameEnter />} />
      <Route path="/:pin/waitingroom" element={<WaitingRoom />} />
      <Route path="/:pin/startcountdown" element={<StartCountdown />} />
      <Route path="/:pin/gameplay" element={<Gameplay />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/:game/playmode" element={<PlayMode />} />
      <Route path="/:game/type" element={<GameType />} />
      <Route path="/:game/:type/settings" element={<GameSettings />} />
    </Routes>
  );
};

export default Router;
