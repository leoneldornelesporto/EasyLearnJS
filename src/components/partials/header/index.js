import React, {useContext, useState} from 'react';
import {HeaderArea} from './styles';
import {Link} from 'react-router-dom';
import {isLogged} from "../../../context/AuthHandler";
import './style.css';
import Cookies from "js-cookie";
import {AuthUserContext} from "../../../context/AuthUserProvider";

const Header = () => {

    const {aluno,signInV1} = useContext(AuthUserContext);
    const {sigOut} = useContext(AuthUserContext);
    const [pesquisa, setPesquisa] = useState('');


    if (aluno===''){
        signInV1(Cookies.get('email'),Cookies.get('pass'))
    }

    async function signout() {
        sigOut();
        window.location.href = '/signin'; //manda para a rota home
    }

    async function handleSubmit(e){
        if(pesquisa !== ''){
        e.preventDefault()
        window.location.href = "/buscar_cursos="+pesquisa; //manda para a rota home
        }
        setPesquisa('')
    }

    function imagemAvatar() {
            if(aluno.avatar!==null) {
                return (
                        <img
                            src={aluno.avatar}
                            alt={"Foto de "+aluno.nomeCompleto}
                            className="headline-profile-avatar headline-profile-avatar"/>
                )
            }
            else{
                return (
                        <img
                            src="https://suap.ifsul.edu.br/static/comum/img/default.jpg"
                            alt={"Foto de "+aluno.nomeCompleto}
                            className="headline-profile-avatar headline-profile-avatar"/>
                )
            }
        }

        if (!isLogged()) {
            return (
                <HeaderArea>
                    <section className="headerBusca headerBusca-desktop">
                        <div className="container">
                            <a href="/cursos" aria-label="busca" className="headerBusca-icon"
                               role="button" aria-expanded="false" aria-controls="headerBusca-form">
                                <svg className="headerBusca-icon-svg">
                                    <svg width="17" height="17" viewBox="0 0 17 17" id="busca">
                                        <path
                                            d="M16.533 16.533a1.597 1.597 0 0 1-2.26 0l-2.816-2.818A7.392 7.392 0 0 1 7.45 14.9a7.45 7.45 0 1 1 7.45-7.45 7.4 7.4 0 0 1-1.186 4.007l2.818 2.818a1.596 1.596 0 0 1 0 2.257zM7.45 2.13a5.322 5.322 0 1 0 0 10.642 5.322 5.322 0 0 0 0-10.643z"></path>
                                    </svg>
                                </svg>
                            </a>
                            <form onSubmit={handleSubmit} id="headerBusca-form"
                                  className="headerBusca-form headerBusca-form--retratil"
                                  aria-hidden="true">
                                <label htmlFor="headerBusca-campoBusca">Qual curso procura?</label>
                                <input type="search" className="skipKeyPress headerBusca-form-input"
                                       id="headerBusca-campoBusca"
                                       name="query" placeholder="Digite aqui a busca" onChange={e=>setPesquisa(e.target.value)}/>
                                <button className="headerBusca-submit" type="submit">Buscar</button>
                            </form>
                        </div>
                    </section>
                    <header className="header headerDesktop bootcamp-header-dark-theme">
                        <div className="container">
                            <div className="header-logo--wrapper ">
                                <Link to="/dashboard" className="header-logo">
                                    <h3>EasyLearn</h3>
                                </Link>
                            </div>
                            <div className="headerUnlogged">
                                <div className="headerUnlogged-cta">
               <span className="headerUnlogged-cta-text bootcamp-text-color">
               Ainda não tem acesso? Estude com a gente!
               </span>

                                </div>
                                <Link className="headerUnlogged-login bootcamp-secondary-button-theme"
                                      to="/signin">
                                    Login</Link>
                            </div>
                            <Link
                                className="headerUnlogged-cta-button headerUnlogged-cta-button bootcamp-primary-button-theme"
                                to="/signup">Matricule-se</Link>
                        </div>
                    </header>
                    <div className="natural-header bootcamp-header-dark-theme">
                        <div className="header-logo--wrapper ">
                            <Link to="/dashboard" className="header-logo">
                                <h3>EASYLEARN</h3>
                            </Link>
                        </div>
                        <div className="headerUnlogged">
                            <div className="headerUnlogged-cta">
            <span className="headerUnlogged-cta-text bootcamp-text-color">
            Ainda não tem acesso? Estude com a gente!
            </span>
                                <a className="headerUnlogged-cta-button headerUnlogged-cta-button bootcamp-primary-button-theme"
                                   href="https://www.alura.com.br/planos-cursos-online">Matricule-se</a>
                            </div>
                            <Link className="headerUnlogged-login bootcamp-secondary-button-theme"
                                  to="/signin">
                                Login</Link>
                        </div>
                    </div>
                    <div className="natural-header natural-header--company">
                    </div>
                </HeaderArea>
            );
        } else {

            return (
                <HeaderArea>
                    <section className="headerBusca headerBusca-desktop">
                        <div className="container">
                            <a href="/buscar_cursos" aria-label="busca" className="headerBusca-icon"
                               role="button" aria-expanded="false" aria-controls="headerBusca-form">
                                <svg className="headerBusca-icon-svg">
                                    <svg width="17" height="17" viewBox="0 0 17 17" id="busca">
                                        <path
                                            d="M16.533 16.533a1.597 1.597 0 0 1-2.26 0l-2.816-2.818A7.392 7.392 0 0 1 7.45 14.9a7.45 7.45 0 1 1 7.45-7.45 7.4 7.4 0 0 1-1.186 4.007l2.818 2.818a1.596 1.596 0 0 1 0 2.257zM7.45 2.13a5.322 5.322 0 1 0 0 10.642 5.322 5.322 0 0 0 0-10.643z"></path>
                                    </svg>
                                </svg>
                            </a>
                            <form onSubmit={handleSubmit} id="headerBusca-form"
                                  className="headerBusca-form headerBusca-form--retratil"
                                  aria-hidden="true">
                                <label htmlFor="headerBusca-campoBusca">Qual curso procura?</label>
                                <input type="search" className="skipKeyPress headerBusca-form-input"
                                       id="headerBusca-campoBusca"
                                       name="query" placeholder="Digite aqui a busca" onChange={e=>setPesquisa(e.target.value)}/>
                                <button className="headerBusca-submit" type="submit">Buscar</button>
                            </form>
                        </div>
                    </section>
                    <header className="header headerDesktop">
                        <div className="container">
                            <div className="header-logo--wrapper ">
                                <Link to="/dashboard" className="header-logo">
                                    <h3>EASYLEARN</h3>
                                </Link>
                            </div>
                            <nav className="headerDesktop-content-menu" role="navigation" aria-label="menu principal">
                                <div className="content-menu-section content-menu-section-courses">
                                    <a role="button" tabIndex="0"
                                       className="content-menu-title content-menu-button menu-button-desktop"
                                       aria-expanded="false" aria-controls="courseList" id="courseLabel">
                                        Meu Aprendizado
                                    </a>
                                    <nav id="courseList" className="header-nav bootcamp-background-dark-section"
                                         aria-hidden="true" role="region" tabIndex="-1" aria-labelledby="courseLabel">
                                        <a href="/dashboard"
                                           className="header-nav-link header-item-link--dashboard bootcamp-text-color"
                                           tabIndex="-1">
                                            Dashboard
                                        </a>
                                        <a href="courses_mine" className="header-nav-link header-nav-link--courses"
                                           tabIndex="-1">
                                            Meus Cursos
                                        </a>
                                        <a href="/user/leonel-porto/planos-de-estudo"
                                           className="header-nav-link header-nav-link--user-guides" tabIndex="-1">
                                            Planos de Estudo
                                        </a>
                                        <a href="/course/notes" className="header-nav-link header-nav-link--user-notes"
                                           tabIndex="-1">
                                            Cadernos
                                        </a>
                                        <span className="header-nav-arrow"></span>
                                    </nav>
                                </div>
                                <div className="content-menu-section content-menu-section-contents">
                                    <a role="button" tabIndex="0"
                                       className="content-menu-title content-menu-button menu-button-desktop"
                                       aria-expanded="false" aria-controls="contentList" id="contentLabel">
                                        Conteúdo
                                    </a>
                                    <nav id="contentList" className="header-nav bootcamp-background-dark-section"
                                         aria-hidden="true" role="region" tabIndex="-1" aria-labelledby="courseLabel">
                                        <a href="/cursos" className="header-nav-link header-item-link--degrees"
                                           tabIndex="-1">
                                            Cursos
                                        </a>
                                        <a href="/formacoes" className="header-nav-link header-item-link--degrees"
                                           tabIndex="-1">
                                            Formações
                                        </a>

                                        {
                                            aluno.professor === true?
                                            <>
                                                <a href="/cadastrar_categoria" className="header-nav-link header-item-link--degrees"
                                                   tabIndex="-1">
                                                    Cadastrar Categoria
                                                </a>
                                                <a href="/cadastrar_formacao" className="header-nav-link header-item-link--degrees"
                                                   tabIndex="-1">
                                                    Cadastrar Formações
                                                </a>
                                                <a href="/cadastrar_curso" className="header-nav-link header-item-link--degrees"
                                                   tabIndex="-1">
                                                    Cadastrar Cursos
                                                </a>
                                                <a href="/cadastrar_modulo" className="header-nav-link header-item-link--degrees"
                                                   tabIndex="-1">
                                                    Cadastrar Modulo
                                                </a>
                                                <a href="/cadastrar_aula" className="header-nav-link header-item-link--degrees"
                                                   tabIndex="-1">
                                                    Cadastrar Aula
                                                </a>
                                            </>
                                            :
                                            <></>
                                        }
                                        <span className="header-nav-arrow"></span>
                                    </nav>
                                </div>
                                <div className="content-menu-section content-menu-section-community">
                                    <a role="button" tabIndex="0"
                                       className="content-menu-title content-menu-button menu-button-desktop"
                                       aria-expanded="false" aria-controls="communityList">
                                        Comunidade
                                    </a>
                                    <nav id="communityList" className="header-nav bootcamp-background-dark-section"
                                         aria-hidden="true" tabIndex="-1">
                                        <a href="/forum"
                                           className="header-nav-link header-item-link--forum bootcamp-text-color"
                                           tabIndex="-1">
                                            Fórum
                                        </a>
                                        <a href="/agendamento_tutoria"
                                           className="header-nav-link header-item-link--forum-interactions bootcamp-text-color"
                                           tabIndex="-1">
                                            Agendar Atendimento com o Tutor
                                        </a>
                                        <a href="/planos-estudos-publicos"
                                           className="header-nav-link header-nav-link--public-user-guides"
                                           tabIndex="-1">
                                            Planos de Estudos Públicos
                                        </a>
                                        <span className="header-nav-arrow"></span>
                                    </nav>
                                </div>
                                <div className="content-menu-section content-menu-section-news">
                                    <button aria-label="novidades" className="header-news-button notification-not-seen"
                                            aria-controls="headerNews" aria-expanded="false"></button>
                                    <div id="headerNews" className="header-news header-nav bootcamp-header-dark-theme"
                                         aria-hidden="true" tabIndex="-1" data-exists-notification="true">
                                        <span className="header-news-text bootcamp-text-color">Novidades</span>
                                        <ul className="header-news-list">
                                            <li className="news__item header-news-item--highlighted">
                                                <a className="header-news-item-link news__link"
                                                   href="https://cursos.alura.com.br/scubadev-primeiro-emprego-em-tech-depois-dos-30-dev-no-magalu-taiane-de-souza-taveira-a1119"
                                                   target="" tabIndex="-1">
                                                    <img className="news__icon"
                                                         src="https://cursos.alura.com.br/assets/images/learningGuide/learningContentIcons/step-scuba-dev.svg"
                                                         alt="Ícone de Primeiro emprego em tech depois dos 30: dev no Magalu – Taiane de Souza Taveira"/>
                                                    <div className="news__information">
                                                        <span className="news__kind news__kind-course">Podcast</span>
                                                        <h4 className="news__name bootcamp-text-color-gray">Primeiro
                                                            emprego
                                                            em tech depois dos 30: dev no Magalu – Taiane de Souza
                                                            Taveira</h4>
                                                        <span className="news__publishedDate bootcamp-text-color-gray">2 dias atrás</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="news__item header-news-item--highlighted">
                                                <a className="header-news-item-link news__link"
                                                   href="https://jovemnerd.com.br/nerdcast/nerdtech/game-dev-por-tras-do-codigo/?utm_source=gnarus&amp;utm_medium=timeline"
                                                   target="_blank" tabIndex="-1">
                                                    <img className="news__icon"
                                                         src="https://cursos.alura.com.br/assets/images/learningGuide/learningContentIcons/step-podcast.svg"
                                                         alt="Ícone de NerdTech 67 - Game DEV: Por trás do código"/>
                                                    <div className="news__information">
                                                        <span className="news__kind ">Podcast</span>
                                                        <h4 className="news__name bootcamp-text-color-gray">NerdTech 67
                                                            -
                                                            Game DEV: Por trás do código</h4>
                                                        <span className="news__publishedDate bootcamp-text-color-gray">2 dias atrás</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="news__item header-news-item--highlighted">
                                                <a className="header-news-item-link news__link"
                                                   href="https://cursos.alura.com.br/hipsterstech-aprendizado-continuo-e-universidade-corporativa-hipsters-deep-dive-008-a1117"
                                                   target="" tabIndex="-1">
                                                    <img className="news__icon"
                                                         src="https://cursos.alura.com.br/assets/images/learningGuide/learningContentIcons/step-hipsters.svg"
                                                         alt="Ícone de Aprendizado contínuo e universidade corporativa – Hipsters Deep Dive #008"/>
                                                    <div className="news__information">
                                                        <span className="news__kind news__kind-course">Podcast</span>
                                                        <h4 className="news__name bootcamp-text-color-gray">Aprendizado
                                                            contínuo e universidade corporativa – Hipsters Deep Dive
                                                            #008</h4>
                                                        <span className="news__publishedDate bootcamp-text-color-gray">2 dias atrás</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="news__item header-news-item--highlighted">
                                                <a className="header-news-item-link news__link"
                                                   href="/formacao-desenvolvimento-carreira-ux" target="" tabIndex="-1">
                                                    <img className="news__icon"
                                                         src="https://www.alura.com.br/assets/api/formacoes/categorias/design-ux.svg"
                                                         alt="Ícone de Desenvolvimento de Carreira em UX"/>
                                                    <div className="news__information">
                                                        <span className="news__kind news__kind-course">Formação</span>
                                                        <h4 className="news__name bootcamp-text-color-gray">Desenvolvimento
                                                            de Carreira em UX</h4>
                                                        <span className="news__publishedDate bootcamp-text-color-gray">3 dias atrás</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="news__item header-news-item--highlighted">
                                                <a className="header-news-item-link news__link"
                                                   href="https://www.alura.com.br/assets/api/formacoes/categorias/design-ux.svg"
                                                   target=""
                                                   tabIndex="-1">
                                                    <img className="news__icon"
                                                         src="https://www.alura.com.br/assets/api/cursos/kotlin-spring-seguranca-infraestrutura.svg"
                                                         alt="Ícone de Kotlin e Spring: Segurança e infraestrutura"/>
                                                    <div className="news__information">
                                                        <span className="news__kind news__kind-course">Curso</span>
                                                        <h4 className="news__name bootcamp-text-color-gray">Kotlin e
                                                            Spring:
                                                            Segurança e infraestrutura</h4>
                                                        <span className="news__publishedDate bootcamp-text-color-gray">3 dias atrás</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <a className="header-news-text news__more" href="/explore" tabIndex="-1">Ver
                                            todas</a>
                                    </div>
                                </div>

                                <div className="content-menu-section content-menu-section-profile ">
                                    <a role="button" tabIndex="0" aria-label="minha conta"
                                       className="content-menu-button menu-button-desktop profile-info-name"
                                       aria-expanded="true" aria-controls="profileList">

                                        {imagemAvatar()}
                                        <span className="profile-info-name-text-wrapper"><span
                                            className="screenReader-only">perfil de</span>{aluno.nomeCompleto}</span>
                                    </a>
                                    <nav id="profileList"
                                         className="header-nav header-nav-profile bootcamp-background-dark-section"
                                         aria-hidden="false" tabIndex="-1">
                                        <a className="header-nav-link header-nav-link--profile bootcamp-text-color"
                                           href="/user/leonel-porto" tabIndex="-1">
                                            Perfil &amp; Certificados
                                        </a>
                                        <a className="header-nav-link header-nav-link--profile-edit bootcamp-text-color"
                                           href="/my_profile" tabIndex="-1">
                                            Editar perfil
                                        </a>
                                        <a className="header-nav-link header-nav-link--purchases bootcamp-text-color"
                                           href="/user/payments" tabIndex="-1">
                                            Minha matrícula
                                        </a>
                                        <form onSubmit={signout}>

                                            <label type="submit"
                                                   className="header-nav-link header-nav-link--logout bootcamp-text-color"
                                                   tabIndex="-1">
                                                <button type="submit">Sair</button>
                                            </label>
                                        </form>
                                        <span className="header-nav-arrow"></span>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                    </header>
                </HeaderArea>
            );
        }
}

export default Header;