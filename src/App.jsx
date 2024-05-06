import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource-variable/nunito-sans'; // Supports weights 200-900
import { AuroraBackgroundProvider } from '@nauverse/react-aurora-background';
import './App.css';
import Router from './utils/Router';
import Menu from './utils/menu/Menu';


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

        <Router />
        
      </ThemeProvider>
    </div>

  );
}

export default App;
