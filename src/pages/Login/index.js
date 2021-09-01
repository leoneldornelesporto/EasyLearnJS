import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {authHeader} from "../../helpers/auth-header";

const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState('');

    async function handleClick({ target }) {
        setChecked(target.checked);
    }

    async function login(e){
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(checked);

        if (username === 'leonel' && password === '12345'){
            alert("entrou");
            localStorage.setItem("user",username+':'+password);
            alert(authHeader().Authorization);
        }else{
            alert("senha errada");
        }
    }

    return(
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                <label htmlFor="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                <label htmlFor="tab-2" className="tab"/>
                <div className="login-form">
                    <form onSubmit={login}>
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" onChange={e=>setUsername(e.target.value)}/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" onClick={handleClick}/>
                                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In"/>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <Link to="/esquecisenha">
                                    Esqueci minha senha</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
}
export default Cadastro;