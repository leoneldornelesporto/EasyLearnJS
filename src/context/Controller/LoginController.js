import {create} from 'apisauce';

const api = create({
    //baseURL: 'https://easylearn-app.herokuapp.com',
    baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function login(usuario,senha) {
    return (await api.get('/login/signin','',{headers:{usuario:usuario, senha:senha}})).data;
}

export async function loginV1(usuario,senha) {
    return (await api.get('/login/v1/signin','',{headers:{usuario:usuario, senha:senha}})).data;
}

export async function v1EsqueciSenha(id,email,senha) {
    return (await api.put('/v1/resetPassword/'+id+'/'+email,senha)).data;
}

export async function enviaEmailEsqueciSenha(email) {
    return (await api.post('/v1/resetPassword/'+email)).data;
}
