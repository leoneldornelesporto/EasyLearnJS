import React, {createContext, useState} from 'react';
import {
    atualizarCurso,
    findModuloByUuidCursoAndIdAula,
    getAllCursos,
    getCursoByIdCategoria,
    getCursoByNome,
    getCursoByUuid,
    getCursoByUuidAndIdAula, protectedPmodulo, removerCurso, salvarCurso
} from "./Controller/CursoController";
import {getAulaByUuidCursoAndIdAula} from "./Controller/AulaController";
import {getAuthorization} from "./AuthHandler";

export const CursoContext = createContext({});

export const CursoProvider = ({children}) => {

    const [cursos, setAllCursos] = useState(null);
    const [errorMessage, setErrorMessage] = useState({});
    const [modulo, setModulo] = useState('');
    const [aula, setAula] = useState([]);
    const [verifica, setVerifica] = useState(null);

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
            console.log(modulo)
            setModulo(response);
        } catch (response) {
            setModulo({})
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
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

    const saveCurso = async (idProfessor,nome,descricao,cargahoraria,categoriaId,imagemIcon,ativo) => {
        try {
            const response = await salvarCurso(idProfessor,nome,descricao,cargahoraria,categoriaId,imagemIcon,ativo,getAuthorization());
            setAllCursos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const alterarCurso = async (id,nome,descricao,cargahoraria,categoriaId,imagemIcon) => {
        try {
            const response = await atualizarCurso(id,nome,descricao,cargahoraria,categoriaId,imagemIcon,getAuthorization());
            setAllCursos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };


    const deletarCurso = async (id) => {
        try {
            const response = await removerCurso(id,getAuthorization());
            setAllCursos(response);
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
                saveCurso,
                alterarCurso,
                deletarCurso,
            }}>
            {children}
        </CursoContext.Provider>
    );
};