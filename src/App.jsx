import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource-variable/nunito-sans'; // Supports weights 200-900
import MainPage from './MainPage';
import { AuroraBackgroundProvider } from '@nauverse/react-aurora-background';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Nunito Sans", sans-serif', // Specify the font family here
  },
});

function App() {
  return (
    <div className="main-page">
      <AuroraBackgroundProvider className='background' colors={["#5356FF", "#378CE7", "#67C6E3", "#DFF5FF"]} useRandomness="true" blurAmount="5vw">
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </AuroraBackgroundProvider>
    </div>
  );
}

export default App;
