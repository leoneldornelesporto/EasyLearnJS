import React, {createContext, useState} from 'react';
import {
    assistirAulaSave,
    assistiuAula,
    findAllMatriculas,
    saveMatricula,
    verificarSeEstouMatriculadoEmAlgumCursoPorId,
    verificarSeEstouMatriculadoEmAlgumCursoPorIdConcluidos,
    verificarSeEstouMatriculadoEmAlgumCursoPorUuid,
    verificarSePauseiAlgumCursoNaMinhaMatricula
} from "./Controller/MatriculaController";
import {getAuthorization} from "./AuthHandler";

export const MatriculaContext = createContext({});

export const MatriculaProvider = ({children}) => {

    const [matriculas, setMatriculas] = useState(null);
    const [cursosPausados,setCursosPausados] = useState(null);
    const [resposta,setResposta] = useState(false);
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

    const retornaAulasAssistida = async (idAluno,idAula) => {
        try {
            const response = await assistiuAula(idAluno,idAula,getAuthorization());
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const registraAulaAssistida = async (idAluno,idAula) => {
        try {
            const response = await assistirAulaSave(idAluno,idAula,getAuthorization());
            setResposta(response);
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
                resposta,
                setResposta,
                errorMessage,
                setErrorMessage,
                retornarTodasMatriculas,
                salvarMatricula,
                verificarMatriculaPorId,
                verificarMatriculaPorUuid,
                verificarSeEstouMatriculadoEmAlgumCursoById,
                verificarSePauseiAlgumCursoMatricula,
                retornaAulasAssistida,
                registraAulaAssistida,
            }}>
            {children}
        </MatriculaContext.Provider>
    );
};