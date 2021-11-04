import React, {useContext} from 'react';
import {useParams} from "react-router-dom";

import Cookies from "js-cookie";
import {CursoContext} from "../../context/CursoProvider";
import {MatriculaContext} from "../../context/MatriculaContext";
import {isLogged} from "../../context/AuthHandler";

const CursoDetalhe = () => {

    const { id } = useParams();
    const {cursos,retornarCursosPorUuid} = useContext(CursoContext);
    const {matriculas,verificaByIdSeMatriculeiAlgumCursos} = useContext(MatriculaContext);

    if (cursos===null){
        retornarCursosPorUuid(id);
    }

    if (matriculas===null){
        verificaByIdSeMatriculeiAlgumCursos(Cookies.get('idUser'),id);
    }

    function verificaMatricula(){

        if (matriculas===true){
            Cookies.set('matricula',true);
                return(
                    <a href={"/aula_detalhe="+cursos.moduloDto[0].aulaDto[0].id}
                       className="course-header-button startContinue-button bootcamp-primary-button-theme"
                       aria-label="Iniciar Curso" disabled="">
                        Acessar Curso
                    </a>
                   )
        }
        else{
            Cookies.set('matricula',false);
            return (
                <a href={"/payment="+id}
                   className="course-header-button startContinue-button bootcamp-primary-button-theme"
                   aria-label="Comprar Curso" disabled="" target="_blank">
                    Comprar Curso
                </a>
            )
        }
    }

    function imagemAvatar() {
        if(cursos.avatar!==null) {
            return (
                <img
                    src={cursos.avatar}
                    alt={"Foto de "+cursos.nomeCompleto}
                    className="headline-profile-avatar headline-profile-avatar"/>
            )
        }
        else{
            return (
                <img
                    src="https://suap.ifsul.edu.br/static/comum/img/default.jpg"
                    alt={"Foto de "+cursos.nomeCompleto}
                    className="headline-profile-avatar headline-profile-avatar"/>
            )
        }
    }

    function retornaAulas(){
        try{
            return(
                <>
                    {
                        cursos.moduloDto.map((value, index)=>{
                            return (
                                <li className="courseSection-listItem">
                                    <div className="courseSection-listItem__wrapper">
                                        <a href={"/modulo_detalhe="+value.id}
                                           className="courseSectionList-section">
                                            <div
                                                className="courseSectionList-sectionTitle bootcamp-text-color">
                                                {value.titulo}
                                                {index===0?<object><a href={"/modulo_detalhe="+value.id}> <button className="courseSectionList__firstVideo"> Ver primeiro vídeo </button></a></object>:<></>}
                                            </div>
                                            <div className="courseSectionList-details">
                                                <aside className="courseSectionList-sectionProgress"
                                                       aria-label="0 exercícios feitos de 12">
                                                    <span className="">{value.aulaDto.length}</span>
                                                </aside>
                                                <span className="courseSectionList-separation"></span>
                                                <span className="courseSectionList-sectionTime"
                                                      aria-label="Duração de 34 minutos">{value.aulaDto.length>1?"Aulas":"Aula"}</span>
                                            </div>
                                        </a>
                                        <div className="courseSectionList-moreInfo"></div>
                                    </div>

                                    {
                                        value.aulaDto.map((value, index)=>{
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
                    </>
            );
        }
        catch (e) {
            return(<></>);
        }
    }

    function headerCurso(){
        try{
            if (isLogged()){
                if (cursos.categoria==="Programação"){
                    return(
                        <>
                            <section className="course">
                                <section className="course-header">
                                    <div className="course-header-banner bootcamp-background-dark">
                                        <div className="container course-header-banner-breadcrumb">
                                            <a href="/category/programacao"
                                               className="course-header-banner-breadcrumb__category" aria-label="Programação">
                                                {cursos.categoria}
                                            </a>
                                        </div>
                                        <div className="course-header-banner__wrapper">
                                            <div className="container course-header-banner-content">
                                                <div className="course-header-logo-area">
                                                    <div className="course-header-banner-logo">
                                                        <div className="courseLogo">
                                                            <img
                                                                src={cursos.imagemIcon}
                                                                alt="" className="courseLogo-course"/>
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
                                                <div className="course-header-summary bootcamp-background-dark-section"
                                                     data-finished="false">
                                                    <div className="course-header-summary__infos__wrapper">
                                                        <div className="course-header-summary__info summary-time">
                                                            <div className="course-header-summary__info__wrapper">
                                                                <p className="course-header-summary__text">Carga horária</p>
                                                                <p className="course-header-summary__title"
                                                                   aria-label="Carga horária: 8h">{cursos.cargaHoraria}h</p>
                                                            </div>
                                                        </div>
                                                        <div className="course-header-summary__info summary-score">
                                                            <div className="course-header-summary__info__wrapper">
                                                                <p className="course-header-summary__text">Avaliação</p>
                                                                <p className="course-header-summary__title"
                                                                   aria-label="Avaliação: 9.0">9.0</p>
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
                                                                <p className="course-header-summary__title"
                                                                   aria-label="3.432alunos(as)">
                                                                    {cursos.qtdAlunosMatriculados}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="course-header-summary__info summary-transcription">
                                                            <div className="course-header-summary__info__wrapper">
                                                                <p className="course-header-summary__text">Transcrição</p>
                                                                <p className="course-header-summary__title">{cursos.transcricao}%</p>
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

                                                    {verificaMatricula()}

                                                    <div className="course-header-button-wrapper">
                                                        <button className="course-header-button studyPlan-button"
                                                                aria-label="Adicionar a um Plano de Estudos">Adicionar a um
                                                            Plano de Estudos
                                                        </button>
                                                        <div
                                                            className="course-header-button-menu course-header-button-menu__first-step"
                                                            data-show="true">
                                                            <h2 className="course-header-button-menu__title">Meus Planos</h2>
                                                            <ul className="guide-progresses__list__wrapper">
                                                            </ul>
                                                            <button className="course-header-button-menu__add-guide"
                                                                    data-course-id="795">
                                                                <span className="course-header-button-menu__add-icon">Adicionar em novo Plano</span>
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="course-header-button-menu course-header-button-menu__second-step"
                                                            data-show="false">
                                                            <h2 className="course-header-button-menu__title added-course">Curso
                                                                adicionado!</h2>
                                                            <p className="course-header-button-menu__description">
                                                                Adicionado no Plano de Estudos "<span
                                                                className="course-header-button-menu__guideTitle"></span>".
                                                            </p>
                                                            <a className="course-header-button editPlan" href="">Editar o
                                                                Plano...</a>
                                                            <button className="course-header-button okPlan">Ok</button>
                                                            <a href="/category/programacao#desenvolvimento-de-jogos"
                                                               className="course-header-button-menu__see-more">Ver mais cursos
                                                                de Desenvolvimento de jogos</a>
                                                        </div>
                                                        <div
                                                            className="course-header-button-menu course-header-button-menu__third-step"
                                                            data-show="false">
                                                            <h2 className="course-header-button-menu__title added-course">Plano
                                                                de Estudos criado!</h2>
                                                            <p className="course-header-button-menu__description">
                                                                Recomendamos que coloque um nome bacana no seu Plano de Estudos.<br/>Clique
                                                                no botão abaixo.
                                                            </p>
                                                            <a className="course-header-button editPlan" href="">Editar o
                                                                Plano...</a>
                                                            <button className="course-header-button okPlan">Ok</button>
                                                            <a href="/category/programacao#desenvolvimento-de-jogos"
                                                               className="course-header-button-menu__see-more">Ver mais cursos
                                                                de Desenvolvimento de jogos</a>
                                                        </div>
                                                    </div>
                                                    <div className="course-header-button-wrapper">
                                                        <button
                                                            className="course-header-button otherActions-button bootcamp-secondary-button-theme">Outras
                                                            ações
                                                        </button>
                                                        <div className="course-header-button-menu">
                                                            <ul className="course-header-button-menu__list">
                                                                <li className="course-header-button-menu__item course-header-button-menu__favorite
                              course-header-button-menu__favorite--disabled" data-bookmarked="false">
                                                                    <button type="submit"
                                                                            className="course-header-button-menu__link course-bookmark-button"
                                                                            data-bookmark-display="Favoritar"
                                                                            data-unbookmark-display="Desfavoritar"
                                                                            data-bookmarked="false"
                                                                            data-course-code="flappybirdunity1" disabled="">
                                                                        <h2 className="course-header-button-menu__title">Favoritar</h2>
                                                                        <p className="course-header-button-menu__text">
                                                                            Separe os cursos que mais gostar para estudar em
                                                                            outro momento.
                                                                        </p>
                                                                    </button>
                                                                </li>
                                                                <li className="course-header-button-menu__item course-header-button-menu__finish
                              course-header-button-menu__finish--disabled">
                                                                    <a id="courseDetailBox-finishCourse"
                                                                       href="/completeCourse/flappybirdunity1"
                                                                       data-below60="Você precisa concluir ao menos 60% do curso para ter acesso ao seu certificado de participação!"
                                                                       data-already60="Você acabou o curso? Se sim, já emitiremos o seu certificado com a data de finalização para hoje. Nele, aparecem também o número de vídeos vistos, bem como o número de atividades. Podemos emitir?"
                                                                       data-progress="0.0" disabled=""
                                                                       className="course-header-button-menu__link">
                                                                        <h2 className="course-header-button-menu__title">Concluir</h2>
                                                                        <p className="course-header-button-menu__text">
                                                                            Certificado de conclusão quando atingir no mínimo
                                                                            60% de progresso.
                                                                        </p>
                                                                    </a>
                                                                </li>
                                                                <li className="course-header-button-menu__item course-header-button-menu__pause
                              course-header-button-menu__pause--disabled">
                                                                    <div className="course-header-button-menu__wrapper">
                                                                        <form action="/courses/pause" method="post">
                                                                            <button type="submit"
                                                                                    className="course-header-button-menu__link"
                                                                                    disabled="">
                                                                                <h2 className="course-header-button-menu__title">Pausar
                                                                                    curso</h2>
                                                                                <p className="course-header-button-menu__text">
                                                                                    Retomar os estudos neste curso em outro
                                                                                    momento.
                                                                                </p>
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                </li>
                                                                <li className="course-header-button-menu__item course-header-button-menu__stop
                              course-header-button-menu__pause--disabled">
                                                                    <div className="course-header-button-menu__wrapper">
                                                                        <form action="/courses/stop" method="post">
                                                                            <button type="submit"
                                                                                    className="course-header-button-menu__link"
                                                                                    disabled="">
                                                                                <h2 className="course-header-button-menu__title">Sair
                                                                                    do curso</h2>
                                                                                <p className="course-header-button-menu__text">
                                                                                    Não ver mais esse curso na dashboard e em
                                                                                    “Meus cursos” até iniciá-lo novamente.
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
                                        <div className="course-content-details course-degrees">
                                            <h2 className="course-title course-content-subtitle course-degrees-title">
                                                Formação com esse curso
                                            </h2>
                                            <a href={"/formacoes_detalhe="+cursos.formacaoDto.id} className="lista-guides__link"
                                            >
                                                <div className="course-card">
                                                    <li className="course-degrees-item">
                                                        <p className="course-degrees-aside-text"
                                                        >
                                                            <img className="lista-guides__icone-formacao"
                                                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/programacao.svg"/>
                                                            <span className="lista-guides__nome">
                        {cursos.formacaoDto.titulo}
                        </span>
                                                        </p>
                                                    </li>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="course-content-details">
                                            <div className="course-content-details">
                                            </div>
                                            <section className="course-content-instructors">
                                                <h2 className="course-title course-content-subtitle bootcamp-text-color">
                                                    Instrutor(a)
                                                </h2>
                                                <ul className="course-content-instructors-list">
                                                    <li className="instructors-list-item">
                                                        <div className="instructors-item-photo">
                                                            {imagemAvatar()}
                                                        </div>
                                                        <div className="instructor-details">
                                                            <div className="instructor-item-header">
                                                                <a href={"/user"+cursos.nomeProfessor}
                                                                   className="instructor-item-link bootcamp-text-color">
                                                                    <h3 className="instructor-item-name bootcamp-text-color">{cursos.nomeProfessor}</h3>
                                                                </a>
                                                                <p>
                                                                    <a target="_blank" rel="noopener nofollow"
                                                                       className="instrutores-item-linkedin bootcamp-text-color"
                                                                       href="https://www.linkedin.com/in/ricardo-bugan-b0581379/">
                                                                        <img
                                                                            src="https://cursos.alura.com.br/assets/images/course/linkedin.svg"/> {cursos.linkedin}
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <div>
                                                        <p className="instructor-item-description bootcamp-text-color">{cursos.biografia}</p>
                                                    </div>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="course-content-details-sectionList">
                                        <div className="course-content-sectionList">
                                            <div className="course-content-calls">
                                                <p>{cursos.descricao}</p>
                                            </div>
                                            <div id="aulas" className="course-title course-content-header">
                                                <h2 className="course-content-header-title bootcamp-text-color">Aulas</h2>
                                            </div>
                                            <ul className="courseSectionList">
                                                {retornaAulas()}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                }
            }else{
                window.location.href = '/signin'; //manda para a rota home
            }
        }catch (e) {
            console.log(e)
        }
    }

    return (<>
        {headerCurso()}
    </>);
}
export default CursoDetalhe;