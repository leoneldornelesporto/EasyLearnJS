import {create} from 'apisauce';

const api = create({
    //baseURL: 'https://easylearn-app.herokuapp.com',
    baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function findAllFormacoesByIdCategoria(authorization,idCategoria) {
    return (await api.get('/v1/protectedA/formacao/categoria/'+idCategoria,'',{headers:{Authorization:authorization}})).data;
}

export async function findFormacoesById(authorization,idFormacao) {
    return (await api.get('/v1/protectedA/formacao/'+idFormacao,'',{headers:{Authorization:authorization}})).data;
}