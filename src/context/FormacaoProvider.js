import React, {createContext, useState} from 'react';
import {
    alterarFormacao,
    findAllFormacoes,
    findAllFormacoesByIdCategoria,
    findFormacoesById, formacaoById, removerFormacao,
    salvarFormacao
} from "./Controller/FormacaoController";
import {getAuthorization} from "./AuthHandler";

export const FormacaoContext = createContext({});

export const FormacaoProvider = ({children}) => {

    const [cursosDetalhe, setCursosDetalhe] = useState(null);
    const [formacao, setFormacao] = useState(null);
    const [allFormacoes, setAllFormacoes] = useState(null);
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
            setFormacao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornaFormacaoById = async (idCategoria) => {
        try {
            const response = await formacaoById(idCategoria);
            setCursosDetalhe(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesProgramacao = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(1);
            setProgramacao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesFrontend = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(2);
            setFrontend(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesDataScience = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(3);
            setDatascience(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesDevops = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(4);
            setDevops(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesUxDesign = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(5);
            setUxDesign(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesMobile = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(6);
            setMobile(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarTodasFormacoesInovacaoGestao = async () => {
        try {
            const response = await findAllFormacoesByIdCategoria(7);
            setInovacaoGestao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornaTodasFormacoesPorCategoriaId = async (idCategoria) => {
        try {
            const response = await findAllFormacoesByIdCategoria(idCategoria);
            setFormacao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarFormacaoPorId = async (idFormacao) => {
        try {
            const response = await findFormacoesById(idFormacao);
            setFormacao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornaTodasAsFormacoes = async () => {
        try {
            const response = await findAllFormacoes();
            setAllFormacoes(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const saveFormacao = async (titulo,descricao,subtitulo,descricaoSubtitulo,categoriaId) => {
        try {
            const response = await salvarFormacao(titulo,descricao,subtitulo,descricaoSubtitulo,categoriaId,getAuthorization());
            setFormacao(response);
            console.log(formacao)
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const updateFormacao = async (idFormacao,titulo,descricao,subtitulo,descricaoSubtitulo,categoriaId) => {
        try {
            const response = await alterarFormacao(idFormacao,titulo,descricao,subtitulo,descricaoSubtitulo,categoriaId,getAuthorization());
            setFormacao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const deleteFormacao = async (idFormacao) => {
        try {
            const response = await removerFormacao(idFormacao,getAuthorization());
            setFormacao(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <FormacaoContext.Provider
            value={{
                cursosDetalhe,
                formacao,
                setFormacao,
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
                allFormacoes,
                setAllFormacoes,
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
                retornarFormacaoPorId,
                retornaTodasFormacoesPorCategoriaId,
                saveFormacao,
                retornaTodasAsFormacoes,
                updateFormacao,
                deleteFormacao,
                retornaFormacaoById
            }}>
            {children}
        </FormacaoContext.Provider>
    );
};