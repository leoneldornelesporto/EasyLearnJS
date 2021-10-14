import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {AuthUserContext} from "../../context/AuthUserProvider";

const RedefinirSenha = () => {

    const { id,email } = useParams();
    const {resposta,pass,setPass,passConfirm,setPassConfirm,esqueciASenhaV1} = useContext(AuthUserContext);

    console.log(pass===passConfirm)

    function esqueciSenha (e) {
        e.preventDefault();
        try {
            esqueciASenhaV1(id,email,pass);
            if (pass === passConfirm && resposta !== null){
                esqueciASenhaV1(id,email,pass);
                alert("Senha Alterada com Sucesso =)");
                window.location.href = '/signin';
            }
            console.log(resposta)
        } catch (response) {
            console.log('Erro ao realizar signUp.');
            console.log(response);
        }
    }


    return(
            <div className="contentBox   container bootcamp-background-dark-section">
                <div className="contentBox-title">
                    <h1 className="bootcamp-text-color">Redefinir senha </h1>
                </div>
                <section className="forgotPassword bootcamp-background-dark-section">
                    <form id="passwordForgottenForm" className="forgotPassword-form bootcamp-input-format"
                          onSubmit={esqueciSenha}>
                            <label htmlFor="newPassword">Senha
                                <input id="newPassword" name="newPassword" className="bootcamp-input-background-dark"
                                       pattern=".{6,}" type="password" required="required" onChange={e => setPass(e.target.value)}/>
                            </label>
                            <label htmlFor="passwordConfirmation">Confirmação de senha
                                <input id="passwordConfirmation" name="passwordConfirmation"
                                       className="bootcamp-input-background-dark" pattern=".{6,}" type="password"
                                       required="required" onChange={e => setPassConfirm(e.target.value)}/>
                            </label>
                            <button className="button buttonLight bootcamp-primary-button-theme" type="submit">
                                Redefinir minha senha
                            </button>
                    </form>
                </section>
            </div>
    );
}
export default RedefinirSenha;