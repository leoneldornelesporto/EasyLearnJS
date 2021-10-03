import React, {createContext, useState} from 'react';
import {findAllFormacoesByIdCategoria} from "./Controller/FormacaoController";
import {getAuthorization} from "./AuthHandler";

export const FormacaoContext = createContext({});

export const FormacaoProvider = ({children}) => {

    const [programacao, setProgramacao] = useState(null);
    const [frontend, setFrontend] = useState(null);
    const [datascience, setDatascience] = useState(null);
    const [devops, setDevops] = useState(null);
    const [uxdesign, setUxDesign] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [inovacaoGestao, setInovacaoGestao] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const retornarTodasFormacoesPorIdCategoria = async (authorization,idCategoria) => {
        try {
            const response = await findAllFormacoesByIdCategoria(authorization,idCategoria);
            setProgramacao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesProgramacao = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(getAuthorization(),1);
            setProgramacao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesFrontend = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(getAuthorization(),2);
            setFrontend(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesDataScience = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(getAuthorization(),3);
            setDatascience(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesDevops = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(getAuthorization(),4);
            setDevops(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesUxDesign = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(getAuthorization(),5);
            setUxDesign(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesMobile = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(getAuthorization(),6);
            setMobile(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesInovacaoGestao = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(getAuthorization(),7);
            setInovacaoGestao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <FormacaoContext.Provider
            value={{
                programacao,
                setProgramacao,
                frontend,
                setFrontend,
                datascience,
                setDatascience,
                devops,
                setDevops,
                uxdesign,
                setUxDesign,
                mobile,
                setMobile,
                inovacaoGestao,
                setInovacaoGestao,
                errorMessage,
                setErrorMessage,
                retornarTodasFormacoesPorIdCategoria,
                retornarTodasFormacoesProgramacao,
                retornarTodasFormacoesFrontend,
                retornarTodasFormacoesDataScience,
                retornarTodasFormacoesDevops,
                retornarTodasFormacoesUxDesign,
                retornarTodasFormacoesMobile,
                retornarTodasFormacoesInovacaoGestao,
            }}>
            {children}
        </FormacaoContext.Provider>
    );
};