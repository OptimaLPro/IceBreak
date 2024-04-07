import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource-variable/nunito-sans'; // Supports weights 200-900
import Menu from './components/Menu';

const theme = createTheme({
  typography: {
    fontFamily: '"Nunito Sans", sans-serif', // Specify the font family here
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
    </ThemeProvider>
  );
}

export default App;
