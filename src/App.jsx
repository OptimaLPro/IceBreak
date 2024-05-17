import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/gerenalTheme';
import { AuroraBackgroundProvider } from '@nauverse/react-aurora-background';
import './App.css';
import Router from './utils/Router';
import Menu from './utils/menu/Menu';

function App() {
  return (
    <div className="app-container">
      <AuroraBackgroundProvider
        colors={["#5356FF", '#378CE7', '#67C6E3']}
        useRandomness={true}
        blurAmount="15vw"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />

      <ThemeProvider theme={theme}>
        <div className="main-page">
          <Menu />
          <Router />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
