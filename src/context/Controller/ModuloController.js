import {create} from 'apisauce';

const api = create({
    //baseURL: 'https://easylearn-app.herokuapp.com',
    baseURL: 'http://localhost:8080',
    headers: { Accept: 'application/json' },
})

export async function findModuloById(idModulo,authorization) {
    return (await api.get('v1/protectedA/modulo/'+idModulo,'authorization',{headers:{Authorization:authorization}})).data;
}
