import React, {useContext} from 'react';
import {FormacaoContext} from "../../context/FormacaoProvider";
import {isLogged} from "../../context/AuthHandler";

const Formacao = () => {

    const {programacao,frontend,datascience,devops,uxdesign,mobile,inovacaoGestao,retornarTodasFormacoesProgramacao,retornarTodasFormacoesFrontend,retornarTodasFormacoesDataScience,retornarTodasFormacoesDevops,retornarTodasFormacoesUxDesign, retornarTodasFormacoesMobile, retornarTodasFormacoesInovacaoGestao} = useContext(FormacaoContext);

    if(programacao===null){
        retornarTodasFormacoesProgramacao();
    }

    function formacaoProgramacao(){
        try {
            try {
                return(
                    programacao.map((value, index)=>{
                        return (
                            <div className="formacao__informations">
                                <a href={"/formacoes_detalhe="+value.id} className="formacao__link">
                                    <h4 className="formacao__title">{value.titulo}</h4>
                                </a>
                            </div>
                        );
                    }))
            }
            catch (e) {
                console.log(e);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    if(frontend===null){
        retornarTodasFormacoesFrontend();
    }

    function formacaoFrontend(){
        try {
            return(
                frontend.map((value, index)=>{
                    return (
                        <div className="formacao__informations">
                            <a href={"/formacoes_detalhe="+value.id} className="formacao__link">
                                <h4 className="formacao__title">{value.titulo}</h4>
                            </a>
                        </div>
                    );
                }))
        }
        catch (e) {
            console.log(e);
        }
    }

    if(datascience===null){
        retornarTodasFormacoesDataScience();
    }

    function formacaoDatascience(){
        try {
            return(
                datascience.map((value, index)=>{
                    return (
                        <div className="formacao__informations">
                            <a href={"/formacoes_detalhe="+value.id} className="formacao__link">
                                <h4 className="formacao__title">{value.titulo}</h4>
                            </a>
                        </div>
                    );
                }))
        }
        catch (e) {
            console.log(e);
        }
    }

    if(devops===null){
        retornarTodasFormacoesDevops();
    }

    function formacaoDevops(){
        try {
            return(
                devops.map((value, index)=>{
                    return (
                        <div className="formacao__informations">
                            <a href={"/formacoes_detalhe="+value.id} className="formacao__link">
                                <h4 className="formacao__title">{value.titulo}</h4>
                            </a>
                        </div>
                    );
                }))
        }
        catch (e) {
            console.log(e);
        }
    }

    if(uxdesign===null){
        retornarTodasFormacoesUxDesign();
    }

    function formacaoUxDesign(){
        try{
            return(
                uxdesign.map((value, index)=>{
                    return (
                        <div className="formacao__informations">
                            <a href={"/formacoes_detalhe="+value.id} className="formacao__link">
                                <h4 className="formacao__title">{value.titulo}</h4>
                            </a>
                        </div>
                    );
                }))
        }
        catch (e) {
            console.log(e);
        }
    }

    if(mobile===null){
        retornarTodasFormacoesMobile();
    }

    function formacaoMobile(){
        try {
            return(
                mobile.map((value, index)=>{
                    return (
                        <div className="formacao__informations">
                            <a href={"/formacoes_detalhe="+value.id} className="formacao__link">
                                <h4 className="formacao__title">{value.titulo}</h4>
                            </a>
                        </div>
                    );
                }))
        }
        catch (e) {
            console.log(e);
        }
    }

    if(inovacaoGestao===null){
        retornarTodasFormacoesInovacaoGestao();
    }

    function formacaoInovacaoGestao(){
        try {
            return(
                inovacaoGestao.map((value, index)=>{
                    return (
                        <div className="formacao__informations">
                            <a href={"/formacoes_detalhe="+value.id} className="formacao__link">
                                <h4 className="formacao__title">{value.titulo}</h4>
                            </a>
                        </div>
                    );
                }))
        }
        catch (e) {
            console.log(e);
        }
    }

    function body() {
        if (isLogged()){
            try{
                return(<div>
                        <section className="banner bootcamp-banner-background-theme">
                            <div className="container">
                                <h1 className="banner-title">
                                    <a href="/formacoes" className="banner-title-link">
                                        Forma????es
                                    </a>
                                </h1>
                            </div>
                        </section>
                        <section className="formacoes-header">
                            <div className="container">
                                <h3 className="formacoes-catalogo-titulo">
                                    <img className="formacoes-catalogo-icone"
                                         src="https://cursos.alura.com.br/assets/images/learningGuide/guides/icon-capelo.svg"
                                         alt=""/>
                                    Forma????es
                                </h3>
                                <h1 className="formacoes-header-titulo">Explore o conte??do da EasyLearn</h1>
                                <h2 className="formacoes-header-subtitulo">
                                    Conhe??a nossas forma????es, uma sequ??ncia de cursos e conte??do para voc?? se tornar o profissional
                                    que o mercado procura
                                </h2>
                            </div>
                        </section>
                        <ul className="formacoes__list">
                            <div className="container">
                                <li id="programacao" className="formacoes__item">
                                    <div className="formacoes__header">
                                        <img className="formacoes__icon"
                                             src="https://www.alura.com.br/assets/api/formacoes/categorias/programacao.svg" alt=""/>
                                        <h3 className="formacoes__category-title">
                                            <p className="formacoes__category-prefix">Forma????es em </p>
                                            <p className="formacoes__category-name">Programa????o</p>
                                        </h3>
                                        <p className="formacoes__total formacoes_programacao">{programacao !== null? programacao.length > 1 ? programacao.length + " Forma????es":programacao.length + " Forma????o":<></>} </p>
                                    </div>
                                    <div className="formacoes__rectangle formacoes_programacao"></div>
                                    <div className="formacao">
                                        {
                                            programacao!==null?
                                                formacaoProgramacao()
                                                :
                                                <div></div>
                                        }
                                    </div>
                                </li>
                                <li id="front-end" className="formacoes__item">
                                    <div className="formacoes__header">
                                        <img className="formacoes__icon"
                                             src="https://www.alura.com.br/assets/api/formacoes/categorias/front-end.svg" alt=""/>
                                        <h3 className="formacoes__category-title">
                                            <p className="formacoes__category-prefix formacoes_front_end_fonte">Forma????es em </p>
                                            <p className="formacoes__category-name formacoes_front_end_fonte">Front-end</p>
                                        </h3>
                                        <p className="formacoes__total formacoes_front_end">{frontend !== null? frontend.length > 1 ? frontend.length + " Forma????es":frontend.length + " Forma????o":<></>} </p>
                                    </div>
                                    <div className="formacoes__rectangle formacoes_front_end"></div>
                                    <div className="formacao">
                                        {
                                            frontend!==null?
                                                formacaoFrontend()
                                                :
                                                <div></div>
                                        }
                                    </div>
                                </li>

                                <li id="data-science" className="formacoes__item">
                                    <div className="formacoes__header">
                                        <img className="formacoes__icon"
                                             src="https://www.alura.com.br/assets/api/formacoes/categorias/data-science.svg" alt=""/>
                                        <h3 className="formacoes__category-title">
                                            <p className="formacoes__category-prefix formacoes_data_science_fonte">Forma????es em </p>
                                            <p className="formacoes__category-name formacoes_data_science_fonte">Data Science</p>
                                        </h3>


                                        <p className="formacoes__total formacoes_data_science">{datascience !== null? datascience.length > 1 ? datascience.length + " Forma????es":datascience.length + " Forma????o":<></>} </p>
                                    </div>
                                    <div className="formacoes__rectangle formacoes_data_science"></div>
                                    <div className="formacao">
                                        {
                                            datascience!==null?
                                                formacaoDatascience()
                                                :
                                                <div></div>
                                        }
                                    </div>
                                </li>

                                <li id="devops" className="formacoes__item">
                                    <div className="formacoes__header">
                                        <img className="formacoes__icon"
                                             src="https://www.alura.com.br/assets/api/formacoes/categorias/devops.svg" alt=""/>
                                        <h3 className="formacoes__category-title">
                                            <p className="formacoes__category-prefix formacoes_devops_fonte">Forma????es em </p>
                                            <p className="formacoes__category-name formacoes_devops_fonte">DevOps</p>
                                        </h3>


                                        <p className="formacoes__total formacoes_devops">{devops !== null? devops.length > 1 ? devops.length + " Forma????es":devops.length + " Forma????o":<></>} </p>
                                    </div>
                                    <div className="formacoes__rectangle formacoes_devops"></div>
                                    <div className="formacao">

                                        {
                                            devops!==null?
                                                formacaoDevops()
                                                :
                                                <div></div>
                                        }
                                    </div>
                                </li>

                                <li id="design-ux" className="formacoes__item">
                                    <div className="formacoes__header">
                                        <img className="formacoes__icon"
                                             src="https://www.alura.com.br/assets/api/formacoes/categorias/design-ux.svg" alt=""/>
                                        <h3 className="formacoes__category-title">
                                            <p className="formacoes__category-prefix formacoes_ux_design_fonte">Forma????es em </p>
                                            <p className="formacoes__category-name formacoes_ux_design_fonte">UX &amp; Design</p>
                                        </h3>


                                        <p className="formacoes__total formacoes_ux_design">{uxdesign !== null? uxdesign.length > 1 ? uxdesign.length + " Forma????es":uxdesign.length + " Forma????o":<></>} </p>
                                    </div>
                                    <div className="formacoes__rectangle formacoes_ux_design"></div>
                                    <div className="formacao">

                                        {
                                            uxdesign!==null?
                                                formacaoUxDesign()
                                                :
                                                <div></div>
                                        }
                                    </div>
                                </li>

                                <li id="mobile" className="formacoes__item">
                                    <div className="formacoes__header">
                                        <img className="formacoes__icon"
                                             src="https://www.alura.com.br/assets/api/formacoes/categorias/mobile.svg" alt=""/>
                                        <h3 className="formacoes__category-title">
                                            <p className="formacoes__category-prefix formacoes_mobile_fonte">Forma????es em </p>
                                            <p className="formacoes__category-name formacoes_mobile_fonte">Mobile</p>
                                        </h3>


                                        <p className="formacoes__total formacoes_mobile">{mobile !== null? mobile.length > 1 ? mobile.length + " Forma????es":mobile.length + " Forma????o":<></>} </p>
                                    </div>
                                    <div className="formacoes__rectangle formacoes_mobile"></div>
                                    <div className="formacao">

                                        {
                                            mobile!==null?
                                                formacaoMobile()
                                                :
                                                <div></div>
                                        }
                                    </div>
                                </li>

                                <li id="inovacao-gestao" className="formacoes__item">
                                    <div className="formacoes__header">
                                        <img className="formacoes__icon"
                                             src="https://www.alura.com.br/assets/api/formacoes/categorias/inovacao-gestao.svg"
                                             alt=""/>
                                        <h3 className="formacoes__category-title">
                                            <p className="formacoes__category-prefix formacoes_gestao_fonte">Forma????es em </p>
                                            <p className="formacoes__category-name formacoes_gestao_fonte"
                                            >Inova????o &amp; Gest??o</p>
                                        </h3>


                                        <p className="formacoes__total formacoes_gestao">{inovacaoGestao !== null? inovacaoGestao.length > 1 ? inovacaoGestao.length + " Forma????es":inovacaoGestao.length + " Forma????o":<></>} </p>
                                    </div>
                                    <div className="formacoes__rectangle formacoes_gestao"></div>
                                    <div className="formacao">

                                        {
                                            inovacaoGestao!==null?
                                                formacaoInovacaoGestao()
                                                :
                                                <div></div>
                                        }
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>);
            }
            catch (e) {
                console.log(e);
            }
        }else{
            window.location.href = '/signin'; //manda para a rota home
        }
    }

    return(
        body()
    );
}
export default Formacao;