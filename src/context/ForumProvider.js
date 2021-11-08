import React, {createContext, useState} from 'react';
import {
    allTopicos,
    alterarTopico,
    removerTopico,
    responderTopicoController,
    saveTopico,
    topicoById
} from "./Controller/ForumController";

export const ForumContext = createContext({});

export const ForumProvider = ({children}) => {

    const [resposta, setResposta] = useState(null);
    const [errorMessage, setErrorMessage] = useState({});

    const cadastrar = async (titulo,mensagem,idCurso,idUsuario) => {
        try {
            const response = await saveTopico(titulo,mensagem,idCurso,idUsuario);
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const todosTopicos = async () => {
        try {
            const response = await allTopicos();
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
        }
    };

    const detalhar = async (idTopico) => {
        try {
            const response = await topicoById(idTopico);
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const atualizar = async (id,titulo,mensagem) => {
        try {
            const response = await alterarTopico(id,titulo,mensagem);
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const responderTopico = async (mensagem,idTopico,idUsuario) => {
        try {
            const response = await responderTopicoController(mensagem,idTopico,idUsuario);
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };


    const remover = async (idTopico) => {
        try {
            const response = await removerTopico(idTopico);
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <ForumContext.Provider
            value={{
                resposta,
                errorMessage,
                setErrorMessage,
                cadastrar,
                todosTopicos,
                detalhar,
                atualizar,
                remover,
                responderTopico,
            }}>
            {children}
        </ForumContext.Provider>
    );
};