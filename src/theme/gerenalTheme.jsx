import { createTheme } from '@mui/material/styles';
import '@fontsource-variable/nunito-sans'; // Supports weights 200-900

export const theme = createTheme({
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