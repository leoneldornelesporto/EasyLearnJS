import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function findUserByNomeCompleto(nomeCompleto) {
    return (await api.get('/user/'+nomeCompleto,'')).data;
}