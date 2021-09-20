import React, {useEffect, useState} from 'react';
import {getCursoByUuid, getModuloByUuid} from '../../helpers/EasyLearnApi';
import {useParams} from "react-router";

const CursoDetalhe = () => {

    const { id } = useParams();
    const [curso, setAllCursos] = useState([]);

   useEffect(()=>{
       getCursoByUuid(id).then(function(result) {
           return setAllCursos(result);
       })
   },[])

    console.log(curso.moduloDtoList[0].indice);

    return(
        <div className="container">
            <section className="course">
                <section className="course-header">
                    <div className="course-header-banner bootcamp-background-dark">
                        <div className="container course-header-banner-breadcrumb">
                            <a href="/category/programacao" className="course-header-banner-breadcrumb__category"
                               aria-label="Programação">
                                {curso.categoria}
                            </a>
                        </div>
                        <div className="course-header-banner__wrapper">
                            <div className="container course-header-banner-content">
                                <div className="course-header-logo-area">
                                    <div className="course-header-banner-logo">
                                        <div className="courseLogo">
                                            <img src={curso.imagemIcon} alt=""
                                                 className="courseLogo-course"/>
                                        </div>
                                    </div>
                                    <div className="hreview-aggregate">
                                        <h1 className="course-header-banner-title"
                                            aria-label="Curso de Unity 2D parte 1: Criando seu primeiro jogo 2D">
                                            Curso de <br/>
                                            <strong>{curso.nome}</strong>
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
                                                   aria-label="Carga horária: 8h">{curso.cargaHoraria}</p>
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
                                                   aria-label="Atualizado em 27/03/2020">{curso.data}</p>
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
                                    <a href="/courses/flappybirdunity1/tryToEnroll"
                                       className="course-header-button startContinue-button bootcamp-primary-button-theme"
                                       aria-label="Iniciar Curso">
                                        Iniciar Curso
                                    </a>
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
                        <div className="course-content-details course-degrees">
                            <h2 className="course-title course-content-subtitle course-degrees-title">
                                Formação com esse curso
                            </h2>
                            <a href="/formacao-jogos-unity" className="lista-guides__link">
                                <div className="course-card">
                                    <li className="course-degrees-item">
                                        <p className="course-degrees-aside-text">
                                            <img className="lista-guides__icone-formacao"
                                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/programacao.svg"/>
                                            <span className="lista-guides__nome">
                           Jogos com Unity
                           </span>
                                        </p>
                                    </li>
                                </div>
                            </a>
                        </div>
                        <div className="course-content-details">
                            <section className="course-content-instructors">
                                <h2 className="course-title course-content-subtitle bootcamp-text-color">
                                    Instrutor(a)
                                </h2>
                                <ul className="course-content-instructors-list">
                                    <li className="instructors-list-item">
                                        <div className="instructors-item-photo">
                                            <a href="/user/RicardoBugan" className="instructor-item-link">
                                                <img className="instructors-item-img"
                                                     src="https://www.gravatar.com/avatar/8c6fa3f5341d2b26a22b88871950c5ab.png?r=PG&amp;size=100x100&amp;date=2021-09-19&amp;d=https%3A%2F%2Fcursos.alura.com.br%2Fassets%2Fimages%2Fforum%2Favatar_r.png"
                                                     alt="instructor Ricardo Bugan Debs"/>
                                            </a>
                                        </div>
                                        <div className="instructor-details">
                                            <div className="instructor-item-header">
                                                <a href="/user/RicardoBugan"
                                                   className="instructor-item-link bootcamp-text-color">
                                                    <h3 className="instructor-item-name bootcamp-text-color">Ricardo Bugan
                                                        Debs
                                                    </h3>
                                                </a>
                                                <p>
                                                    <a target="_blank" rel="noopener nofollow"
                                                       className="instrutores-item-linkedin bootcamp-text-color"
                                                       href="https://www.linkedin.com/in/ricardo-bugan-b0581379/">
                                                        <img src="/assets/images/course/linkedin.svg"/> Linkedin
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <div>
                                        <p className="instructor-item-description bootcamp-text-color">Ricardo é designer de
                                            jogos, programador e instrutor. Trabalha desenvolvendo jogos desde 2012 e está
                                            sempre em busca de novas quests. Como instrutor, vê jogos como mundos interativos
                                            onde as pessoas entram para aprender.
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
                                <h2 className="course-content-calls__title bootcamp-text-color">Faça esse curso de
                                    Desenvolvimento de jogos e:
                                </h2>
                                <div className="course-content-calls__wrapper">
                                    <ul className="course-content-calls__list">
                                        <li className="course-content-calls__item bootcamp-text-color">Entenda a interface da
                                            Unity
                                        </li>
                                        <li className="course-content-calls__item bootcamp-text-color">Compreenda o processo de
                                            criação de um jogo
                                        </li>
                                        <li className="course-content-calls__item bootcamp-text-color">Saiba como aplicar física
                                            em seus jogos 2D
                                        </li>
                                        <li className="course-content-calls__item bootcamp-text-color">Utilize eventos de
                                            colisão para seu código
                                        </li>
                                        <li className="course-content-calls__item bootcamp-text-color">Crie uma interface
                                            gráfica que atualiza dinâmicamente
                                        </li>
                                        <li className="course-content-calls__item bootcamp-text-color">Entenda como é o fluxo de
                                            eventos da Unity
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="aulas" className="course-title course-content-header">
                                <h2 className="course-content-header-title bootcamp-text-color">Aulas</h2>
                            </div>
                            <ul className="courseSectionList">
                                <li className="courseSection-listItem">
                                    <div className="courseSection-listItem__wrapper">
                                        <a href="/course/flappybirdunity1/section/6040/tasks"
                                           className="courseSectionList-section">
                                            <div className="courseSectionList-sectionTitle bootcamp-text-color">
                                                Movimento do avião
                                                <object>
                                                    <a href="/course/flappybirdunity1/task/35975">
                                                        <button className="courseSectionList__firstVideo">
                                                            Ver primeiro vídeo
                                                        </button>
                                                    </a>
                                                </object>
                                            </div>
                                            <div className="courseSectionList-details">
                                                <aside className="courseSectionList-sectionProgress"
                                                       aria-label="0 exercícios feitos de 12">
                                                    <span className=""> 0</span> / 12
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
                                    <ul className="courseSectionList-ementa">
                                        <li className="courseSectionList-ementaItem">Introdução</li>
                                        <li className="courseSectionList-ementaItem">Projeto Inicial</li>
                                        <li className="courseSectionList-ementaItem">Criando o cenário</li>
                                        <li className="courseSectionList-ementaItem">Adicionando comportamentos</li>
                                        <li className="courseSectionList-ementaItem">Adicionando Colisores</li>
                                        <li className="courseSectionList-ementaItem">Entendendo colisores</li>
                                        <li className="courseSectionList-ementaItem">Iniciando seu projeto</li>
                                        <li className="courseSectionList-ementaItem">Impulsionando o avião</li>
                                        <li className="courseSectionList-ementaItem">Inputs do usuário</li>
                                        <li className="courseSectionList-ementaItem">Update e Game Loop</li>
                                        <li className="courseSectionList-ementaItem">Entendendo a física do jogo</li>
                                        <li className="courseSectionList-ementaItem">Adicionando interações</li>
                                    </ul>
                                </li>
                                <li className="courseSection-listItem">
                                    <div className="courseSection-listItem__wrapper">
                                        <a href="/course/flappybirdunity1/section/6041/tasks"
                                           className="courseSectionList-section">
                                            <div className="courseSectionList-sectionTitle bootcamp-text-color">
                                                Gerando desafios
                                            </div>
                                            <div className="courseSectionList-details">
                                                <aside className="courseSectionList-sectionProgress"
                                                       aria-label="0 exercícios feitos de 11">
                                                    <span className=""> 0</span> / 11
                                                </aside>
                                                <span className="courseSectionList-separation"></span>
                                                <span className="courseSectionList-sectionTime"
                                                      aria-label="Duração de 35 minutos">
                              35min
                              </span>
                                            </div>
                                        </a>
                                        <div className="courseSectionList-moreInfo"></div>
                                    </div>
                                    <ul className="courseSectionList-ementa">
                                        <li className="courseSectionList-ementaItem">Projeto da aula anterior</li>
                                        <li className="courseSectionList-ementaItem">Criando obstáculos</li>
                                        <li className="courseSectionList-ementaItem">Movendo obstáculos</li>
                                        <li className="courseSectionList-ementaItem">Parentesco entre objetos</li>
                                        <li className="courseSectionList-ementaItem">Movendo objetos</li>
                                        <li className="courseSectionList-ementaItem">Vetores</li>
                                        <li className="courseSectionList-ementaItem">Fazendo seus obstáculos</li>
                                        <li className="courseSectionList-ementaItem">Boas práticas de programação</li>
                                        <li className="courseSectionList-ementaItem">Atributos visíveis</li>
                                        <li className="courseSectionList-ementaItem">Gerando obstáculos infinitamente</li>
                                        <li className="courseSectionList-ementaItem">Gerador de obstáculos</li>
                                    </ul>
                                </li>
                                <li className="courseSection-listItem">
                                    <div className="courseSection-listItem__wrapper">
                                        <a href="/course/flappybirdunity1/section/6042/tasks"
                                           className="courseSectionList-section">
                                            <div className="courseSectionList-sectionTitle bootcamp-text-color">
                                                Deixando o jogo infinito
                                            </div>
                                            <div className="courseSectionList-details">
                                                <aside className="courseSectionList-sectionProgress"
                                                       aria-label="0 exercícios feitos de 12">
                                                    <span className=""> 0</span> / 12
                                                </aside>
                                                <span className="courseSectionList-separation"></span>
                                                <span className="courseSectionList-sectionTime"
                                                      aria-label="Duração de 50 minutos">
                              50min
                              </span>
                                            </div>
                                        </a>
                                        <div className="courseSectionList-moreInfo"></div>
                                    </div>
                                    <ul className="courseSectionList-ementa">
                                        <li className="courseSectionList-ementaItem">Projeto da aula anterior</li>
                                        <li className="courseSectionList-ementaItem">Piso infinito</li>
                                        <li className="courseSectionList-ementaItem">Calculando o deslocamento</li>
                                        <li className="courseSectionList-ementaItem">Efeito Parallaxe</li>
                                        <li className="courseSectionList-ementaItem">Componente carrossel</li>
                                        <li className="courseSectionList-ementaItem">Variando os obstáculos</li>
                                        <li className="courseSectionList-ementaItem">Criando desafios</li>
                                        <li className="courseSectionList-ementaItem">Controles do avião</li>
                                        <li className="courseSectionList-ementaItem">Anulando forças</li>
                                        <li className="courseSectionList-ementaItem">Melhorando nosso jogo</li>
                                        <li className="courseSectionList-ementaItem">Destruindo Obstáculos</li>
                                        <li className="courseSectionList-ementaItem">Gerenciando objetos</li>
                                    </ul>
                                </li>
                                <li className="courseSection-listItem">
                                    <div className="courseSection-listItem__wrapper">
                                        <a href="/course/flappybirdunity1/section/6043/tasks"
                                           className="courseSectionList-section">
                                            <div className="courseSectionList-sectionTitle bootcamp-text-color">
                                                Game Over
                                            </div>
                                            <div className="courseSectionList-details">
                                                <aside className="courseSectionList-sectionProgress"
                                                       aria-label="0 exercícios feitos de 9">
                                                    <span className=""> 0</span> / 9
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
                                    <ul className="courseSectionList-ementa">
                                        <li className="courseSectionList-ementaItem">Projeto da aula anterior</li>
                                        <li className="courseSectionList-ementaItem">Congelando o tempo</li>
                                        <li className="courseSectionList-ementaItem">Controlando o tempo</li>
                                        <li className="courseSectionList-ementaItem">Interface game over</li>
                                        <li className="courseSectionList-ementaItem">Parando o jogo</li>
                                        <li className="courseSectionList-ementaItem">Pensando sobre a interface</li>
                                        <li className="courseSectionList-ementaItem">Reiniciando o jogo</li>
                                        <li className="courseSectionList-ementaItem">Recriando comportamentos</li>
                                        <li className="courseSectionList-ementaItem">Utilizando botões</li>
                                    </ul>
                                </li>
                                <li className="courseSection-listItem">
                                    <div className="courseSection-listItem__wrapper">
                                        <a href="/course/flappybirdunity1/section/6044/tasks"
                                           className="courseSectionList-section">
                                            <div className="courseSectionList-sectionTitle bootcamp-text-color">
                                                Inserindo pontuação e áudio
                                            </div>
                                            <div className="courseSectionList-details">
                                                <aside className="courseSectionList-sectionProgress"
                                                       aria-label="0 exercícios feitos de 11">
                                                    <span className=""> 0</span> / 11
                                                </aside>
                                                <span className="courseSectionList-separation"></span>
                                                <span className="courseSectionList-sectionTime"
                                                      aria-label="Duração de 38 minutos">
                              38min
                              </span>
                                            </div>
                                        </a>
                                        <div className="courseSectionList-moreInfo"></div>
                                    </div>
                                    <ul className="courseSectionList-ementa">
                                        <li className="courseSectionList-ementaItem">Projeto da aula anterior</li>
                                        <li className="courseSectionList-ementaItem">Interface Pontuação</li>
                                        <li className="courseSectionList-ementaItem">Contando os pontos</li>
                                        <li className="courseSectionList-ementaItem">Adicionando desafio</li>
                                        <li className="courseSectionList-ementaItem">Adicionando áudio</li>
                                        <li className="courseSectionList-ementaItem">Colocando seu próprio áudio</li>
                                        <li className="courseSectionList-ementaItem">Conclusão</li>
                                        <li className="courseSectionList-ementaItem">Métodos de inicialização</li>
                                        <li className="courseSectionList-ementaItem">Buscando dependências</li>
                                        <li className="courseSectionList-ementaItem">Separando responsabilidades</li>
                                        <li className="courseSectionList-ementaItem">Projeto final do curso</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CursoDetalhe;