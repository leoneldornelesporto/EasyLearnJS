import React from 'react';
import {Link} from 'react-router-dom';
import {HeaderArea} from './styles';

import './_css/header.b07c3d9f.css';
import './_css/headerAluraDark.cce4a88f.css';
import './_css/headerDesktop.5562c855.css';
import './_css/headerUnlogged.81e3534b.css';
import './_css/search.fed4f0f3.css';

function Header() {

    return(
        <HeaderArea>
            <section className="headerBusca headerBusca-desktop">
                <div className="container">

                    <a href="https://cursos.alura.com.br/search" aria-label="busca" className="headerBusca-icon"
                       role="button" aria-expanded="false" aria-controls="headerBusca-form">
                        <svg className="headerBusca-icon-svg">
                            <svg width="17" height="17" viewBox="0 0 17 17" id="busca">
                                <path d="M16.533 16.533a1.597 1.597 0 0 1-2.26 0l-2.816-2.818A7.392 7.392 0 0 1 7.45 14.9a7.45 7.45 0 1 1 7.45-7.45 7.4 7.4 0 0 1-1.186 4.007l2.818 2.818a1.596 1.596 0 0 1 0 2.257zM7.45 2.13a5.322 5.322 0 1 0 0 10.642 5.322 5.322 0 0 0 0-10.643z"></path>
                            </svg>
                        </svg>
                    </a>
                    <form action="https://cursos.alura.com.br/search" id="headerBusca-form"
                          className="headerBusca-form headerBusca-form--retratil" aria-hidden="true">
                        <label htmlFor="headerBusca-campoBusca">Qual curso procura?</label>
                        <input type="search" className="skipKeyPress headerBusca-form-input" id="headerBusca-campoBusca"
                               name="query" placeholder="Digite aqui a busca">
                        </input>
                            <button className="headerBusca-submit" type="submit">Buscar</button>
                    </form>

                </div>
            </section>


            <header className="header headerDesktop bootcamp-header-dark-theme" >
                <div className="container">
                    <div className="header-logo--wrapper ">
                        <a href="https://cursos.alura.com.br/dashboard" className="header-logo">
                            <h3>EasyLearn</h3>
                        </a>


                    </div>


                    <div className="headerUnlogged">

                        <div className="headerUnlogged-cta">
                <span className="headerUnlogged-cta-text bootcamp-text-color">
                    Ainda não tem acesso? Estude com a gente!
                </span>
                            <a className="headerUnlogged-cta-button headerUnlogged-cta-button bootcamp-primary-button-theme"
                               href="https://www.alura.com.br/planos-cursos-online">Matricule-se</a>
                        </div>


                        <a className="headerUnlogged-login bootcamp-secondary-button-theme"
                           href="https://cursos.alura.com.br/loginForm?urlAfterLogin=/loginForm">Login</a>
                    </div>


                </div>
            </header>


            <div className="natural-header bootcamp-header-dark-theme" >

                <a href="https://cursos.alura.com.br/dashboard">

                </a>


                <div className="headerUnlogged">

                    <div className="headerUnlogged-cta">
                <span className="headerUnlogged-cta-text bootcamp-text-color">
                    Ainda não tem acesso? Estude com a gente!
                </span>
                        <a className="headerUnlogged-cta-button headerUnlogged-cta-button bootcamp-primary-button-theme"
                           href="https://www.alura.com.br/planos-cursos-online">Matricule-se</a>
                    </div>


                    <a className="headerUnlogged-login bootcamp-secondary-button-theme"
                       href="https://cursos.alura.com.br/loginForm?urlAfterLogin=/loginForm">Login</a>
                </div>


            </div>

            <div className="natural-header natural-header--company">


            </div>
        </HeaderArea>
    );
}
export default Header;