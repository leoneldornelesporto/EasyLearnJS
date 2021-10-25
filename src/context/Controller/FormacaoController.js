import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function findAllFormacoesByIdCategoria(authorization,idCategoria) {
    return (await api.get('/v1/formacao/categoria/'+idCategoria)).data;
}

export async function findAllFormacoes() {
    return (await api.get('v1/formacao')).data;
}
export async function findFormacoesById(authorization,idFormacao) {
    return (await api.get('/v1/formacao/'+idFormacao)).data;
}

export async function salvarFormacao(titulo,descricao,idCategoria,authorization) {
    return (await api.post('/v1/formacao/protectedP',{titulo:titulo,descricao:descricao,idCategoria:idCategoria},{headers:{Authorization:authorization}})).data;
}

export async function alterarFormacao(idFormacao,titulo,descricao,idCategoria,authorization) {
    return (await api.put('/v1/formacao/protectedP/'+idFormacao,{titulo:titulo,descricao:descricao,idCategoria:idCategoria},{headers:{Authorization:authorization}})).data;
}

export async function removerFormacao(idFormacao,authorization) {
    return (await api.delete('/v1/formacao/protectedP/'+idFormacao,'',{headers:{Authorization:authorization}})).data;
}
