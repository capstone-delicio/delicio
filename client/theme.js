import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      //   main: '#f2ca68',
      main: '#ffbf69',
      contrastText: '#fff',
    },
    secondary: {
      main: '#64c0b7',
      //   main: '#f2ca68',

      contrastText: '#fff',
    },
  },
});

export default theme;
