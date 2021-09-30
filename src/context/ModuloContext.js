import React, {createContext, useState} from 'react';
import {findModuloById} from "./Controller/ModuloController";

export const ModuloContext = createContext({});

export const ModuloProvider = ({children}) => {

    const [idAula, setIdAula] = useState('');
    const [modulo, setModulo] = useState([]);
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
            }}>
            {children}
        </ModuloContext.Provider>
    );
};