import {create} from 'apisauce';

const api = create({
    //baseURL: 'https://easylearn-app.herokuapp.com',
    baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function getAllCursos() {
    return (await api.get('/v1/curso')).data;
}

export async function getCursoByUuid(uuid) {
    return (await api.get('/v1/curso/uuid/'+uuid)).data;
}

export async function getCursoByNome(nome) {
    return (await api.get('/v1/curso/nome/'+nome)).data;
}

export async function getCursoByIdCategoria(id) {
    return (await api.get('/v1/curso/categoria/'+id)).data;
}

export async function signUp(usuario,senha) {
    return (await api.get('/login/signin','authorization',{headers:{usuario:usuario, senha:senha}})).data;
}

export async function v1SignUp(usuario,senha) {
    return (await api.get('/login/v1/signin','authorization',{headers:{usuario:usuario, senha:senha}})).data;
}

export async function postAluno(username,password,email) {
    return (await api.post('/v1/SalvarAluno',{nomeCompleto:username,senha:password,email:email})).data;
}

export async function putAluno(id,authorization,nomeCompleto,nomeNosCertificados,usuarioNaUrl,cpf,biografia,dataDeNascimento,ocupacao,linkedin,twitter,github,linkPersonalizado,empresa,cargo,instituicao,curso,privacidadeDoPerfil) {
    return (await api.put('/v1/protectedA/aluno/'+id,{nomeCompleto:nomeCompleto,nomeNosCertificados:nomeNosCertificados,usuarioNaUrl:usuarioNaUrl,cpf:cpf,biografia:biografia,dataDeNascimento:dataDeNascimento,ocupacao:ocupacao,linkedin:linkedin,twitter:twitter,github:github,linkPersonalizado:linkPersonalizado,empresa:empresa,cargo:cargo,instituicao:instituicao,curso:curso,privacidadeDoPerfil:privacidadeDoPerfil},{headers:{Authorization:authorization}})).data;
}

export async function protectedPmodulo(id,authorization) {
    return (await api.get('/v1/protectedA/modulo/'+id,null,{headers:{Authorization:authorization}})).data;
}

export async function protectedPmoduloByUuid(uuid,authorization) {
    return (await api.get('v1/protectedA/modulo/curso/'+uuid,null,{headers:{Authorization:authorization}})).data;
}

export async function findModuloByUuidCursoAndIdAula(uuid,id,authorization) {
    return (await api.get('v1/protectedA/curso/'+uuid+'/aula/'+id+'/modulo',null,{headers:{Authorization:authorization}})).data;
}

export async function getCursoByUuidAndIdAula(uuid,id,authorization) {
    return (await api.get('v1/curso/uuid/'+uuid+'/aula/'+id,null,{headers:{Authorization:authorization}})).data;
}

export async function getAulaByUuidCursoAndIdAula(uuid,id,authorization) {
    return (await api.get('v1/protectedA/modulo/curso/'+uuid+'/aula/'+id,null,{headers:{Authorization:authorization}})).data;
}
