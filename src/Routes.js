import React from 'react';
import About from './pages/About';
import Signin from './pages/Signin';
import Cursos from './pages/Cursos';
import {Route, Switch} from "react-router-dom";

export default () => {
    return(
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/signin">
                <Signin/>
            </Route>
            <Route path="/cursos">
                <Cursos/>
            </Route>
        </Switch>
    );
}