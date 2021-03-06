import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function postAluno(email, pass, username, cpf) {
    return (await api.post('/v1/salvar/aluno',{nomeCompleto:username,nomeNosCertificados:username, senha:pass,email:email, cpf:cpf})).data;
}

export async function putAluno(id,authorization,avatar,nomeCompleto,nomeNosCertificados,usuarioNaUrl,cpf,biografia,dataDeNascimento,ocupacao,linkedin,twitter,github,linkPersonalizado,empresa,cargo,instituicao,curso,privacidadeDoPerfil) {
    return (await api.put('/v1/protectedA/aluno/'+id,{avatar:avatar,nomeCompleto:nomeCompleto,nomeNosCertificados:nomeNosCertificados,usuarioNaUrl:usuarioNaUrl,cpf:cpf,biografia:biografia,dataDeNascimento:dataDeNascimento,ocupacao:ocupacao,linkedin:linkedin,twitter:twitter,github:github,linkPersonalizado:linkPersonalizado,empresa:empresa,cargo:cargo,instituicao:instituicao,curso:curso,privacidadeDoPerfil:privacidadeDoPerfil},{headers:{Authorization:authorization}})).data;
}