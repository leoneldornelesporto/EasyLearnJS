import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthUserContext} from '../../context/AuthUserProvider';
import {isLogged} from "../../context/AuthHandler";

const Login = () => {
    const {user,setUser,pass,setPass,checked,setChecked,signIn} = useContext(AuthUserContext);

    async function handleClick({ target }) {
        setChecked(target.checked);
    }

    async function login(e){
        e.preventDefault();
        await signIn(user,pass,checked);
        if (isLogged()===true){
            window.location.href = '/dashboard'; //manda para a rota home
        }else{
            alert("Usuário ou Senha incorretos.");
        }
    }

    function body(){
        if(isLogged()===true){
            window.location.href = '/dashboard'; //manda para a rota home
        }
        else{
            try {
                return (<div className="login-wrap">
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
                                        <input id="user" type="text" className="input" onChange={e => setUser(e.target.value)}/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Password</label>
                                        <input id="pass" type="password" className="input" data-type="password" onChange={e => setPass(e.target.value)}/>
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
                </div>)
            }
            catch (e){
                return (<div></div>)
            }
        }
    }

    return(
        body()
    );
}
export default Login;