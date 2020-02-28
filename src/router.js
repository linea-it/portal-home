import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Tutorials from './components/Tutorials';

function Router() {

    //let history = useHistory();

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/tutorials" component={Tutorials} />
            </Switch>
        </BrowserRouter>
    );

}

export default Router;
