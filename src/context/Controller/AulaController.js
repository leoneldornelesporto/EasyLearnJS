import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function getAulaByUuidCursoAndIdAula(id,authorization) {
    return (await api.get('v1/protectedA/aulas/'+id,null,{headers:{Authorization:authorization}})).data;
}

export async function getAulaByIdAulaAndUuidCurso(idAula,uuidCurso,authorization) {
    return (await api.get('v1/protectedA/aulas/'+idAula+'/'+uuidCurso,null,{headers:{Authorization:authorization}})).data;
}

export async function getAulaByUuidCursoAndIdAulaModulo(id,authorization) {
    return (await api.get('v1/aulasS/modulo/'+id,null,{headers:{Authorization:authorization}})).data;
}

export async function returnAllAulas(authorization) {
    return (await api.get('v1/protectedP/aulas',null,{headers:{Authorization:authorization}})).data;
}

export async function salvarAula(indice,titulo,urlVideo,transcricao,idCurso,idModulo,authorization) {
    return (await api.post('v1/protectedP/aulas',{indice:indice,titulo:titulo,urlVideo:urlVideo,transcricao:transcricao,idCurso:idCurso,idModulo:idModulo},{headers:{Authorization:authorization}})).data;
}

export async function editarAula(id,indice,titulo,urlVideo,transcricao,idCurso,idModulo,authorization) {
    return (await api.put('v1/protectedP/aulas/'+id,{indice:indice,titulo:titulo,urlVideo:urlVideo,transcricao:transcricao,idCurso:idCurso,idModulo:idModulo},{headers:{Authorization:authorization}})).data;
}

export async function deletarAula(id,authorization) {
    return (await api.delete('v1/protectedP/aulas/'+id,null,{headers:{Authorization:authorization}})).data;
}

export async function assistirAula(idAluno,idAlua,authorization) {
    return (await api.get('v1/protectedA/matricula/assistirAula/'+idAluno+'/'+idAlua,null,{headers:{Authorization:authorization}})).data;
}

export async function registrarAssistiAula(idAluno,idAlua,authorization) {
    return (await api.post('v1/protectedA/matricula/assistirAulaSave/'+idAluno+'/'+idAlua,null,{headers:{Authorization:authorization}})).data;
}