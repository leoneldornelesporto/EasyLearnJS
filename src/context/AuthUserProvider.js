import React, {createContext, useState} from 'react';
import {doLogin, doLogout, isLogged} from "./AuthHandler";
import {enviaEmailEsqueciSenha, login, loginV1, v1EsqueciSenha} from "./Controller/LoginController";
import {postAluno} from "./Controller/AlunoController";
import Cookies from "js-cookie";

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
    const [aluno, setAluno] = useState('');
    const [resposta, setResposta] = useState(null);
    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null);
    const [passConfirm, setPassConfirm] = useState(null);
    const [checked, setChecked] = useState(null);
    const [errorMessage, setErrorMessage] = useState({});
    const [authorize, setAuthorize] = useState('');

    const signUp = async (email, pass, username) => {
        try {
            const response = await postAluno(email,pass,username);
            setUser(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar signUp.');
            console.log(response);
        }
    };

    const signIn = async (email, pass, checked) => {
        try {
            const response = await login(email,pass);
            console.log(response)
            Cookies.set('idUser', response.idUser);
            Cookies.set('email', email);
            Cookies.set('pass', pass);
            setAuthorize(response.authorizationCode);
            await doLogin(authorize,checked);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar signIn.');
            console.log(response);
        }
    };

    const signInV1 = async (email, pass) => {
        try {
            const response = await loginV1(email,pass);
            setAluno(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar signIn.');
            console.log(response);
        }
    };

    const sigOut = () => {
        try {
            doLogout();
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar SigOut.');
            console.log(response);
        }
    };

    const esqueciASenhaV1 = async (id, email, senha) => {
        try {
            const response = await v1EsqueciSenha(id,email,senha);
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar signIn.');
            console.log(response);
        }
    };

    const enviarEmailRecuperarSenha = async (email) => {
        try {
            const response = await enviaEmailEsqueciSenha(email);
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar signIn.');
            console.log(response);
        }
    };

    return (
        <AuthUserContext.Provider
            value={{
                signUp,
                signIn,
                signInV1,
                sigOut,
                esqueciASenhaV1,
                enviarEmailRecuperarSenha,
                resposta,
                setResposta,
                aluno,
                user,
                setUser,
                pass,
                setPass,
                passConfirm,
                setPassConfirm,
                checked,
                setChecked,
                errorMessage,
                setErrorMessage,
            }}>
            {children}
        </AuthUserContext.Provider>
    );
};