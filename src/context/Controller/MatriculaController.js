import {create} from 'apisauce';

const api = create({
    //baseURL: 'https://easylearn-app.herokuapp.com',
    baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function findAllMatriculas(authorization) {
    return (await api.get('v1/protectedA/matricula','authorization',{headers:{Authorization:authorization}})).data;
}

export async function saveMatricula(authorization,idAluno,idCurso,progresso,estado) {
    return (await api.post('v1/protectedA/matricula',{idAluno:idAluno,idCurso:idCurso,progresso:progresso,estado:estado},{headers:{Authorization:authorization}})).data;
}

export async function verificarSeEstouMatriculadoEmAlgumCursoPorId(idAluno,idCurso,authorization) {
    return (await api.get('v1/protectedA/matricula/verificaById/'+idAluno+'/'+idCurso,'authorization',{headers:{Authorization:authorization}})).data;
}

export async function verificarSeEstouMatriculadoEmAlgumCursoPorUuid(idAluno,uuid,authorization) {
    return (await api.get('v1/protectedA/matricula/verificaByUuid/'+idAluno+'/'+uuid,'authorization',{headers:{Authorization:authorization}})).data;
}

export async function verificarSeEstouMatriculadoEmAlgumCursoPorIdConcluidos(idAluno,authorization) {
    return (await api.get('v1/protectedA/matricula/verificaById/cursosConcluidos/'+idAluno,'',{headers:{Authorization:authorization}})).data;
}

export async function verificarSePauseiAlgumCursoNaMinhaMatricula(idAluno,authorization) {
    return (await api.get('v1/protectedA/matricula/verificaById/cursosPausados/'+idAluno,'',{headers:{Authorization:authorization}})).data;
}