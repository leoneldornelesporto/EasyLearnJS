import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function allTopicos() {
    return (await api.get('/topicos')).data;
}

export async function topicoById(idTopico) {
    return (await api.get('/topicos/'+idTopico)).data;
}

export async function saveTopico(titulo,mensagem,idCurso,idUsuario) {
    return (await api.post('/topicos',{titulo:titulo,mensagem:mensagem,idCurso:idCurso,idUsuario:idUsuario})).data;
}

export async function alterarTopico(id,titulo,mensagem) {
    return (await api.put('/topicos/'+id,{titulo:titulo,mensagem:mensagem})).data;
}

export async function responderTopicoController(mensagem,idTopico,idUsuario) {
    return (await api.put('/topicos/responder/'+idTopico,{mensagem:mensagem,idUsuario:idUsuario})).data;
}

export async function removerTopico(id) {
    return (await api.delete('/topicos/'+id)).data;
}