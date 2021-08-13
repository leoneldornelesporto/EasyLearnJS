import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = 'https://easylearn-app.herokuapp.com'

const apiFetchPost = async (endPoint, body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+endPoint, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(body),
    });
    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

// eslint-disable-next-line no-unused-vars
const apiFetchGet = async (endPoint, body = []) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+endPoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchFile = async (endPoint, body = []) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.append('token', token);
        }
    }

    const res = await fetch(BASEAPI+endPoint, {
        method: 'POST',
        body,
    });
    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const EasyLearnApi = {
    getCursos: async () => {
        const json = await apiFetchGet(
            '/v1/curso'
        );
        return json;
    }
}
export default () => EasyLearnApi;