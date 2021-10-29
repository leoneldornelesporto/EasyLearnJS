import React, {createContext, useState} from 'react';
import {
    findModuloByUuidCursoAndIdAula,
    getAllCursos,
    getCursoByIdCategoria,
    getCursoByNome,
    getCursoByUuid,
    getCursoByUuidAndIdAula
} from "./Controller/CursoController";
import {
    deletarAula,
    editarAula,
    getAulaByUuidCursoAndIdAula,
    returnAllAulas,
    salvarAula
} from "./Controller/AulaController";
import {getAuthorization} from "./AuthHandler";

export const AulaContext = createContext({});

export const AulaProvider = ({children}) => {

    const [curso, setAllCursos] = useState([]);
    const [aula, setAula] = useState(null);
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

    const retornarAulasPorId = async (id) => {
        try {
            const response = await getAulaByUuidCursoAndIdAula(id);
            setAula(response);
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

    const retornarTodasAsAulas = async () => {
        try {
            const response = await returnAllAulas(getAuthorization());
            setAula(response);
            console.log(aula)
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const saveAula = async (indice,titulo,urlVideo,transcricao,idCurso,idModulo) => {
        try {
            const response = await salvarAula(indice,titulo,urlVideo,transcricao,idCurso,idModulo,getAuthorization());
            setAula(response);
            console.log(aula)
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const updateAula = async (id,indice,titulo,urlVideo,transcricao,idCurso,idModulo) => {
        try {
            const response = await editarAula(id,indice,titulo,urlVideo,transcricao,idCurso,idModulo,getAuthorization());
            setAula(response);
            console.log(aula)
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const deleteAula = async (id) => {
        try {
            const response = await deletarAula(id,getAuthorization());
            setAula(response);
            console.log(aula)
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const visualizarAula = async (id) => {
        try {
            const response = await deletarAula(id,getAuthorization());
            setAula(response);
            console.log(aula)
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <AulaContext.Provider
            value={{
                aula,
                setAula,
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
                retornarTodasAsAulas,
                saveAula,
                deleteAula,
                updateAula,
                retornarAulasPorId,
            }}>
            {children}
        </AulaContext.Provider>
    );
};