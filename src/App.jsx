import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource-variable/nunito-sans'; // Supports weights 200-900
import MainPage from './library/mainPage/MainPage';
import { AuroraBackgroundProvider } from '@nauverse/react-aurora-background';
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
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});


function App() {
  return (
    <div className="main-page">

      <AuroraBackgroundProvider colors={["#5356FF", '#378CE7', '#67C6E3']} useRandomness="true" blurAmount="15vw"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}>
      </AuroraBackgroundProvider>
      <ThemeProvider theme={theme}>

        <Menu />

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
      </ThemeProvider>
    </div>

  );
}

export default App;
