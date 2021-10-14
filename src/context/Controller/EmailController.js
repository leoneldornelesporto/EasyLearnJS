import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    //baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function ativarConta(id) {
    return (await api.get('/ativarAluno/id/'+id)).data;
}