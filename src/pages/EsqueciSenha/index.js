import React, {useState} from 'react';

const EsqueciSenha = () => {
    const [emailRecuperacao, setEmailRecuperacao] = useState('');
    const [disabled, setDisabled] = useState('');

    async function recuperarSenha(e){
        e.preventDefault();
        alert(emailRecuperacao)
        setDisabled(true);
    }

    function body(){
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
                                    <label href="#forgot">Esqueceu sua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha.</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            {disabled ?
                <div>
                <div className="alert " data-category="confirmation" role="alert">
                    <svg className="alert-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" enable-background="new 0 0 30 30">
                        <path d="M13.5 0C6.056 0 0 6.056 0 13.5S6.056 27 13.5 27 27 20.944 27 13.5 20.944 0 13.5 0zm7.962 11.35l-8.406 8.407c-.283.283-.66.44-1.06.44-.402 0-.778-.157-1.062-.44L5.538 14.36c-.283-.282-.44-.66-.44-1.06s.157-.777.44-1.06c.566-.567 1.555-.567 2.12 0l4.336 4.334 7.345-7.346c.564-.566 1.553-.566 2.12 0 .586.585.586 1.537 0 2.122z" fill="#fff"/>
                    </svg>
                    <p className="alert-message">Um email com informações de como recuperar sua senha foi enviado.</p>
                </div>

                    <div className="login-wrap">
                        <div className="login-html">
                            <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1"
                                                                                                          className="tab">Sign
                            In</label>
                            <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
                            <div className="login-form">
                                <div className="sign-in-htm">
                                    <div className="group">
                                        <label htmlFor="user" className="label">Username</label>
                                        <input id="user" type="text" className="input"/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Password</label>
                                        <input id="pass" type="password" className="input" data-type="password"/>
                                    </div>
                                    <div className="group">
                                        <input id="check" type="checkbox" className="check" checked/>
                                        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                                    </div>
                                    <div className="group">
                                        <input type="submit" className="button" value="Sign In"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="sign-up-htm">
                                    <div className="group">
                                        <label htmlFor="user" className="label">Username</label>
                                        <input id="user" type="text" className="input"/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Password</label>
                                        <input id="pass" type="password" className="input" data-type="password"/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Repeat Password</label>
                                        <input id="pass" type="password" className="input" data-type="password"/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Email Address</label>
                                        <input id="pass" type="text" className="input"/>
                                    </div>
                                    <div className="group">
                                        <input type="submit" className="button" value="Sign Up"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="foot-lnk">
                                        <label htmlFor="tab-1">Already Member?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                disabled === false ?
                    <div>
                <div className="alert " data-category="error" role="alert">
                    <svg className="alert-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" enable-background="new 0 0 30 30">
                        <path d="M13.5 0C6.056 0 0 6.056 0 13.5S6.056 27 13.5 27c2.367 0 4.59-.617 6.527-1.69 2.238-1.203 4.08-3.045 5.282-5.283C26.38 18.09 27 15.867 27 13.5 27 6.056 20.944 0 13.5 0zm6.457 17.828c.585.585.585 1.536 0 2.12-.283.284-.66.44-1.06.44-.402 0-.778-.156-1.062-.44L13.5 15.615 9.165 19.95c-.566.565-1.555.565-2.12 0-.586-.586-.586-1.537 0-2.122l4.334-4.335-4.337-4.335c-.585-.585-.585-1.536 0-2.12.566-.567 1.555-.567 2.12 0L13.5 11.37l4.335-4.335c.566-.566 1.555-.566 2.12 0 .586.585.586 1.536 0 2.12L15.62 13.49l4.338 4.336z" fill="#fff"/>
                    </svg>
                    <p className="alert-message">Não foi possível recuperar sua senha!</p>
                </div>
                        {body()}
                    </div>
                    :
                    body()
            }
        </div>
    );
}
export default EsqueciSenha;