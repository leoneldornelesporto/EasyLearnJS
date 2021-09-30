import Cookies from 'js-cookie';

export const isLogged = () => {
    let token = Cookies.get('Authorization');
    return token ? true : false;
}

export const doLogin = (token, rememberPassword = false) => {
    if(rememberPassword){
        Cookies.set('Authorization', token, {expires: 999});
    } else {
        Cookies.set('Authorization', token);
    }
}

export const getAuthorization = () => {
    return Cookies.get('Authorization');
}

export const doLogout = () => {
    Cookies.remove('Authorization');
}