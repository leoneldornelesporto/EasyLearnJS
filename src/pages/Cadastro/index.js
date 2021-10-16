import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AlunoContext} from "../../context/AlunoProvider";

const Cadastro = () => {

    const {username,setUsername,cpf,setCpf,password,setPassword,passwordRepeat,setPasswordRepeat,email,setEmail,result,salvarAluno} = useContext(AlunoContext);

    async function cadastro(e){
        e.preventDefault();

        if (password === passwordRepeat){
            salvarAluno(email,password,username,cpf);

            if(result.status===400){
                alert("Usuário já Cadastrado =(");
            }else{
                if(result.id !== undefined) {
                    alert("Cadastro realizado com sucesso =)");
                    window.location.href = "/signin";
                }else{
                    alert("Erro Interno, favor entrar em contato com a EasyLearn");
                }
            }
        }else{
            alert("Senha Incorreta");
        }
    }

    return(
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                <label htmlFor="tab-1" className="tab">Cadastre-se</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
                <div className="login-form">
                    <form onSubmit={cadastro}>
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Nome</label>
                                <input  type="text" className="input" onChange={e=>setUsername(e.target.value)}/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Cpf</label>
                                <input  type="number" placeholder="000111222333" className="input" onChange={e=>setCpf(e.target.value)}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Senha</label>
                                <input id="pass" type="password" class="input" data-type="password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Senha Novamente</label>
                                <input id="pass" type="password" class="input" data-type="password" onChange={e=>setPasswordRepeat(e.target.value)}/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Email</label>
                                <input id="pass" type="text" class="input" onChange={e=>setEmail(e.target.value)}/>
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Cadastrar"/>
                            </div>
                            <div class="hr"></div>
                            <div class="foot-lnk">
                                <Link for="tab-1" to="/signin">Já é membro?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
}
export default Cadastro;