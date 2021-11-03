import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Cookies from "js-cookie";
import {isLogged} from "../../context/AuthHandler";
import {CursoContext} from "../../context/CursoProvider";
import {MatriculaContext} from "../../context/MatriculaContext";
import {AulaContext} from "../../context/AulaProvider";
import {ModuloContext} from "../../context/ModuloContext";

const ModuloDetalhe = () => {

    const {cursos,verifica,retornarCursosPorUuid,retornarModuloPorUuidCursoEIdDaAula,retornarAulaPorUuidCursoEIdAula,verificaProximo} = useContext(CursoContext);
    const {aula,idAula,retornarAulasPorId,retornarAulasPorIdModulo} = useContext(AulaContext);
    const {modulo,moduloId,retornarModuloPeloId,retornarModuloPeloIdCurso} = useContext(ModuloContext);
    const {retornaDadosDoCursoMatriculado,retornaAulasAssistida,registraAulaAssistida,resposta,cursoMatriculado,verificaConcluiAlgumCurso,porcentagemCurso,concluiuCurso,concluirCurso,verificaByIdSeMatriculeiAlgumCursos} = useContext(MatriculaContext);
    const { id } = useParams();

    try{
        if(verifica===null){
            verificaProximo(moduloId.aulaDto[0].id);
        } 
    }
    catch (e) {

    }

    if(aula === null){
        retornarAulasPorId(id);
    }

    if (cursos===null){
        retornarCursosPorUuid(Cookies.get('UuidCurso'));
    }

    if(cursos!==null){
        retornarModuloPeloIdCurso(cursos.id);
    }

    try{
        if(moduloId===null){
            retornarModuloPeloId(id);
        }

        if (verifica.status===null){
            verificaConcluiAlgumCurso(Cookies.get('idUser'), cursos.uuid);
            verificaProximo(moduloId.aulaDto[0].id);
        }
    }
    catch (e) {
        console.log(e)
    }

    useEffect(()=>{
        try {
            if(porcentagemCurso===null){
                if(Cookies.get('matricula')==='true') {
                    retornaDadosDoCursoMatriculado(Cookies.get('idUser'),Cookies.get('UuidCurso'));
                }
            }
        }
        catch (e) {
            console.log(e)
        }
    },[])

    const divStyle = {
        backgroundImage: porcentagemCurso===null?'linear-gradient(to right, #9de482, #9de482 0%, transparent 0%)':'linear-gradient(to right, #9de482, #9de482 '+porcentagemCurso+'%, transparent '+porcentagemCurso+'%)'
    };

    function verificarSeVisualizouIcon(id) {
        retornaAulasAssistida(Cookies.get('idUser'),id);

        if (resposta===false){
            return(
                <svg className="task-menu-nav-item-svg"
                     aria-label="Atividade de Vídeo concluída">
                    <path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 12h-12v-10h12v10zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-12 10v-6l5 3-5 3z"/>
                </svg>
            )
        }

        if (resposta===true){
            return(
                <svg className="task-menu-nav-item-svg task-menu-nav-item-svg--done"
                     aria-label="Atividade de Vídeo concluída">
                    <path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 12h-12v-10h12v10zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-12 10v-6l5 3-5 3z"/>
                </svg>
            )
        }
    }

    useEffect(()=>{
        try {
            if(porcentagemCurso===null){
                if(Cookies.get('matricula')==='true') {
                    retornaDadosDoCursoMatriculado(Cookies.get('idUser'),Cookies.get('UuidCurso'));
                }
            }
        }
        catch (e) {
            console.log(e)
        }
    },[])

    useEffect(()=>{
        if (Cookies.get('matricula') === 'true') {
            if (porcentagemCurso <= 100) {
                registraAulaAssistida(Cookies.get('idUser'), Cookies.get('UuidCurso'), id);
                concluirCurso(Cookies.get('idUser'), Cookies.get('UuidCurso'));
            }
        }
    },[])

    function verificarSeEstouMatriculado(){
        if(Cookies.get('matricula')==='true'){
            return(<></>)
        }
        else{
            return(
                <div className="task-body-alert">
                    <div className="container">
                        <div className="task-body-alert__alert">
                            <div className="task-body-alert__wrapper">
                                <p>Você ainda não se matriculou neste curso!</p> <p>Para registrar seu progresso no
                                curso, <a className="task-alert-link" href={"/payment="+cursos.uuid}>matricule-se
                                    agora</a>!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function body(){
        if(isLogged()) {

            try {
                return (<section className="task-body">

                    {verificarSeEstouMatriculado()}

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
                                <small>{moduloId.aulaDto[0].indice}</small>
                                <span className="task-body-header-title-text">{moduloId.aulaDto[0].titulo}</span>
                            </h1>
                            {
                                verifica !== false ?
                                    <div className="task-body-header-actions">

                                        <a href={"/aula_detalhe=" + verifica} aria-hidden="true"
                                           className="task-actions-button task-actions-button-next task-submit bootcamp-primary-button-theme"
                                        >Próxima Atividade</a>
                                    </div>
                                    :
                                    porcentagemCurso === 100?
                                        <div className="task-body-header-actions">
                                            <a href={"/certificado=" + cursos.uuid} target="_blank" aria-hidden="true"
                                               className="task-actions-button task-body-actions-button task-actions-button-next bootcamp-next-button bootcamp-primary-button-theme"
                                            >Concluir Curso</a>
                                        </div>
                                        :
                                        <></>
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
                                <a className="task-menu-header-info-title" href={"/curso_detalhe=" + cursos.uuid}
                                   title="Ir para página do curso">
                                    <img src={cursos.imagemIcon}
                                         alt="ícone Unity 2D parte 1: Criando seu primeiro jogo 2D"
                                         className="task-menu-header-info-title-icon " width="37.5px" height="37.5px"/>
                                    <h2 className="task-menu-header-info-title-text">{cursos.nome}
                                    </h2>
                                </a>

                                <span className="task-menu-header-info-progress-percentage ">{porcentagemCurso===null?0:porcentagemCurso}%</span>
                                <span className="task-menu-header-info-progress-bar"
                                      style={divStyle}></span>

                            </div>
                        </section>
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
                            <div className="dropdown">
                                <button className="mainmenubtn">Main Menu</button>
                                <div className="dropdown-child">
                                    {
                                        cursos.moduloDto.map((value, index) => {
                                            return (
                                                <a href={"modulo_detalhe="+value.id}  target="_blank">{value.titulo}</a>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </section>

                        <nav className="task-menu-nav">
                            <h2 className="task-menu-nav-title">
                                Atividades
                                <span>1 de 12</span>
                            </h2>
                            <ul className="task-menu-nav-list">

                                {
                                    moduloId.length!==undefined?
                                        moduloId[0].aulaDto.map((value, index) => {
                                                    return(
                                                        <li className={value.id===parseInt(id)?"task-menu-nav-item task-menu-nav-item--selected":"task-menu-nav-item"}>
                                                            <a href={"/aula_detalhe=" + value.id}
                                                               className="task-menu-nav-item-link task-menu-nav-item-link-VIDEO">
                                                                {verificarSeVisualizouIcon(value.id)}
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
                                                    )
                                                })
                                        :
                                        moduloId.aulaDto.map((value, index) => {
                                            return(
                                                <li className={value.id===parseInt(id)?"task-menu-nav-item task-menu-nav-item--selected":"task-menu-nav-item"}>
                                                    <a href={"/aula_detalhe=" + value.id}
                                                       className="task-menu-nav-item-link task-menu-nav-item-link-VIDEO">
                                                        {verificarSeVisualizouIcon(value.id)}
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
                                            )
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
                                    <div align="center">
                                        <iframe width="620px" height="420px%" src={moduloId.aulaDto[0].urlVideo}
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                    <section id="transcription"
                                             className="video-transcription video-transcription--inactive transcription-toggle">
                                        <h2 className="video-transcription-title">Transcrição</h2>
                                        <div className="formattedText"data-external-links="">
                                            <p>{moduloId.aulaDto[0].transcricao}</p>
                                        </div>
                                    </section>
                                </div>
                            </section>
                            <button className="video-transcription-button transcription-toggle" aria-hidden="true">
            <span className="video-transcription-button-text">
            continuar lendo</span>
                            </button>
                            <section className="task-actions">
                                <div className="container">
                                    <a href="/forum/curso-criacao-de-jogos-com-unity-3/exercicio-quantidade-de-zumbis-mortos/34189/novo"
                                       className=" task-actions-button task-actions-button-forum bootcamp-secondary-button-theme"
                                       target="_blank">
                                        Discutir no Forum
                                    </a>
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
                                </div>
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