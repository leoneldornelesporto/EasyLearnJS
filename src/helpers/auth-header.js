export function authHeader() {
    let user = btoa(localStorage.getItem("user"));
    return { 'Authorization': 'Basic ' + user };
}