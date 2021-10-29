import React, {createContext, useState} from 'react';
import {
    assistirAulaSave,
    assistiuAula, concluirCursoByUuid, findAllAlunosMatriculadosEmUmCurso,
    findAllMatriculas,
    saveMatricula, verifcaSeConcluiCurso, verificaPorcentagemDoCurso,
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
    const [assistiu,setAssistiu] = useState(null);
    const [porcentagemCurso,setPorcentagemCurso] = useState(null);
    const [concluiuCurso,setConcluiuCurso] = useState(null);
    const [qtdAlunosMatriculados,setQtdAlunosMatriculados] = useState(null);
    const [cursoMatriculado,setCursoMatriculado] = useState(false);
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

    const verificarMatriculaPorId = async (idAluno,idCurso) => {
        try {
            const response = await verificarSeEstouMatriculadoEmAlgumCursoPorId(idAluno,idCurso,getAuthorization());
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
            setAssistiu(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const registraAulaAssistida = async (idAluno,uuidCurso,idAula) => {
        try {
            const response = await assistirAulaSave(idAluno,uuidCurso,idAula,getAuthorization());
            setResposta(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornaDadosDoCursoMatriculado = async (idAluno,uuid) => {
        try {
            const response = await verificaPorcentagemDoCurso(idAluno,uuid,getAuthorization());
            if(response.status!==500){
                setPorcentagemCurso(response);
            }
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const verificaConcluiAlgumCurso = async (idAluno,uuid) => {
        try {
            const response = await verifcaSeConcluiCurso(idAluno,uuid,getAuthorization());
            setCursoMatriculado(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const concluirCurso = async (idAluno,uuid) => {
        try {
            const response = await concluirCursoByUuid(idAluno,uuid,getAuthorization());
            setConcluiuCurso(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const findAllAlunosMatriculadosEmalgumCurso = async (uuid) => {
        try {
            const response = await findAllAlunosMatriculadosEmUmCurso(uuid,getAuthorization());
            setQtdAlunosMatriculados(response);
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
                cursoMatriculado,
                setPorcentagemCurso,
                porcentagemCurso,
                assistiu,
                concluiuCurso,
                qtdAlunosMatriculados,
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
                retornaDadosDoCursoMatriculado,
                verificaConcluiAlgumCurso,
                concluirCurso,
                findAllAlunosMatriculadosEmalgumCurso,
            }}>
            {children}
        </MatriculaContext.Provider>
    );
};