import React, {useContext, useState} from 'react';
import {ForumContext} from "../../context/ForumProvider";
import {isLogged} from "../../context/AuthHandler";
import {useParams} from "react-router-dom";
import Cookies from "js-cookie";
import {AuthUserContext} from "../../context/AuthUserProvider";

const ForumDetalhe = () => {

    const [categoria,setCategoria] = useState(null);
    const {aluno,signInV1} = useContext(AuthUserContext);
    const [mensagem,setMensagem] = useState(null);
    const {resposta,detalhar,cadastrar,responderTopico,solucionarTopico} = useContext(ForumContext);
    const { id } = useParams();

    if (resposta===null){
        detalhar(id);
    }

    if (aluno===''){
        signInV1(Cookies.get('email'),Cookies.get('pass'))
    }

    console.log(resposta);

    function imagemAvatar() {
        try{
            if(resposta.autor.avatar!==null) {
                return (
                    <img
                        src={resposta.autor.avatar}
                        alt={"Foto de "+resposta.autor.nomeCompleto}
                        className="headline-profile-avatar headline-profile-avatar"/>
                )
            }
            else{
                return (
                    <img
                        src="https://suap.ifsul.edu.br/static/comum/img/default.jpg"
                        alt={"Foto de "+resposta.autor.nomeCompleto}
                        className="headline-profile-avatar headline-profile-avatar"/>
                )
            }
        }catch (e) {
            console.log(e);
        }
    }

    function imagemAvatarResposta(avatar,nome) {
        try{
            if(avatar!==null) {
                return (
                    <img
                        src={avatar}
                        alt={"Foto de "+nome}
                        className="headline-profile-avatar headline-profile-avatar"/>
                )
            }
            else{
                return (
                    <img
                        src="https://suap.ifsul.edu.br/static/comum/img/default.jpg"
                        alt={"Foto de "+nome}
                        className="headline-profile-avatar headline-profile-avatar"/>
                )
            }
        }catch (e) {
            console.log(e);
        }
    }

    function header(){
        return (
            <section className="banner">
                <div className="container">
                    <h1 className="forum-header-breadcrumb banner-title">
                        <a href="/forum" className="forum-header-breadcrumb-item banner-title-link">Fórum</a>
                    </h1>
                </div>
            </section>
        )
    }

    function body(){
        try{
            return(
                <div className="container">
                    <div className="topic-question">
                        <div className="topic-post-status">
                            <div className="topic-post-total-answers">
                                <span className="topic-post-total-answers-number">{resposta.respostas.length}</span>
                                <br/>
                                <span className="topic-post-total-answers-description">
            respostas
            </span>
                            </div>
                        </div>
                        <div className="topic-post-question-content">
                            <header className="topic-header">
                                <div className="topic-header-container">
                                    <div className="topic-header-container-info">
                                        <h1 className="topic-header-container-title">
                                            {resposta.titulo}
                                        </h1>
                                        <div className="topic-header-container-details-date">
                                            <time className="topic-header-date-text" dateTime="07/11/2021">
                                            </time>
                                        </div>
                                    </div>
                                    <div className="topic-header-container-details">
                                        <div className="topic-header-container-details-watch">
                                            <input className="topic-header-container-details-input" id="follow"
                                                   type="checkbox" name="follow" data-topic="184342"/>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <section className="topic-post" id="1019079">
                                <div className="">
                                    <section className="topic-post-header">
                                        <section className="topic-post-author">
                                            <a href={"/user="+resposta.autor.nomeCompleto} className="topic-post-author-photo">
                                                {imagemAvatar()}
                                            </a>
                                            <div className="topic-post-author-details">
                                                por
                                                <a href={"/user="+resposta.autor.nomeCompleto}  className="topic-post-author-name">
                                                    {resposta.autor.nomeCompleto}
                                                </a>
                                            </div>
                                        </section>
                                    </section>
                                    <section className="topic-post-content" data-external-links="">
                                        <p>
                                            {resposta.mensagem}
                                        </p>
                                    </section>
                                    <div className="topic-post-actions">
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )
        }
        catch (e) {
            console.log(e);
        }
    }

    function salvarResposta() {
        alert("Mensagem Registrada");
        responderTopico(mensagem,id,Cookies.get('idUser'));
        window.location.href = '/forum_detalhe='+id;
    }

    function fecharTopico(e) {
        e.preventDefault()
        solucionarTopico(id);
        alert("Topico Solucionado");
    }

    function formulario(){
        try{
            if (resposta.status==="SOLUCIONADO"){
                return (<></>);
            }else {
                return(
                    <section className="topic-reply">
                        <div className="container">
                            <h2 className="topic-reply-title"> O que você acha disso?</h2>
                            <form onSubmit={salvarResposta} className="topic-reply-form">
                                <div className="markdown-editor--wrapper">
                                    <div className="alert markdown-alert-error-hide" data-category="error" role="alert">
                                        <div className="markdown-header">
                                            <p className="alert-message">Desculpe, mas ocorreu um problema ao inserir as
                                                imagens
                                            </p>
                                        </div>
                                        <ul className="markdown-list-errors"></ul>
                                    </div>
                                    <div className="markdownEditor" id="text">
                                        <div className="hackeditor">
                  <textarea aria-live="polite" aria-atomic="true"
                            className="markdownEditor-source markdownEditor-textArea "
                            placeholder="" name="text" data-allow-image-upload="true"
                            data-maxlength="5000"
                            data-maxlength-reached-message="limite de caracteres atingido"
                            data-maxlength-exceeded-message="limite de caracteres ultrapassado"
                            id="markdownEditor-text-ta" onChange={e => setMensagem(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <input className="topic-reply-form-submit" type="submit" value="Responder"/>
                            </form>

                            {aluno.professor === true?
                                <form onSubmit={fecharTopico}>
                                    <input className="topic-reply-form-submit" type="submit" value="Solucionar Tópico"/>
                                </form>
                                :
                                <></>
                            }

                        </div>
                    </section>
                )
            }
        }catch (e) {
            console.log(e);
        }

    }

    function respostas(){
        try{
            if (resposta.respostas.length===0){
                return (<></>);
            }else{
                return(
                    <>
                        {
                            resposta.respostas.map((value, index)=>{
                                return (
                                    <section className="topic-post" id="1019078">
                                        <div className="container">
                                            <section className="topic-post-header">
                                                <section className="topic-post-author">
                                                    <a href="/user/diaslasd" className="topic-post-author-photo">
                                                        {imagemAvatarResposta(value.avatar,value.nomeAutor)}
                                                    </a>
                                                    <div className="topic-post-author-details">
                                                        por
                                                        <a href="/user/diaslasd" className="topic-post-author-name">
                                                            {value.nomeAutor}
                                                        </a>
                                                        <span className="topic-post-author-desc">{value.cargo}</span>
                                                    </div>
                                                </section>
                                            </section>

                                            <section className="topic-post-content" data-external-links="">
                                                <p>{value.mensagem}</p>
                                            </section>
                                            <div className="topic-post-actions">
                                            </div>
                                        </div>
                                    </section>
                                );
                            })
                        }
                    </>
                )
            }
        }catch (e) {
            console.log(e);
        }
    }

    function forum(){
        if (isLogged()){
            return(
                <section className="allTopics">
                    {header()}
                    {body()}
                    {respostas()}
                    {formulario()}
                </section>
            )
        }else{
            window.location.href = '/signin'; //manda para a rota home
        }
    }

    return(
        forum()
    );
}

export default ForumDetalhe;