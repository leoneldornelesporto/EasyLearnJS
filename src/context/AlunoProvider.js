import React, {createContext, useState} from 'react';
import {postAluno, putAluno} from "./Controller/AlunoController";

export const AlunoContext = createContext({});

export const AlunoProvider = ({children}) => {

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
    const [result,setResult]= useState({});
    const [errorMessage, setErrorMessage] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [email, setEmail] = useState('');

    const salvarAluno = async (email,pass,username,cpf) => {
        try {
            const response = await postAluno(email,pass,username,cpf);
            setResult(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar Alteração do Aluno.');
            console.log(response);
        }
    };

    const alterarAluno = async (id,authorization,avatar,nomeCompleto,nomeNosCertificados,usuarioNaUrl,cpf,biografia,dataDeNascimento,ocupacao,linkedin,twitter,github,linkPersonalizado,empresa,cargo,instituicao,curso,privacidadeDoPerfil) => {
        try {
            setDataNascimento(dia+'/'+mes+'/'+ano);
            const response = await putAluno(id,authorization,avatar,nomeCompleto,nomeNosCertificados,usuarioNaUrl,cpf,biografia,dataDeNascimento,ocupacao,linkedin,twitter,github,linkPersonalizado,empresa,cargo,instituicao,curso,privacidadeDoPerfil);
            console.log(response);
            setResult(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao realizar Alteração do Aluno.');
            console.log(response);
        }
    };

    return (
        <AlunoContext.Provider
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
                result,
                setResult,
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
                salvarAluno,
                alterarAluno,
            }}>
            {children}
        </AlunoContext.Provider>
    );
};