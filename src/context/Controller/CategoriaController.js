import {create} from 'apisauce';

const api = create({
    //baseURL: 'https://easylearn-app.herokuapp.com',
    baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function getCursoByIdCategoria(id) {
    return (await api.get('/v1/curso/categoria/'+id)).data;
}

export async function getAllCategoria() {
    return (await api.get('/v1/categoria')).data;
}

export async function salvarCategoria(nome,authorization) {
    return (await api.post('v1/protectedP/categoria',{nome:nome},{headers:{Authorization:authorization}})).data;
}

export async function alterarCategoria(id,nome,authorization) {
    return (await api.put('v1/protectedP/categoria/'+id,{nome:nome},{headers:{Authorization:authorization}})).data;
}

export async function deleteCategoria(id,authorization) {
    return (await api.delete('v1/protectedP/categoria/'+id,null,{headers:{Authorization:authorization}})).data;
}