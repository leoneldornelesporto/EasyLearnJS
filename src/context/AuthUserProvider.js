import React, {createContext, useState} from 'react';
import {doLogin, doLogout, isLogged} from "./AuthHandler";
import {login, loginV1} from "./Controller/LoginController";
import {postAluno} from "./Controller/AlunoController";

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
    const [aluno, setAluno] = useState('');
    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null);
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
            setAuthorize(response.authorizationCode);
            doLogin(authorize,checked);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar signIn.');
            console.log(response);
        }
    };

    const signInV1 = async (email, pass) => {
        try {
            const response = await loginV1(email,pass);
            console.log(response)
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

    return (
        <AuthUserContext.Provider
            value={{
                signUp,
                signIn,
                signInV1,
                sigOut,
                aluno,
                user,
                setUser,
                pass,
                setPass,
                checked,
                setChecked,
                errorMessage,
                setErrorMessage,
            }}>
            {children}
        </AuthUserContext.Provider>
    );
};