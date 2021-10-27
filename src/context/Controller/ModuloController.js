import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    //baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function findModuloById(idModulo,authorization) {
    return (await api.get('v1/protectedA/modulo/'+idModulo,'authorization',{headers:{Authorization:authorization}})).data;
}

export async function findAllModulos(authorization) {
    return (await api.get('v1/protectedP/modulo','',{headers:{Authorization:authorization}})).data;
}

export async function saveModulo(indice,titulo,idCurso,idAula,subtitulo,authorization) {
    return (await api.post('v1/protectedP/modulo',{indice:indice,titulo:titulo,idCurso:idCurso,idAula:idAula,subtitulo:subtitulo},{headers:{Authorization:authorization}})).data;
}
