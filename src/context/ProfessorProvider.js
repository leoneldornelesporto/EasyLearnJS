import React, {createContext, useState} from 'react';
import {postProfessor, putProfessor} from "./Controller/ProfessorController";

export const ProfessorContext = createContext({});

export const ProfessorProvider = ({children}) => {

    const [id, setId] = useState(null);
    const [authorization, setAuthorization] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [nomeCompleto, setNomeCompleto] = useState(null);
    const [nomeNosCertificados, setNomeNosCertificados] = useState(null);
    const [usuarioNaUrl, setUsuarioNaUrl] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [biografia, setBiografia] = useState(null);
    const [dia, setDia] = useState(null);
    const [mes, setMes] = useState(null);
    const [ano, setAno] = useState(null);
    const [dataNascimento, setDataNascimento] = useState(null);
    const [ocupacao, setOcupacao] = useState(null);
    const [linkedin, setLinkedin] = useState(null);
    const [twitter, setTwitter] = useState(null);
    const [github, setGithub] = useState(null);
    const [linkPersonalizado, setLinkPersonalizado] = useState(null);
    const [empresa, setEmpresa] = useState(null);
    const [cargo, setCargo] = useState(null);
    const [instituicao, setInstituicao] = useState(null);
    const [curso, setCurso] = useState(null);
    const [privacidadeDoPerfil, setPrivacidadeDoPerfil] = useState(null);
    const [resultado,setResultado]= useState({});
    const [errorMessage, setErrorMessage] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [email, setEmail] = useState('');

    const salvarProfessor = async (nomeCompleto,cpf,email,senha) => {

        console.log(nomeCompleto)
        console.log(cpf)
        console.log(email)
        console.log(senha)
        try {
            const response = await postProfessor(nomeCompleto,cpf,email,senha)
            setResultado(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar Inserção do Professor.');
            console.log(response);
        }
    };

    const alterarProfessor = async (id, authorization, avatar, nomeCompleto, nomeNoCertificado, cpf, usuarioNaUrl, email, senha, biografia, linkedin, github, twitter, empresa, cargo, privacidadeDoPerfil) => {
        try {
            setDataNascimento(dia+'/'+mes+'/'+ano);
            const response = await putProfessor(id,authorization,avatar,nomeCompleto,nomeNoCertificado,cpf,usuarioNaUrl,email,senha,biografia,linkedin,github,twitter,empresa,cargo,privacidadeDoPerfil);
            console.log(response);
            setResultado(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar Alteração do Professor.');
            console.log(response);
        }
    };

    return (
        <ProfessorContext.Provider
            value={{
                id,
                setId,
                authorization,
                setAuthorization,
                avatar,
                setAvatar,
                nomeCompleto,
                setNomeCompleto,
                nomeNosCertificados,
                setNomeNosCertificados,
                usuarioNaUrl,
                setUsuarioNaUrl,
                cpf,
                setCpf,
                biografia,
                setBiografia,
                dia,
                setDia,
                mes,
                setMes,
                ano,
                setAno,
                dataNascimento,
                setDataNascimento,
                ocupacao,
                setOcupacao,
                linkedin,
                setLinkedin,
                twitter,
                setTwitter,
                github,
                setGithub,
                linkPersonalizado,
                setLinkPersonalizado,
                empresa,
                setEmpresa,
                cargo,
                setCargo,
                instituicao,
                setInstituicao,
                curso,
                setCurso,
                privacidadeDoPerfil,
                setPrivacidadeDoPerfil,
                resultado,
                setResultado,
                errorMessage,
                setErrorMessage,
                username,
                setUsername,
                password,
                setPassword,
                passwordRepeat,
                setPasswordRepeat,
                email,
                setEmail,
                salvarProfessor,
                alterarProfessor,
            }}>
            {children}
        </ProfessorContext.Provider>
    );
};