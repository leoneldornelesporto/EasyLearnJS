import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function postTutor(nomeCompleto,cpf,email,senha) {
    return (await api.post('/v1/SalvarTutor',{nomeCompleto:nomeCompleto,cpf:cpf,email:email,senha:senha})).data;
}

export async function putTutor(id,authorization,avatar,nomeCompleto,nomeNoCertificado,cpf,usuarioNaUrl,email,senha,biografia,linkedin,github,twitter,empresa,cargo,privacidadeDoPerfil) {
    return (await api.put('/v1/protectedT/tutor/'+id,{avatar:avatar,nomeCompleto:nomeCompleto,nomeNoCertificado:nomeNoCertificado,cpf:cpf,usuarioNaUrl:usuarioNaUrl,email:email,senha:senha,biografia:biografia,linkedin:linkedin,github:github,twitter:twitter,empresa:empresa,cargo:cargo,privacidadeDoPerfil:privacidadeDoPerfil},{headers:{Authorization:authorization}})).data;
}