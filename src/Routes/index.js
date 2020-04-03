import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Header from '../components/Header';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
=======

import Header from '../components/Header';
import Home from '../pages/Home';
>>>>>>> c3309154e2b850a8eb03a3c694a6f4ca3e47083c
import Tutorials from '../pages/Tutorials';
import Contact from '../pages/Contact';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
<<<<<<< HEAD
        <Route path="/about-us" component={AboutUs} />
=======
>>>>>>> c3309154e2b850a8eb03a3c694a6f4ca3e47083c
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
