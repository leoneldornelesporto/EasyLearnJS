import React, {createContext, useState} from 'react';
import {
    findAllMatriculas,
    saveMatricula,
    verificarSeEstouMatriculadoEmAlgumCursoPorId,
    verificarSeEstouMatriculadoEmAlgumCursoPorIdConcluidos,
    verificarSeEstouMatriculadoEmAlgumCursoPorUuid,
    verificarSePauseiAlgumCursoNaMinhaMatricula
} from "./Controller/MatriculaController";

export const MatriculaContext = createContext({});

export const MatriculaProvider = ({children}) => {

    const [matriculas, setMatriculas] = useState(null);
    const [cursosPausados,setCursosPausados] = useState(null)
    const [errorMessage, setErrorMessage] = useState({});

    const retornarTodasMatriculas = async (authorization) => {
        try {
            const response = await findAllMatriculas(authorization);
            setMatriculas(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const salvarMatricula = async (authorization,idAluno,idCurso,progresso,estado) => {
        try {
            const response = await saveMatricula(authorization,idAluno,idCurso,progresso,estado);
            setMatriculas(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const verificarMatriculaPorId = async (idAluno,idCurso,authorization) => {
        try {
            const response = await verificarSeEstouMatriculadoEmAlgumCursoPorId(idAluno,idCurso,authorization);
            setMatriculas(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const verificarMatriculaPorUuid = async (idAluno,idCurso,authorization) => {
        try {
            const response = await verificarSeEstouMatriculadoEmAlgumCursoPorUuid(idAluno,idCurso,authorization);
            setMatriculas(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const verificarSeEstouMatriculadoEmAlgumCursoById = async (idAluno,authorization) => {
        try {
            const response = await verificarSeEstouMatriculadoEmAlgumCursoPorIdConcluidos(idAluno,authorization);
            setMatriculas(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const verificarSePauseiAlgumCursoMatricula = async (idAluno,authorization) => {
        try {
            const response = await verificarSePauseiAlgumCursoNaMinhaMatricula(idAluno,authorization);
            setCursosPausados(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <MatriculaContext.Provider
            value={{
                matriculas,
                setMatriculas,
                cursosPausados,
                setCursosPausados,
                errorMessage,
                setErrorMessage,
                retornarTodasMatriculas,
                salvarMatricula,
                verificarMatriculaPorId,
                verificarMatriculaPorUuid,
                verificarSeEstouMatriculadoEmAlgumCursoById,
                verificarSePauseiAlgumCursoMatricula,
            }}>
            {children}
        </MatriculaContext.Provider>
    );
};