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

export async function getCursoByUuidAndIdAula(uuid,id,authorization) {
    return (await api.get('v1/curso/uuid/'+uuid+'/aula/'+id,null,{headers:{Authorization:authorization}})).data;
}

export async function findModuloByUuidCursoAndIdAula(uuid,id,authorization) {
    return (await api.get('v1/protectedA/curso/' + uuid + '/aula/' + id + '/modulo', null, {headers: {Authorization: authorization}})).data;
}

export async function getAulaByUuidCursoAndIdAula(uuid,id,authorization) {
    return (await api.get('v1/protectedA/modulo/curso/'+uuid+'/aula/'+id,null,{headers:{Authorization:authorization}})).data;
}

export async function protectedPmodulo(id,authorization) {
    return (await api.get('/v1/protectedA/modulo/'+id,null,{headers:{Authorization:authorization}})).data;
}