import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AlunoContext} from "../../context/AlunoProvider";

const Cadastro = () => {

    const {username,setUsername,password,setPassword,passwordRepeat,setPasswordRepeat,email,setEmail,salvarAluno} = useContext(AlunoContext);

    async function cadastro(e){
        e.preventDefault();

        if (password === passwordRepeat){
            alert("Cadastro realizado com sucesso, confirme seu e-mail para acessar a plataforma");
            salvarAluno(email,password,username);
            window.location.href = "/signin";
        }else{
            alert("Senha Incorreta");
        }
    }

    return(
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                <label htmlFor="tab-1" className="tab">Sign Up</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
                <div className="login-form">
                    <form onSubmit={cadastro}>
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input  type="text" className="input" onChange={e=>setUsername(e.target.value)}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Password</label>
                                <input id="pass" type="password" class="input" data-type="password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Repeat Password</label>
                                <input id="pass" type="password" class="input" data-type="password" onChange={e=>setPasswordRepeat(e.target.value)}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Email Address</label>
                                <input id="pass" type="text" class="input" onChange={e=>setEmail(e.target.value)}/>
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Sign Up"/>
                            </div>
                            <div class="hr"></div>
                            <div class="foot-lnk">
                                <Link for="tab-1" to="/signin">Already Member?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
}
export default Cadastro;