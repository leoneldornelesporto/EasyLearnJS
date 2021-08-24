import React from 'react';
import About from './pages/About';
import BuscarCursos from './pages/BuscarCursos';
import Signin from './pages/Cadastro';
import EsqueciSenha from './pages/EsqueciSenha';
import Cursos from "./pages/Cursos";
import Principal from "./pages/Principal";
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
            <Route path="/esquecisenha">
                <EsqueciSenha/>
            </Route>
            <Route path="/cursos">
                <Cursos/>
            </Route>
            <Route path="/buscarcursos">
                <BuscarCursos/>
            </Route>
            <Route path="/">
                <Principal/>
            </Route>
        </Switch>
    );
}