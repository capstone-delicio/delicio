import React from 'react';
import NavbarComponent from './components/Navbar';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavbarComponent />
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;
