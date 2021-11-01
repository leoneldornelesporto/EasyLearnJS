import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function findModuloById(idModulo,authorization) {
    return (await api.get('v1/protectedA/modulo/'+idModulo,'authorization',{headers:{Authorization:authorization}})).data;
}

export async function findModuloByIdCurso(idCurso,authorization) {
    return (await api.get('v1/protectedA/modulo/idCurso/'+idCurso,'authorization',{headers:{Authorization:authorization}})).data;
}

export async function findAllModulos(authorization) {
    return (await api.get('v1/modulo','',{headers:{Authorization:authorization}})).data;
}

export async function saveModulo(indice,titulo,tituloSecundario,idCurso,authorization) {
    return (await api.post('v1/protectedP/modulo',{indice:indice,titulo:titulo,tituloSecundario:tituloSecundario,idCurso:idCurso},{headers:{Authorization:authorization}})).data;
}

export async function updateModulo(idModulo,indice,titulo,tituloSecundario,idCurso,authorization) {
    return (await api.put('v1/protectedP/modulo/'+idModulo,{indice:indice,titulo:titulo,tituloSecundario:tituloSecundario,idCurso:idCurso},{headers:{Authorization:authorization}})).data;
}

export async function deleteModulo(idModulo,authorization) {
    return (await api.delete('/v1/protectedP/modulo/'+idModulo,'',{headers:{Authorization:authorization}})).data;
}