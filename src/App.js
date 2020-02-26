import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Stars from './components/Stars';
import theme from './themes/MaterialTheme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Stars />
      <Header />
      <Main />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
