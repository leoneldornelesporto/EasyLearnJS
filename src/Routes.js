import React from 'react';
import { Switch } from 'react-router';
import About from './pages/About';
import RouteHandler from './components/RouteHandler';

export default () => {
    return(
        <Switch>
            <RouteHandler exact path="/about">
                <About/>
            </RouteHandler>
        </Switch>
    );
}
