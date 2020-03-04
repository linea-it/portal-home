import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../../src/components/Header/';
import Home from '../../src/pages/Home';
import Tutorials from '../../src/pages/Tutorials';
import Contact from '../../src/pages/Contact';

function Router() {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tutorials" component={Tutorials} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );

}

export default Router;
