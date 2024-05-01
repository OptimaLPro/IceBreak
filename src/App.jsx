import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource-variable/nunito-sans'; // Supports weights 200-900
import MainPage from './library/mainPage/MainPage';
import { AuroraBackgroundProvider } from '@nauverse/react-aurora-background';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RoomEnter from './games/generic/RoomEnter';
import TestPage from './Test';
import Menu from './utils/menu/Menu';
import PageNotFound from './utils/404Page/PageNotFound';
import NameEnter from './games/generic/NameEnter';
import WaitingRoom from './games/generic/WaitingRoom';
import StartCountdown from './games/generic/StartCountdown';
import ProfilePage from './library/profilePage/ProfilePage';



const theme = createTheme({
  typography: {
    fontFamily: '"Nunito Sans", sans-serif', // Specify the font family here
  },
});

function App() {
  return (
    <div className="main-page">
      <AuroraBackgroundProvider
        className="background"
        colors={["#5356FF", "#378CE7", "#67C6E3", "#DFF5FF"]}
        useRandomness="true"
        blurAmount="5vw"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%", // Ensure the background stays behind other content
          zIndex: -1,
        }}
      ></AuroraBackgroundProvider>
      <ThemeProvider theme={theme}>
        {/* <MainPage /> */}
        <Menu />
      </ThemeProvider>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/enter" element={<RoomEnter />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/nameenter" element={<NameEnter />} />
        <Route path="/waitingroom" element={<WaitingRoom />} />
        <Route path="/startcountdown" element={<StartCountdown />} />
      </Routes>
    </div>
  );
}

export default App;
