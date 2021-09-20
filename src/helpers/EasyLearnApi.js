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

export async function signUp(usuario,senha) {
    return (await api.get('/login/signin','authorization',{headers:{usuario:usuario, senha:senha}})).data;
}

export async function v1SignUp(usuario,senha) {
    return (await api.get('/login/v1/signin','authorization',{headers:{usuario:usuario, senha:senha}})).data;
}


export async function postAluno(username,password,email) {
    return (await api.post('/v1/SalvarAluno',{nomeCompleto:username,senha:password,email:email})).data;
}