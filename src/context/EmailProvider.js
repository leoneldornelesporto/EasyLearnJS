import React, {createContext, useState} from 'react';
import {ativarConta} from "./Controller/EmailController";

export const EmailContext = createContext({});

export const EmailProvider = ({children}) => {

    const [resposta, setResposta] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const ativaOEmail = async (id) => {
        try {
            const response = await ativarConta(id);
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <EmailContext.Provider
            value={{
                resposta,
                setResposta,
                ativaOEmail,
            }}>
            {children}
        </EmailContext.Provider>
    );
};