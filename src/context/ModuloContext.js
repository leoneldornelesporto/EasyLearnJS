import React, {createContext, useState} from 'react';
import {findAllModulos, findModuloById, saveModulo} from "./Controller/ModuloController";
import {getAuthorization} from "./AuthHandler";

export const ModuloContext = createContext({});

export const ModuloProvider = ({children}) => {

    const [idAula, setIdAula] = useState('');
    const [modulo, setModulo] = useState(null);
    const [opcao, setOpcao] = useState('');
    const [errorMessage, setErrorMessage] = useState({});

    const retornarModuloPeloId = async (idModulo,authorization) => {
        try {
            const response = await findModuloById(idModulo,authorization);
            setModulo(response);

            console.log(modulo);
            setIdAula(modulo.aulaDto[1].id);
            console.log(idAula);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornaTodosOsModulos = async () => {
        try {
            const response = await findAllModulos(getAuthorization());
            setModulo(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const salvarModulo = async (indice,titulo,idCurso,idAula,subtitulo) => {
        try {
            const response = await saveModulo(indice,titulo,idCurso,idAula,subtitulo,getAuthorization());
            setModulo(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <ModuloContext.Provider
            value={{
                idAula,
                setIdAula,
                modulo,
                setModulo,
                opcao,
                setOpcao,
                errorMessage,
                setErrorMessage,
                retornarModuloPeloId,
                retornaTodosOsModulos,
                salvarModulo,
            }}>
            {children}
        </ModuloContext.Provider>
    );
};