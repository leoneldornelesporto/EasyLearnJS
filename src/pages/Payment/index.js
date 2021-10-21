import React, {useContext, useState} from 'react';
import {useParams} from "react-router-dom";
import {CursoContext} from "../../context/CursoProvider";
import {PaymentContext} from "../../context/PaymentProvider";
import Cookies from "js-cookie";

const Payment = () => {

    const {cursos,retornarCursosPorUuid} = useContext(CursoContext);
    const {resposta,pagamentos,salvarPagamento,respostaPagSeguro,retornaPagamentoPeloUuidCursoEIdAluno,salvarPagamentoPagSeguro} = useContext(PaymentContext);
    const [nome,setNome] = useState(null);
    const [sobrenome,setSobrenome] = useState(null);
    const [cpf,setCpf] = useState(null);
    const [telefone,setTelefone] = useState(null);
    const [numeroCartao,setNumeroCartao] = useState(null);
    const [codigoSeguranca,setCodigoSeguranca] = useState(null);
    const [vencimento,setVencimento] = useState(null);
    const [ano,setAno] = useState(null);

    const { uuidCurso } = useParams();

    function enviarDadosPaymento(e){
        e.preventDefault();
        try{
            //salvarPagamentoPagSeguro(cursos.nome,cursos.valorCurso,numeroCartao,vencimento,ano,codigoSeguranca,nome+' '+sobrenome);
            salvarPagamento("CHAR_03FC4C8B-C127-43E6-89A6-D812D0401566","PAID",uuidCurso,Cookies.get('idUser'));
            if (resposta.status !== 500){
                alert("Compra feita com sucesso");
                window.location.href = '/curso_detalhe='+uuidCurso; //manda para a rota home
            }
            console.log(resposta);
        }catch (e) {
            console.log(e);
        }

    }

    retornarCursosPorUuid(uuidCurso)

    return(
        <main className="payment">
            <div className="container">
                <section className="paymentAlerts">
                </section>
                <article className="payment-info" data-facebookpixel="1067810189950610" data-paypal-mode="production"
                         data-env-supports-gtm="true" data-iframeleademailuri="https://alura-cursos.com"
                         data-product="Plus" data-productid="111" data-productcode="plus"
                         data-paymentid="PAYID-MFYF7BQ6AK05232JS7857648" data-discountcode=""
                         data-haspaypalerror="false" data-currency="BRL" data-fixed-instalment="false"
                         data-locale="pt_BR" data-usernameindicate="" data-shouldshowsocialminer="true"
                         data-socialminerid="49a525fa-18fe-4032-ab66-f63315c9b1a6" data-totalprice="1020.00"
                         data-iscandidomendes="false" data-candidomendesproductcode="plus" data-isfrominvoice="false">
                    <section className="payment-info-form">
                        <div className="payment-info-form-cover"></div>
                        <ul className="info-form-progress">
                            <li className="form-progress-step progress-step-one progress-step">Suas
                                Informações
                            </li>
                            <li className="form-progress-step progress-step-two">Informações de pagamento</li>
                            <li className="form-progress-step progress-step-three">Acesse o curso de blablabla</li>
                        </ul>
                        <div className="info-form-steps">

                            <section className="info-form-step info-form-personalInfo" aria-hidden="false">
                                <form onSubmit={enviarDadosPaymento}>
                                <input id="approval_url" type="hidden"
                                       value="https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&amp;token=EC-0B860640C3023534B"/>
                                    <input id="payerTaxIdType" type="hidden" value="BR_CPF"/>
                                        <input id="country" type="hidden" value="BR"/>
                                            <input id="language" type="hidden" value="pt_BR"/>
                                                <div className="--medium-min-height">
                                                    <div className="--small-min-height">
                                                        <label className="form-step-label logged-user-email-label"
                                                               htmlFor="userEmail">Email da conta</label>
                                                        <div className="step-input-group --large-min-height">
                                                            <label className="form-step-label" htmlFor="cpf">Nome</label>
                                                            <input onChange={e => setNome(e.target.value)}
                                                                   className="form-step-input bootcamp-input-background-dark"
                                                                   required="true"/>
                                                            <span
                                                                className="form-step-error step-error-cpf step-error-message">Insira um CPF válido.</span>
                                                        </div>
                                                        <div className="step-input-group">
                                                            <label className="form-step-label" htmlFor="phone">Sobrenome</label>
                                                            <input onChange={e => setSobrenome(e.target.value)}
                                                                   className="form-step-input bootcamp-input-background-dark"
                                                                   required="true"/>
                                                        </div>
                                                            <span className="form-step-error step-error-email">O e-mail está inválido.</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="step-input-group --large-min-height">
                                                        <label className="form-step-label" htmlFor="cpf">CPF</label>
                                                        <input onChange={e => setCpf(e.target.value)}
                                                               className="form-step-input bootcamp-input-background-dark"
                                                               min="11" required=""/>
                                                            <span
                                                                className="form-step-error step-error-cpf step-error-message">Insira um CPF válido.</span>
                                                    </div>
                                                    <div className="step-input-group">
                                                        <label className="form-step-label" htmlFor="phone">Telefone com
                                                            DDD</label>
                                                        <input onChange={e => setTelefone(e.target.value)}type="tel"
                                                               className="form-step-input bootcamp-input-background-dark"
                                                               min="10" required=""/>
                                                    </div>
                                                    <div className="--medium-min-height">
                                                        <div className="--small-min-height">
                                                            <div className="step-input-group --large-min-height">
                                                                <label className="form-step-label logged-user-email-label"
                                                                       htmlFor="userEmail">Número Cartão</label>
                                                                <input onChange={e => setNumeroCartao(e.target.value)} type="number"
                                                                       className="form-step-input bootcamp-input-background-dark"
                                                                       required=""/>
                                                                <span
                                                                    className="form-step-error step-error-cpf step-error-message">Insira um CPF válido.</span>
                                                            </div>
                                                            <div className="step-input-group">
                                                                <label className="form-step-label" htmlFor="phone">Código de Segurança</label>
                                                                <input onChange={e => setCodigoSeguranca(e.target.value)} type="number"
                                                                       className="form-step-input bootcamp-input-background-dark"
                                                                       min="0" max="999" required=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="--medium-min-height">
                                                        <div className="--small-min-height">
                                                            <div className="step-input-group --large-min-height">
                                                                <label className="form-step-label logged-user-email-label"
                                                                       htmlFor="userEmail">Vencimento</label>
                                                                <input onChange={e => setVencimento(e.target.value)} type="number"
                                                                       className="form-step-input bootcamp-input-background-dark"
                                                                       min="1" max="12" required=""/>
                                                                <span
                                                                    className="form-step-error step-error-cpf step-error-message">Insira um CPF válido.</span>
                                                            </div>
                                                            <div className="step-input-group">
                                                                <label className="form-step-label" htmlFor="phone">Ano</label>
                                                                <input onChange={e => setAno(e.target.value)} type="number"
                                                                       className="form-step-input bootcamp-input-background-dark"
                                                                       min="2021" required=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button id="form-step-goToPayment"
                                                        className="form-step-button form-step-submit bootcamp-primary-button-theme">Concluir Pagamento
                                                </button>
                                </form>
                            </section>

                        </div>
                    </section>
                </article>
            </div>
        </main>
    );
}
export default Payment;