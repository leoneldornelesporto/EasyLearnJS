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
import CursosMatriculados from "./pages/CursoMatriculado";
import AgendamentoTutoria from "./pages/AgendamentoTutoria";
import Forum from "./pages/Forum";
import Formacao from "./pages/Formacao";
import FormacaoDetalhe from "./pages/FormacaoDetalhe";
import PlanoDeEstudo from "./pages/PlanoDeEstudos";
import CursosPorCategoria from "./pages/CursosPorCategoria";
import CadastrarCurso from "./pages/CadastrarCurso";
import CadastrarCategoria from "./pages/CadastrarCategoria";
import CadastrarFormacao from "./pages/CadastrarFormacao";
import CadastrarAula from "./pages/CadastrarAulas";
import CadastrarModulo from "./pages/CadastrarModulo";
import ConfirmarEmail from "./pages/ConfirmarEmail";
import RedefinirSenha from "./pages/RedefinirSenha";
import GeraCertificado from "./pages/GeraCertificado";
import Payment from "./pages/Payment";
import User from "./pages/User";
import ForumDetalhe from "./pages/ForumDetalhe";
import CadastrarForum from "./pages/CadastrarForum";

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
            <Route path="/courses_mine">
                <CursosMatriculados/>
            </Route>
            <Route path="/agendamento_tutoria">
                <AgendamentoTutoria/>
            </Route>
            <Route path="/cadastrar_forum">
                <CadastrarForum/>
            </Route>
            <Route path="/forum">
                <Forum/>
            </Route>
            <Route path="/forum_detalhe=:id">
                <ForumDetalhe/>
            </Route>
            <Route path="/formacoes">
                <Formacao/>
            </Route>
            <Route path="/formacoes_detalhe=:id">
                <FormacaoDetalhe/>
            </Route>
            <Route path="/planos-estudos-publicos">
                <PlanoDeEstudo/>
            </Route>
            <Route path="/cursos_por_categoria=:id">
                <CursosPorCategoria/>
            </Route>
            <Route path="/confirmar_email=:id">
                <ConfirmarEmail/>
            </Route>
            <Route path="/cadastrar_curso">
                <CadastrarCurso/>
            </Route>
            <Route path="/cadastrar_categoria">
                <CadastrarCategoria/>
            </Route>
            <Route path="/cadastrar_formacao">
                <CadastrarFormacao/>
            </Route>
            <Route path="/cadastrar_aula">
                <CadastrarAula/>
            </Route>
            <Route path="/cadastrar_modulo">
                <CadastrarModulo/>
            </Route>
            <Route path="/resetPassword=:id&email=:email">
                <RedefinirSenha/>
            </Route>
            <Route path="/certificado=:uuid">
                <GeraCertificado/>
            </Route>
            <Route path="/payment=:uuidCurso">
                <Payment/>
            </Route>
            <Route path="/user=:name">
                <User/>
            </Route>
            <Route path="/">
                <Principal/>
            </Route>
        </Switch>
    );
}