import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Router from '../src/router';
import theme from './themes/MaterialTheme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
