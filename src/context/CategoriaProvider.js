import React, {createContext, useState} from 'react';
import {getCursoByIdCategoria} from "./Controller/CategoriaController";

export const CategoriaContext = createContext({});

export const CategoriaProvider = ({children}) => {

    const [curso, setAllCursos] = useState([]);
    const [opcao, setOpcao] = useState('');
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

    return (
        <CategoriaContext.Provider
            value={{
                curso,
                setAllCursos,
                opcao,
                setOpcao,
                errorMessage,
                setErrorMessage,
                retornarCursoPorIdCategoria,
            }}>
            {children}
        </CategoriaContext.Provider>
    );
};