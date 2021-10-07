import React, {createContext, useState} from 'react';
import {
    alterarCategoria,
    deleteCategoria,
    getAllCategoria,
    getCursoByIdCategoria
} from "./Controller/CategoriaController";
import {getAuthorization} from "./AuthHandler";

export const CategoriaContext = createContext({});

export const CategoriaProvider = ({children}) => {

    const [categoria, setCategoria] = useState(null);
    const [curso, setAllCursos] = useState('');
    const [opcao, setOpcao] = useState('');
    const [resposta, setResposta] = useState(null);
    const [errorMessage, setErrorMessage] = useState({});

    const retornarCursoPorIdCategoria = async (id) => {
        try {
            const response = await getCursoByIdCategoria(id);
            setAllCursos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornaTodasCategorias = async () => {
        try {
            const response = await getAllCategoria();
            setCategoria(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const updateCategoria = async (id,nome) => {
        try {
            const response = await alterarCategoria(id,nome,getAuthorization());
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const excluirCategoria = async (id) => {
        try {
            const response = await deleteCategoria(id,getAuthorization());
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <CategoriaContext.Provider
            value={{
                curso,
                setAllCursos,
                opcao,
                setOpcao,
                categoria,
                setCategoria,
                resposta,
                setResposta,
                errorMessage,
                setErrorMessage,
                retornarCursoPorIdCategoria,
                retornaTodasCategorias,
                excluirCategoria,
                updateCategoria,
            }}>
            {children}
        </CategoriaContext.Provider>
    );
};