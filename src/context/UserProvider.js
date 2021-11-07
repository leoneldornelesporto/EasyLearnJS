import React, {createContext, useState} from 'react';
import {findUserByNomeCompleto} from "./Controller/UserController";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const acharUsuarioPorNomeCompleto = async (nomeCompleto) => {
        try {
            const response = await findUserByNomeCompleto(nomeCompleto);
            setUser(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar Alteração do Professor.');
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                errorMessage,
                acharUsuarioPorNomeCompleto,
            }}>
            {children}
        </UserContext.Provider>
    );
};