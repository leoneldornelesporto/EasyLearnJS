import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";

import Cookies from "js-cookie";
import {getAuthorization, isLogged} from "../../context/AuthHandler";
import {CursoContext} from "../../context/CursoProvider";
import {AuthUserContext} from "../../context/AuthUserProvider";
import {MatriculaContext} from "../../context/MatriculaContext";

const CursoDetalhe = () => {

    const { id } = useParams();
    const {aluno,signIn,signInV1} = useContext(AuthUserContext);
    const {cursos,retornarCursosPorUuid} = useContext(CursoContext);
    const {matriculas,cursosPausados,errorMessage,setErrorMessage,retornarTodasMatriculas,salvarMatricula,verificarMatriculaPorId,verificarMatriculaPorUuid,verificarSeEstouMatriculadoEmAlgumCursoById,verificarSePauseiAlgumCursoMatricula} = useContext(MatriculaContext);


    Cookies.set("UuidCurso",id);

    try {
        if(aluno==='' && cursos===null && matriculas===null){
            signInV1(Cookies.get("email"),Cookies.get("pass"));
            retornarCursosPorUuid(id);
            verificarMatriculaPorId(aluno.id,cursos.id,getAuthorization());
        }

        if(cursos===null){
            retornarCursosPorUuid(id);
        }

        if(matriculas===null){
            verificarMatriculaPorId(aluno.id,cursos.id,getAuthorization());
        }
    }
    catch (e) {
        console.log("aqui")
    }

    let cont =0;

    function matricular() {
        verificarMatriculaPorId(aluno.id,cursos.id,getAuthorization())
        console.log(matriculas)
        salvarMatricula(getAuthorization(),aluno.id,cursos.id,0,0);
        Cookies.set('matricula', true);
        window.location.href = '/aula_detalhe='+cursos.moduloDtoList[0].aulaDto[0].id; //manda para a rota home
    }

    useEffect(()=>{
        retornarCursosPorUuid(id);
    },[])

    function verificarSeEstaMatriculado(){
        Cookies.set('matricula', false);
        if(matriculas!==null){
            Cookies.set('matricula', true);
            return (
                <a href={'/aula_detalhe='+cursos.moduloDtoList[0].aulaDto[0].id}
                         className="course-header-button startContinue-button bootcamp-primary-button-theme"
                         aria-label="Iniciar Curso">
                Acessar Curso
            </a>);
        }else{
            return (
                <a onClick={matricular}
                           className="course-header-button startContinue-button bootcamp-primary-button-theme"
                           aria-label="Iniciar Curso">
                Iniciar Curso
            </a>
            );
        }
    }

    function imagemAvatar() {
        if(cursos.avatar!==null) {
            return (
                <img className="instructors-item-img"
                     src={cursos.avatar}
                     alt={cursos.nomeProfessor}/>
            )
        }
        else{
            return (
                <img
                    src="https://suap.ifsul.edu.br/static/comum/img/default.jpg"
                    alt={cursos.nomeProfessor}
                    className="headline-profile-avatar headline-profile-avatar"/>
            )
        }
    }

    function body(){

        if(isLogged()){
        try{
            return(
                <div className="container">
                    <section className="course">
                        <section className="course-header">
                            <div className="course-header-banner bootcamp-background-dark">
                                <div className="container course-header-banner-breadcrumb">
                                    <a href="/category/programacao" className="course-header-banner-breadcrumb__category"
                                       aria-label="Programação">
                                        {cursos.categoria}
                                    </a>
                                </div>
                                <div className="course-header-banner__wrapper">
                                    <div className="container course-header-banner-content">
                                        <div className="course-header-logo-area">
                                            <div className="course-header-banner-logo">
                                                <div className="courseLogo">
                                                    <img src={cursos.imagemIcon} alt=""
                                                         className="courseLogo-course"/>
                                                </div>
                                            </div>
                                            <div className="hreview-aggregate">
                                                <h1 className="course-header-banner-title"
                                                    aria-label="Curso de Unity 2D parte 1: Criando seu primeiro jogo 2D">
                                                    Curso de <br/>
                                                    <strong>{cursos.nome}</strong>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container course-header-summary__wrapper">
                                        <div className="course-header-summary" data-finished="false">
                                            <div className="course-header-summary__infos__wrapper">
                                                <div className="course-header-summary__info summary-time">
                                                    <div className="course-header-summary__info__wrapper">
                                                        <p className="course-header-summary__text">Carga horária</p>
                                                        <p className="course-header-summary__title"
                                                           aria-label="Carga horária: 8h">{cursos.cargaHoraria}</p>
                                                    </div>
                                                </div>
                                                <div className="course-header-summary__info summary-score">
                                                    <div className="course-header-summary__info__wrapper">
                                                        <p className="course-header-summary__text">Avaliação</p>
                                                        <p className="course-header-summary__title" aria-label="Avaliação: 9.0">0.0</p>
                                                    </div>
                                                </div>
                                                <div className="course-header-summary__info summary-update">
                                                    <div className="course-header-summary__info__wrapper">
                                                        <p className="course-header-summary__text">Atualizado em</p>
                                                        <p className="course-header-summary__title"
                                                           aria-label="Atualizado em 27/03/2020">{cursos.data}</p>
                                                    </div>
                                                </div>
                                                <div className="course-header-summary__info summary-student">
                                                    <div className="course-header-summary__info__wrapper">
                                                        <p className="course-header-summary__text">alunos(as)</p>
                                                        <p className="course-header-summary__title" aria-label="3.322alunos(as)">
                                                            3.322
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="course-header-summary__info summary-transcription">
                                                    <div className="course-header-summary__info__wrapper">
                                                        <p className="course-header-summary__text">Transcrição</p>
                                                        <p className="course-header-summary__title">100%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-header-headline bootcamp-banner-background-theme">
                                <div className="container">
                                    <div className="course-header-headline-actions bootcamp-banner-background-theme">
                                        <div className="container">
                                            {verificarSeEstaMatriculado()}

                                            <div className="course-header-button-wrapper">
                                                <div className="course-header-button-menu">
                                                    <ul className="course-header-button-menu__list">
                                                        <li className="course-header-button-menu__item course-header-button-menu__favorite
                                 course-header-button-menu__favorite--" data-bookmarked="false">
                                                            <button type="submit"
                                                                    className="course-header-button-menu__link course-bookmark-button"
                                                                    data-bookmark-display="Favoritar" data-unbookmark-display="Desfavoritar"
                                                                    data-bookmarked="false" data-course-code="flappybirdunity1">
                                                                <h2 className="course-header-button-menu__title">Favoritar</h2>
                                                                <p className="course-header-button-menu__text">
                                                                    Separe os cursos que mais gostar para estudar em outro momento.
                                                                </p>
                                                            </button>
                                                        </li>
                                                        <li className="course-header-button-menu__item course-header-button-menu__finish
                                 course-header-button-menu__finish--disabled">
                                                            <a id="courseDetailBox-finishCourse" href="/completeCourse/flappybirdunity1"
                                                               data-below60="Você precisa concluir ao menos 60% do curso para ter acesso ao seu certificado de participação!"
                                                               data-already60="Você acabou o curso? Se sim, já emitiremos o seu certificado com a data de finalização para hoje. Nele, aparecem também o número de vídeos vistos, bem como o número de atividades. Podemos emitir?"
                                                               data-progress="0.0" disabled="" className="course-header-button-menu__link">
                                                                <h2 className="course-header-button-menu__title">Concluir</h2>
                                                                <p className="course-header-button-menu__text">
                                                                    Certificado de conclusão quando atingir no mínimo 60% de progresso.
                                                                </p>
                                                            </a>
                                                        </li>
                                                        <li className="course-header-button-menu__item course-header-button-menu__pause
                                 course-header-button-menu__pause--disabled">
                                                            <div className="course-header-button-menu__wrapper">
                                                                <form action="/courses/pause" method="post">
                                                                    <button type="submit" className="course-header-button-menu__link"
                                                                            disabled="">
                                                                        <h2 className="course-header-button-menu__title">Pausar curso</h2>
                                                                        <p className="course-header-button-menu__text">
                                                                            Retomar os estudos neste curso em outro momento.
                                                                        </p>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </li>
                                                        <li className="course-header-button-menu__item course-header-button-menu__stop
                                 course-header-button-menu__pause--disabled">
                                                            <div className="course-header-button-menu__wrapper">
                                                                <form action="/courses/stop" method="post">
                                                                    <button type="submit" className="course-header-button-menu__link"
                                                                            disabled="">
                                                                        <h2 className="course-header-button-menu__title">Sair do curso</h2>
                                                                        <p className="course-header-button-menu__text">
                                                                            Não ver mais esse curso na dashboard e em “Meus cursos” até
                                                                            iniciá-lo novamente.
                                                                        </p>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="course-content">
                        <div className="container">
                            <div className="course-content-aside">
                                <div className="course-content-details">
                                    <section className="course-content-instructors">
                                        <h2 className="course-title course-content-subtitle bootcamp-text-color">
                                            Instrutor(a)
                                        </h2>
                                        <ul className="course-content-instructors-list">
                                            <li className="instructors-list-item">
                                                <div className="instructors-item-photo">
                                                    <a href="/user/RicardoBugan" className="instructor-item-link">
                                                        {imagemAvatar()}
                                                    </a>
                                                </div>
                                                <div className="instructor-details">
                                                    <div className="instructor-item-header">
                                                        <a href="/user/RicardoBugan"
                                                           className="instructor-item-link bootcamp-text-color">
                                                            <h3 className="instructor-item-name bootcamp-text-color">{cursos.nomeProfessor}
                                                            </h3>
                                                        </a>
                                                        <p>
                                                            <a target="_blank" rel="noopener nofollow"
                                                               className="instrutores-item-linkedin bootcamp-text-color"
                                                               href={cursos.linkedin}>
                                                                <img src="https://cursos.alura.com.br/assets/images/course/linkedin.svg"/> Linkedin
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <div>
                                                <p className="instructor-item-description bootcamp-text-color">{cursos.biografia}
                                                </p>
                                            </div>
                                        </ul>
                                    </section>
                                </div>
                                <div className="course-content-info-list">
                                    <h2 className="course-title course-content-subtitle bootcamp-text-color">Mais sobre o curso</h2>
                                    <a className="course-content-showFaq bootcamp-text-color" href="/course/flappybirdunity1/faq">Veja
                                        as perguntas frequentes</a>
                                    <a href="/forum/curso-flappybirdunity1/todos/0" className="course-content-forumLink">Fórum do
                                        curso</a>
                                </div>
                            </div>
                            <div className="course-content-details-sectionList">
                                <div className="course-content-sectionList">
                                    <div className="course-content-calls">
                                        <h2 className="course-content-calls__title bootcamp-text-color">{cursos.moduloDtoList[0].tituloSecundario}
                                        </h2>
                                        <div className="course-content-calls__wrapper">
                                            <ul className="course-content-calls__list">
                                                {
                                                    cursos.moduloDtoList[0].subtitulo.map((value, index)=> {
                                                        return (
                                                            <li className="course-content-calls__item bootcamp-text-color">
                                                                {value}
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="aulas" className="course-title course-content-header">
                                        <h2 className="course-content-header-title bootcamp-text-color">Aulas</h2>
                                    </div>
                                    <ul className="courseSectionList">

                                        {
                                            cursos.moduloDtoList.map((value, index)=>{
                                                return (
                                                    <li className="courseSection-listItem">
                                                        <div className="courseSection-listItem__wrapper">
                                                            <a href={"/aula_detalhe="+value.aulaDto[0].id}
                                                               className="courseSectionList-section">
                                                                <div className="courseSectionList-sectionTitle bootcamp-text-color">
                                                                    {value.titulo}
                                                                    {index===0?
                                                                        <object>
                                                                            <a href={"/aula_detalhe="+value.aulaDto[0].id}>
                                                                                <button className="courseSectionList__firstVideo">
                                                                                    Ver primeiro vídeo
                                                                                </button>
                                                                            </a>
                                                                        </object>
                                                                        :
                                                                        <div/>
                                                                    }
                                                                </div>
                                                                <div className="courseSectionList-details">
                                                                    <aside className="courseSectionList-sectionProgress"
                                                                           aria-label="0 exercícios feitos de 12">
                                                                        <span hidden="true">{cont=0}</span>
                                                                        {
                                                                            value.aulaDto.map((value,index)=> {
                                                                                if (value.visualizada === true){
                                                                                    cont++;
                                                                                }
                                                                            })
                                                                        }
                                                                        {cont}/ {value.aulaDto.length}
                                                                    </aside>
                                                                    <span className="courseSectionList-separation"></span>
                                                                    <span className="courseSectionList-sectionTime"
                                                                          aria-label="Duração de 34 minutos">
                           34min
                           </span>
                                                                </div>
                                                            </a>
                                                            <div className="courseSectionList-moreInfo"></div>
                                                        </div>

                                                        {
                                                            value.aulaDto.map((value,index)=>{
                                                                return (
                                                                    <ul className="courseSectionList-ementa">
                                                                        <li className="courseSectionList-ementaItem">{value.titulo}</li>
                                                                    </ul>
                                                                );
                                                            })
                                                        }
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
        catch (e) {
            return (
                <div/>
            )
        }
        }
        else{
            window.location.href = '/signin'; //manda para a rota home
        }
    }

    return (body());
}
export default CursoDetalhe;