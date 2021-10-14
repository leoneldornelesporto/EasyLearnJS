import React, {useContext, useState} from 'react';
import {AuthUserContext} from "../../context/AuthUserProvider";
import {Link} from "react-router-dom";

const EsqueciSenha = () => {

    const {resposta,enviarEmailRecuperarSenha} = useContext(AuthUserContext);
    const [emailRecuperacao, setEmailRecuperacao] = useState('');

    async function recuperarSenha(e){
        e.preventDefault();
        enviarEmailRecuperarSenha(emailRecuperacao);
        if (resposta!==null){
        alert("E-mail enviado para "+emailRecuperacao+", confira sua caixa de entrada e confirme o código.");
        window.location.href = "/signin";
        }
    }

    return(
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                <label htmlFor="tab-1" className="tab">Recuperar senha</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                <label htmlFor="tab-2" className="tab"></label>


                <div className="login-form">
                    <div className="sign-in-htm">
                        <form onSubmit={recuperarSenha}>
                            <div className="group">
                                <label htmlFor="user" className="label">E-mail</label>
                                <input id="user" type="email" onChange={e=>setEmailRecuperacao(e.target.value)} className="input"/>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Recuperar"/>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label className="recuperar_senha">
                                    Esqueceu sua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha.</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EsqueciSenha;