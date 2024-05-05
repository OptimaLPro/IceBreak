import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource-variable/nunito-sans'; // Supports weights 200-900
import MainPage from './MainPage';
import { AuroraBackgroundProvider } from '@nauverse/react-aurora-background';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Survey from './components/Survey';


const theme = createTheme({
  typography: {
    fontFamily: '"Nunito Sans", sans-serif', // Specify the font family here
  },
});


function App() {
  return (
    <div className="main-page">
      <AuroraBackgroundProvider className='background' colors={["#5356FF", "#378CE7", "#67C6E3", "#DFF5FF"]} useRandomness="true" blurAmount="5vw"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%', // Ensure the background stays behind other content
          zIndex: -1,
        }}>


      </AuroraBackgroundProvider>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
