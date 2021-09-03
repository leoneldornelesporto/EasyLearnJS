import { create } from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function getAllCursos() {
    return (await api.get('/v1/curso')).data;
}

export async function signUp(usuario,senha) {
    console.log("Usuario: "+usuario);
    console.log("Senha: "+senha);

    return (await api.get('/login/signin','authorization',{headers:{usuario:usuario, senha:senha}})).data;
}