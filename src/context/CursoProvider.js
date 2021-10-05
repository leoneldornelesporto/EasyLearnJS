import React, {createContext, useState} from 'react';
import {
    findModuloByUuidCursoAndIdAula,
    getAllCursos,
    getCursoByIdCategoria,
    getCursoByNome,
    getCursoByUuid,
    getCursoByUuidAndIdAula, protectedPmodulo
} from "./Controller/CursoController";
import {getAulaByUuidCursoAndIdAula} from "./Controller/AulaController";

export const CursoContext = createContext({});

export const CursoProvider = ({children}) => {

    const [cursos, setAllCursos] = useState(null);
    const [errorMessage, setErrorMessage] = useState({});
    const [modulo, setModulo] = useState('');
    const [aula, setAula] = useState([]);
    const [verifica, setVerifica] = useState('');

    const retornarTodosOsCursos = async () => {
        try {
            const response = await getAllCursos();
            setAllCursos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarCursosPorUuid = async (uuid) => {
        try {
            const response = await getCursoByUuid(uuid);
            setAllCursos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarCursosPorNome = async (nome) => {
        try {
            const response = await getCursoByNome(nome);
            setAllCursos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
        }
    };

    const retornarCursosPorIdDaCategoria = async (id) => {
        console.log("aqui")
        try {
            const response = await getCursoByIdCategoria(id);
            setAllCursos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarCursosPorUuidEidAula = async (uuid,id,authorization) => {
        try {
            const response = await getCursoByUuidAndIdAula(uuid,id,authorization);
            setAllCursos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarModuloPorUuidCursoEIdDaAula = async (uuid,id,authorization) => {
        try {
            const response = await findModuloByUuidCursoAndIdAula(uuid,id,authorization);
            setModulo(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornarAulaPorUuidCursoEIdAula = async (uuid,id,authorization) => {
        try {
            const response = await getAulaByUuidCursoAndIdAula(uuid,id,authorization);
            setAula(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const verificaProximo = async (uuid,id,authorization) => {
        getAulaByUuidCursoAndIdAula(uuid,++id,authorization).then(function(result) {
            if(result!==null){
                return setVerifica(id)
            }
            return setVerifica(false);
        })
    }

    const retornarModulos = async (id,authorization) => {
        try {
            const response = await protectedPmodulo(id,authorization);
            setModulo(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };


    return (
        <CursoContext.Provider
            value={{
                cursos,
                setAllCursos,
                errorMessage,
                setErrorMessage,
                modulo,
                setModulo,
                aula,
                setAula,
                verifica,
                setVerifica,
                retornarCursosPorUuid,
                retornarTodosOsCursos,
                retornarCursosPorNome,
                retornarCursosPorIdDaCategoria,
                retornarCursosPorUuidEidAula,
                retornarModuloPorUuidCursoEIdDaAula,
                retornarAulaPorUuidCursoEIdAula,
                verificaProximo,
                retornarModulos,
            }}>
            {children}
        </CursoContext.Provider>
    );
};