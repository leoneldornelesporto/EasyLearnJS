import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Cookies from "js-cookie";
import {getAuthorization, isLogged} from "../../context/AuthHandler";
import {CursoContext} from "../../context/CursoProvider";
import {ModuloContext} from "../../context/ModuloContext";

const ModuloDetalhe = () => {

    const {cursos,modulo,verifica,retornarCursosPorUuid,retornarModulos} = useContext(CursoContext);
    const {idAula,retornarModuloPeloId} = useContext(ModuloContext);

    const { id } = useParams();

    useEffect(()=>{
        retornarModulos(id,getAuthorization());
    },[])

    useEffect(()=>{
        retornarCursosPorUuid(Cookies.get('UuidCurso'));
    },[])

    if(idAula===''){
        retornarModuloPeloId(id,getAuthorization());
    }

    function body(){
        if(isLogged()) {

            try {
                return (<section className="task-body">
                    <header className="task-body-header">
                        <div className="container">
                            <button title="" aria-label="" type="button" className="theatermode openMenu-button task-menu-button
         " id="menu-button-header">
                            </button>
                            <h1 className="task-body-header-title">
                                <svg className="task-body-header-title-svg" aria-label="Atividade de Vídeo">
                                    <path transform="translate(-37.000000, -324.000000)"
                                          d="M39,326 L39,338 L51,338 L51,326 L39,326 Z M37,325.99406 C37,324.892771 37.8945138,324 38.9940603,324 L51.0059397,324 C52.1072288,324 53,324.894514 53,325.99406 L53,338.00594 C53,339.107229 52.1054862,340 51.0059397,340 L38.9940603,340 C37.8927712,340 37,339.105486 37,338.00594 L37,325.99406 Z M47.1404694,331.484282 C47.615175,331.769105 47.6076584,332.235405 47.1404694,332.515718 L43.8595306,334.484282 C43.384825,334.769105 43,334.549025 43,334.009222 L43,329.990778 C43,329.443586 43.3923416,329.235405 43.8595306,329.515718 L47.1404694,331.484282 Z"></path>
                                </svg>
                                <small>{modulo.indice}</small>
                                <span className="task-body-header-title-text">{modulo.titulo}</span>
                            </h1>
                            {
                                idAula!==''?
                                    <div className="task-body-header-actions">
                                        <a href={"/aula_detalhe=" + idAula} aria-hidden="true"
                                           className="task-actions-button task-actions-button-next task-submit bootcamp-primary-button-theme"
                                        >Próxima Atividade</a>
                                    </div>
                                :
                                    <div></div>
                            }
                            <div className="theater-video settings">
                                <button type="button" className="settings-button" aria-label="Configurações">
                                    <svg className="settings-button-icon">

                                    </svg>
                                </button>
                                <div className="settings-box">
                                    <span className="settings-box-title"></span>
                                    <ul className="settings-box-list">
                                        <li className="settings-box-item settings-box-item-darkmode">
                                            <button className="dark-mode-action">
                                                Modo noturno
                                            </button>
                                        </li>
                                        <li className="settings-box-item settings-box-item-player">
                                            <a className="video-problems" href="/video/diagnostic?taskId=34189"
                                               target="_blank">
                                                Problemas com o vídeo?
                                                <span hidden="">indisponível</span>
                                            </a>
                                        </li>
                                        <li className="settings-box-item settings-box-item-suggestion"><a
                                            href="/suggestions/new/criacao-de-jogos-com-unity-3/34189/question">Sugerir
                                            alteração</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                    <aside className="task-menu">
                        <section className="task-menu-header">
                            <button title="Fechar menu" aria-label="Fechar menu" type="button"
                                    className="openMenu-button task-menu-button "></button>
                            <div className="task-menu-header-info">
                                <a className="task-menu-header-info-title" href={"/curso_detalhe="+cursos.uuid}
                                   title="Ir para página do curso">
                                    <img src="https://www.alura.com.br/assets/api/cursos/flappybirdunity1.svg"
                                         alt="ícone Unity 2D parte 1: Criando seu primeiro jogo 2D"
                                         className="task-menu-header-info-title-icon " width="37.5px" height="37.5px"/>
                                    <h2 className="task-menu-header-info-title-text">{cursos.nome}
                                    </h2>
                                </a>
                                <div className="task-menu-header-info-progress">
                                    <span className="task-menu-header-info-progress-percentage ">%</span>
                                    <span className="task-menu-header-info-progress-bar"
                                    ></span>
                                </div>
                            </div>
                        </section>
                        <form className="task-menu-header-search" target="_blank"
                              action="/search/course/flappybirdunity1"
                              method="get">
                            <label className="task-menu-header-search-title" htmlFor="query">Buscar neste curso</label>
                            <input className="task-menu-header-search-input" name="query" id="query" type="text"
                                   required=""/>
                            <button className="task-menu-header-search-button">Buscar <img aria-hidden="true"
                                                                                           className="task-menu-header-search-button-img"
                                                                                           src="https://cursos.alura.com.br/assets/images/classPage/icon-new-page.svg"/>
                            </button>
                        </form>
                        <section className="task-menu-section sr-only">
                            <div className="task-menu-section-title">
            <span className="task-menu-section-title-number ">Aula<strong>01</strong>
            <span>de 05</span>
            </span>
                                <h3 className="task-menu-section-title-text">
                                    Movimento do avião
                                </h3>
                            </div>
                        </section>
                        <section className="task-menu-sections">
                            <h2 className="task-menu-sections-title">
                                Aula Atual
                            </h2>
                            <ul className="task-menu-sections-select" id="nav">
                                <li><a href="#">Selecione o Modulo</a>
                                    <ul>
                                        {
                                            cursos.moduloDtoList.map((value, index) => {
                                                return (
                                                    <li><h3><a href={"modulo_detalhe="+value.id}  selected="">{value.titulo}</a></h3></li>
                                                );
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <nav className="task-menu-nav">
                            <h2 className="task-menu-nav-title">
                                Atividades
                                <span>1 de 12</span>
                            </h2>
                            <ul className="task-menu-nav-list">
                                {
                                    modulo.aulaDto.map((value, index) => {
                                        return (
                                            <li className="task-menu-nav-item">
                                                <a href={"/aula_detalhe=" + value.id}
                                                   className="task-menu-nav-item-link task-menu-nav-item-link-VIDEO">
                                                    <svg className="task-menu-nav-item-svg "
                                                         aria-label="Atividade de Vídeo não concluída">
                                                    </svg>
                                                    <span className="task-menu-nav-item-number">0{++index}</span>
                                                    <span className="task-menu-nav-item-text">
                                                  <span className="task-menu-nav-item-title" title="Introdução">
                                                  {value.titulo}
                                                  </span>
                                                  <span className="task-menu-nav-item-infos">
                                                  <span className="task-menu-nav-item-videoDuration"
                                                        title="Ir para o Vídeo">02min</span>
                                                  </span>
                                                  </span>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </nav>
                    </aside>
                    <div className="task-body__wrapper">
                        <section className="class-notes">
                            <div className="class-notes-content">
                                <h2 className="class-notes-title">Meu caderno do curso (beta)</h2>
                                <p className="class-notes-description">Este é seu caderno de anotações aqui na Alura.
                                    Todo o seu
                                    conteúdo fica vísivel apenas para você. Próximos passos para essa funcionalidade no
                                    nosso<a
                                        href="https://suporte.alura.com.br/article/308-meu-caderno-como-funciona"
                                        className="class-notes-faq-link">FAQ</a></p>
                                <textarea name="text" id="courseNotebook-text" className="class-notes-text" cols="30"
                                          rows="10"
                                          maxLength="60000"></textarea>
                                <div className="class-notes-save-wrapper">
            <span>
               <p className="class-notes-saved-text" aria-hidden="true">Notas salvas</p>
               <p className="class-notes-limit-text" aria-hidden="true">Não foi possível salvar! Limite de caracteres atingido ()!</p>
            </span>
                                    <span className="class-notes-save-button-wrapper">
            <button className="class-notes-save-button" data-save-text="Salvar caderno" data-saving-text="Salvando">
            Salvar caderno</button>
            </span>
                                </div>
                                <button className="class-notes-close-button"></button>
                            </div>
                        </section>
                        <main className="task-body-main container" data-should-warn="false">
                            <section className="video" id="task-content">
                                <div className="container theater-mode">
                                    <div className="video settings">
                                        <button type="button" className="settings-button" aria-label="Configurações">
                                            <svg className="settings-button-icon">

                                            </svg>
                                        </button>
                                        <div className="settings-box">
                                            <span className="settings-box-title"></span>
                                            <ul className="settings-box-list">
                                                <li className="settings-box-item settings-box-item-darkmode">
                                                    <button className="dark-mode-action">
                                                        Modo noturno
                                                    </button>
                                                </li>
                                                <li className="settings-box-item settings-box-item-player">
                                                    <a className="video-problems" href="/video/diagnostic?taskId=34189"
                                                       target="_blank">
                                                        Problemas com o vídeo?
                                                        <span hidden="">indisponível</span>
                                                    </a>
                                                </li>
                                                <li className="settings-box-item settings-box-item-suggestion"><a
                                                    href="/suggestions/new/criacao-de-jogos-com-unity-3/34189/question">Sugerir
                                                    alteração</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <iframe width="100%" height="720px" src={modulo.aulaDto[0].urlVideo}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    <section id="transcription"
                                             className="video-transcription video-transcription--inactive transcription-toggle">
                                        <h2 className="video-transcription-title">Transcrição</h2>
                                        <div className="formattedText" data-external-links="">
                                            <p>{modulo.aulaDto[0].transcricao}</p>
                                        </div>
                                    </section>
                                </div>
                            </section>
                            <button className="video-transcription-button transcription-toggle" aria-hidden="true">
            <span className="video-transcription-button-text">
            continuar lendo</span>
                            </button>
                            <section className="task-actions">
                                {
                                    verifica !== false ?
                                        <div className="task-body-header-actions">
                                            <a href={"/aula_detalhe=" + verifica} aria-hidden="true"
                                               className="task-actions-button task-body-actions-button task-actions-button-next bootcamp-next-button bootcamp-primary-button-theme"
                                            >Próxima Atividade</a>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </section>
                        </main>
                    </div>
                </section>);
            } catch (e) {
                return (<div></div>)
            }
        }
        else{
            window.location.href = '/signin'; //manda para a rota home
        }
    }

    return(
        body()
    );
}
export default ModuloDetalhe;