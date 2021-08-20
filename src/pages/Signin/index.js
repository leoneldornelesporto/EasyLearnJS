import React from 'react';
import {Link} from "react-router-dom";

const Signin = () => {
    return(
        <div className="container">
            <section className="sign">
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
                </section>

                <section className="forgotPassword">
                    <h2 className="title">Recuperar senha</h2>
                    <p className="subtitle">Esqueceu sua senha? Digite seu e-mail que enviaremos um link para definir
                        uma nova senha.</p>

                    <form className="forgotPassword-form" action="/auth/sendPasswordRecoveryEmail" method="post">
                        <input type="email" required placeholder="E-mail" id="email" name="email"
                               className="input forgot-password-email" value=""/>

                        <button className="forgotPassword-btn" type="submit">
                            Recuperar
                        </button>
                    </form>
                </section>
            </section>
        </div>
                    );
}
export default Signin;