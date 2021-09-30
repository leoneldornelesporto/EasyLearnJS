import {create} from 'apisauce';

const api = create({
    //baseURL: 'https://easylearn-app.herokuapp.com',
    baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function getCursoByIdCategoria(id) {
    return (await api.get('/v1/curso/categoria/'+id)).data;
}