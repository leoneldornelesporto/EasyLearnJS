import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Signin = () => {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function enviarEmailRecuperacaoDeSenha(e){
        e.preventDefault();
        console.log(email);
        setDisabled(true);
    }

    function formCadastro(){
        return (
            <section className="signin">
            <h1 className="title">Já estuda com a gente?</h1>
            <p className="subtitle">Faça seu login e boa aula!</p>

            <form className="signin-form" action="/signin" method="post">


                <input type="hidden" name="urlAfterLogin" value='https://cursos.alura.com.br/dashboard'/>


                <label htmlFor="login-email">E-mail</label>
                <input className="fill-with-cached-email" type="email" required name="username"
                       id="login-email" autoFocus/>

                <div id="form-default">
                    <label htmlFor="password">Senha</label>
                    <input type="password" required name="password" id="password" autoComplete="off"/>

                    <input type="hidden" name="uriOnError" value=""/>

                    <button className="btn-login" type="submit">
                        Entrar
                    </button>

                    <Link className="btn-cadastrar"
                          to="/cadastro">
                        Matricule-se
                    </Link>

                    <a className="forgotPassword-link">
                        Esqueci minha senha
                    </a>
                </div>

                <div id="form-sso">
                    <span id="sso-company-name"></span>
                    <span className="login-sso-info">Está usando uma conta corporativa?</span>
                    <span
                        className="login-sso-info">Acesse o login corporativo e por lá acesse a Alura</span>
                    <a id="sso-company-url" className="btn-sso-provider" href="">
                        Abrir login corporativo
                    </a>
                    <span className="continue-with-password" id="back-to-default-form">Continuar com e-mail e senha</span>
                </div>
            </form>
        </section>);
    }

    return(
        <div className="container">
            {
                disabled == true?
                    <div className="alert " data-category="confirmation" role="alert">
                        <img alt="" className="alert-icon" src="/assets/images/gnarus/alert/confirmation.svg"/>
                        <p className="alert-message">Um email com informações de como recuperar sua senha foi enviado.</p>
                    </div>
                :
                    <div></div>
            }
            <section className="sign">
                {formCadastro()}

                { disabled==false?
                    <section className="forgotPassword">
                        <h2 className="title">Recuperar senha</h2>
                        <p className="subtitle">Esqueceu sua senha? Digite seu e-mail que enviaremos um link para
                            definir
                            uma nova senha.</p>

                        <form className="forgotPassword-form" onSubmit={enviarEmailRecuperacaoDeSenha}>
                            <input type="email" required placeholder="E-mail" id="email" name="email"
                                   onChange={e => setEmail(e.target.value)}
                                   className="input forgot-password-email"/>

                            <button className="forgotPassword-btn" type="submit">
                                Recuperar
                            </button>
                        </form>
                    </section>
                    :
                    formCadastro()
                        }
            </section>
        </div>
                    );
}
export default Signin;