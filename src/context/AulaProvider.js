import React, {createContext, useState} from 'react';
import {
    findModuloByUuidCursoAndIdAula,
    getAllCursos,
    getCursoByIdCategoria,
    getCursoByNome,
    getCursoByUuid,
    getCursoByUuidAndIdAula
} from "./Controller/CursoController";

export const AulaContext = createContext({});

export const AulaProvider = ({children}) => {

    const [curso, setAllCursos] = useState([]);
    const [aula, setAula] = useState([]);
    const [errorMessage, setErrorMessage] = useState({});
    const [modulo, setModulo] = useState('');

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
            console.log(response);
        }
    };

    const retornarCursosPorIdDaCategoria = async (id) => {
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

    return (
        <AulaContext.Provider
            value={{
                curso,
                setAllCursos,
                errorMessage,
                setErrorMessage,
                modulo,
                setModulo,
                retornarCursosPorUuid,
                retornarTodosOsCursos,
                retornarCursosPorNome,
                retornarCursosPorIdDaCategoria,
                retornarCursosPorUuidEidAula,
                retornarModuloPorUuidCursoEIdDaAula,
            }}>
            {children}
        </AulaContext.Provider>
    );
};