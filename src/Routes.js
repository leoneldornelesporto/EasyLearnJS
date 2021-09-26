import React from 'react';
import About from './pages/About';
import BuscarCursos from './pages/BuscarCursos';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EsqueciSenha from './pages/EsqueciSenha';
import Cursos from "./pages/Cursos";
import Principal from "./pages/Principal";
import Dashboard from "./pages/Dashboard";
import {Route, Switch} from "react-router-dom";
import CursoDetalhe from "./pages/CursoDetalhe";
import ModuloDetalhe from "./pages/ModuloDetalhe";
import AulaDetalhe from "./pages/AulaDetalhe";
import Perfil from "./pages/Perfil";

export default () => {
    return(
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/my_profile">
                <Perfil/>
            </Route>
            <Route path="/signin">
                <Login/>
            </Route>
            <Route path="/signup">
                <Cadastro/>
            </Route>
            <Route path="/esquecisenha">
                <EsqueciSenha/>
            </Route>
            <Route path="/cursos">
                <Cursos/>
            </Route>
            <Route path="/aula_detalhe=:id">
                <AulaDetalhe/>
            </Route>
            <Route path="/curso_detalhe=:id">
                <CursoDetalhe/>
            </Route>
            <Route path="/modulo_detalhe=:id">
                <ModuloDetalhe/>
            </Route>
            <Route path="/buscar_cursos=:nome">
                <BuscarCursos/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/">
                <Principal/>
            </Route>
        </Switch>
    );
}