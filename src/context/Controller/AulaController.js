import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    //baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function getAulaByUuidCursoAndIdAula(uuid,id,authorization) {
    return (await api.get('v1/protectedX/modulo/curso/'+uuid+'/aula/'+id,null,{headers:{Authorization:authorization}})).data;
}

export async function returnAllAulas(authorization) {
    return (await api.get('v1/protectedP/aulas',null,{headers:{Authorization:authorization}})).data;
}

export async function salvarAula(indice,titulo,urlVideo,transcricao,authorization) {
    return (await api.post('v1/protectedP/aulas',{indice:indice,titulo:titulo,urlVideo:urlVideo,transcricao:transcricao},{headers:{Authorization:authorization}})).data;
}

export async function editarAula(id,indice,titulo,urlVideo,transcricao,authorization) {
    return (await api.put('v1/protectedP/aulas/'+id,{indice:indice,titulo:titulo,urlVideo:urlVideo,transcricao:transcricao},{headers:{Authorization:authorization}})).data;
}

export async function deletarAula(id,authorization) {
    return (await api.delete('v1/protectedP/aulas/'+id,null,{headers:{Authorization:authorization}})).data;
}
