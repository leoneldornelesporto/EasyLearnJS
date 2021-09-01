import { create } from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

export async function getAllCursos() {
    return (await api.get('/v1/curso')).data;
}