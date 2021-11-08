import React, {useContext, useState} from 'react';
import Cookies from "js-cookie";
import {AuthUserContext} from "../../context/AuthUserProvider";
import {CursoContext} from "../../context/CursoProvider";
import {ForumContext} from "../../context/ForumProvider";

const CadastrarForum = () => {

    const [titulo,setTitulo] = useState(null);
    const [duvida,setDuvida] = useState(null);
    const [cursoId,setCursoId] = useState(null);
    const [cursoSelected,setCategoriaSelected] = useState(null);
    const {aluno,signInV1} = useContext(AuthUserContext);
    const {cursos,retornarTodosOsCursos} = useContext(CursoContext);
    const {resposta,cadastrar} = useContext(ForumContext);

    if (aluno===''){
        signInV1(Cookies.get('email'),Cookies.get('pass'))
    }

    if (cursos===null){
        retornarTodosOsCursos();
    }

    function retornaCursos(){
        try{
            return(
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        {cursoSelected===null?"Escolha o Curso que você tem dúvida":cursoSelected}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            cursos.map((value, index)=>{
                                return (
                                    <a onClick={e => setCursoId(value.id)}>
                                        <a className="dropdown-item"  onClick={e => setCategoriaSelected(value.nome)}>{value.nome}</a>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            );
        }
        catch (e) {
            return(<></>);
        }
    }

    function header(){
        return(
            <section className="banner bootcamp-banner-background-theme">
                <div className="container">
                    <h1 className="banner-title">
                        <a href="/forum" className="banner-title-link">
                            Fórum
                        </a>
                    </h1>
                </div>
            </section>
        )
    }

    function salvarTopico() {
        alert("Forum criado com Sucesso");
        cadastrar(titulo,duvida,cursoId,Cookies.get('idUser'));
        window.location.href = '/forum'; //manda para a rota home
    }

    function body(){
        try{
            return(
                <div className="createTopic-author">
                    <div className="container">
                        <form className="createTopic-form" onSubmit={salvarTopico}>
                            <div className="bootcamp-author-create_topic">
                                <div className="bootcamp-author">
                                    <section className="topic-post-author">
                                        <a href="/user/talison-henke-bols" className="topic-post-author-photo">
                                            <img
                                                src="https://www.gravatar.com/avatar/625eb23ce9552c97a81257e4c50deadb.png?r=PG&amp;size=60x60&amp;date=2021-11-07&amp;d=https%3A%2F%2Fcursos.alura.com.br%2Fassets%2Fimages%2Fforum%2Favatar_t.png"
                                                alt="" className="topic-post-author-photo-img"/>
                                        </a>

                                        <div className="topic-post-author-details">
                                            por
                                            <a href="/user/talison-henke-bols" className="topic-post-author-name">
                                                {aluno.nomeCompleto}
                                            </a>
                                        </div>
                                    </section>
                                </div>

                                <input className="createTopic-form-title bootcamp-input-background-dark"
                                       name="topic.subject" placeholder="Descreva a sua dúvida em uma frase curta"
                                       onChange={e => setTitulo(e.target.value)}
                                       required=""/></div>


                            <div className="markdown-editor--wrapper">
                                <div className="markdownEditor" id="">
                                    <div className="hackeditor">
                                    <textarea aria-live="polite" aria-atomic="true"
                                              className="markdownEditor-source markdownEditor-textArea "
                                              placeholder="Detalhes da dúvida" name="topic.post.text" required=""
                                              onChange={e => setDuvida(e.target.value)}
                                              data-allow-image-upload="true" data-maxlength="5000"
                                              data-maxlength-reached-message="limite de caracteres atingido"
                                              data-maxlength-exceeded-message="limite de caracteres ultrapassado"
                                              id="markdownEditor--ta" ></textarea>
                                        <div className="EasyMDEContainer">
                                            <div className="editor-statusbar"><span className="upload-image"></span><span
                                                className="character-counter disabled"></span></div>
                                        </div>
                                    </div>
                                </div>
                                {retornaCursos()}
                            </div>

                            <input type="submit"
                                   className="button buttonAction createTopic-form-button bootcamp-primary-button-theme"
                                   value="Enviar pergunta"/>

                        </form>
                    </div>
                </div>
            )
        }catch (e) {
            console.log(e);
        }
    }

    return(
        <>
            {header()}
            {body()}
        </>
    );
}

export default CadastrarForum;