import React, {useContext, useState} from 'react';
import {ForumContext} from "../../context/ForumProvider";
import {isLogged} from "../../context/AuthHandler";

const Forum = () => {

    const [categoria,setCategoria] = useState(null);
    const {resposta,todosTopicos} = useContext(ForumContext);

    if (resposta===null){
        todosTopicos();
    }

    function imagemAvatar(value) {
        try{
            if(value.avatar!==null) {
                return (
                    <img
                        src={value.avatar}
                        alt={"Foto de "+value.nomeCompleto}
                        className="headline-profile-avatar headline-profile-avatar"/>
                )
            }
            else{
                return (
                    <img
                        src="https://suap.ifsul.edu.br/static/comum/img/default.jpg"
                        alt={"Foto de "+value.nomeCompleto}
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

    function clicou() {
        console.log(clicou);
    }

    function search(){
        return (
            <section className="forumFilter">
                <form className="forumFilter-form" action="">
                    <input type="hidden" id="kind" name="kind" value=""/>
                </form>
                <div className="container">
                    <div className="title-and-new-topic">
                        <span className="title">Tópicos</span>
                        <a href="/cadastrar_forum" className="button-new-topic">Criar novo tópico</a>
                    </div>
                    <div className="categories-restrictions-and-search ">
                        <fieldset className="select-filter">
                            <div className="categoryFilter cs-select" tabIndex="0">
               <span className="cs-placeholder"
               >Todas as categorias</span>
                                <div className="cs-options">
                                    <ul>
                                        <li data-link="/forum/todos" data-option="" data-value="todos"
                                        ><span>Todas as categorias</span></li>
                                        <li data-option="" data-value="programacao">
                                            <span>Programação</span>
                                        </li>
                                        <li data-option="" data-value="front-end">
                                            <span>Front-end</span>
                                        </li>
                                        <li data-option="" data-value="data-science" >
                                            <span>Data Science</span>
                                        </li>
                                        <li data-option="" data-value="devops">
                                            <span>DevOps</span>
                                        </li>
                                        <li data-option="" data-value="design-ux" >
                                            <span>UX &amp; Design</span>
                                        </li>
                                        <li data-option="" data-value="mobile" >
                                            <span>Mobile</span>
                                        </li>
                                        <li data-option="" data-value="inovacao-gestao"
                                        ><span>Inovação &amp; Gestão</span></li>
                                    </ul>
                                </div>
                                <select className="categoryFilter cs-select" name="category.id">
                                    <option value="todos" data-link="/forum/todos" data-class="">Todas as categorias
                                    </option>
                                    <option value="programacao" data-class="">Programação</option>
                                    <option value="front-end" data-class="">Front-end</option>
                                    <option value="data-science" data-class="">Data Science</option>
                                    <option value="devops" data-class="">DevOps</option>
                                    <option value="design-ux" data-class="">UX &amp; Design</option>
                                    <option value="mobile" data-class="">Mobile</option>
                                    <option value="inovacao-gestao" data-class="">Inovação &amp; Gestão</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset className="restrictions">
                            <input type="radio" className="restrictionsInput--all" name="restriction" value="todos"
                                   id="todos" checked=""/>
                            <label className="restrictionsLabel restrictionsLabel--all" htmlFor="todos">
                                Todos
                            </label>
                            <input className="restrictionsInput--all" type="radio" name="restriction"
                                   value="sem-resposta" id="sem-resposta"/>
                            <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-resposta">
                                Sem resposta
                            </label>
                            <input className="restrictionsInput--all" type="radio" name="restriction"
                                   value="com-solucao" id="com-solucao"/>
                            <label className="restrictionsLabel restrictionsLabel--all"
                                   htmlFor="com-solucao">
                                Solucionados
                            </label>
                            <input className="restrictionsInput--all" type="radio" name="restriction"
                                   value="sem-solucao" id="sem-solucao"/>
                        </fieldset>
                        <form className="forumSearch" action="/forum/search">
                            <label htmlFor="forumSearch-input" className="forumSearch-label">Busque por assunto</label>
                            <input id="forumSearch-input" className="forumSearch-input" type="text" name="term"
                                   placeholder="Busque por assunto"/>
                            <button className="forumSearch-submit">Buscar</button>
                        </form>
                        <a href="/cadastrar_forum" className="button-new-topic">Criar novo tópico</a>
                    </div>
                </div>
            </section>
        )
    }

    function body(){
        try{
            return(
                <section className="forumList container">
                    <ul className="forumList-topics">
                        {
                            resposta.map((value, index)=>{
                                return (
                                    <li className="forumList-item"
                                        itemID="https://cursos.alura.com.br/forum/topico-comparacao-estranha-183833">
                                        <div className="forumList-item-subject">
                                            <div className="forumList-item-icon">
                                                {value.status==="NAO_RESPONDIDO" || value.status === "NAO_SOLUCIONADO"?
                                                    <img className="forumList-icon-notsolved"
                                                         src="https://cursos.alura.com.br/assets/images/topics/icon-not-solved.svg"/>
                                                    :
                                                    <img className="forumList-icon-notsolved"
                                                         src="https://checkbits.com.br/wp-content/uploads/2021/03/checked.svg"/>
                                                }
                                            </div>
                                            <div className="forumList-item-subject-info">
                                                <h2 className="forumList-item-subject-info-title">
                                                    <a className="forumList-item-subject-info-title-link"
                                                       href={"/forum_detalhe="+value.id}>
                                                        {value.titulo}
                                                    </a>
                                                </h2>
                                                <div className="forumList-item-answers --only-mobile">
                                                    <span className="forumList-item-answers-number">{value.qtdResposta}</span>
                                                    <span className="forumList-item-answers-description">
                  respostas
                  </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="forumList-item-wrapper">
                                            <div className="forumList-item-infoGroup">
                                                <a href={"/user="+value.autor.nomeCompleto} className="forumList-item-info">
                                                    <div className="forumList-item-info-avatar-wrapper">
                                                        {imagemAvatar(value.autor)}
                                                    </div>
                                                    <div className="forumList-item-info-description">
                                                        <p className="forumList-item-info-name">por
                                                            <strong>
                                                                {value.autor.nomeCompleto}
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="forumList-item-answers --above-mobile">
                                                <span className="forumList-item-answers-number">{value.qtdResposta}</span>
                                                <span className="forumList-item-answers-description">
               respostas
               </span>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>
            )
        }
        catch (e) {
            console.log(e);
        }
    }

    function forum(){
        if (isLogged()){
            return(
                <section className="allTopics">
                    {header()}
                    {search()}
                    {body()}
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

export default Forum;