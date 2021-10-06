import React, {useContext} from 'react';
import './style.css';
import {isLogged} from "../../context/AuthHandler";
import {FormacaoContext} from "../../context/FormacaoProvider";

const Dashboard = () => {

    const {programacao,frontend,datascience,devops,uxdesign,mobile,inovacaoGestao,retornarTodasFormacoesProgramacao,retornarTodasFormacoesFrontend,retornarTodasFormacoesDataScience,retornarTodasFormacoesDevops,retornarTodasFormacoesUxDesign, retornarTodasFormacoesMobile, retornarTodasFormacoesInovacaoGestao} = useContext(FormacaoContext);

    if(programacao===null){
        retornarTodasFormacoesProgramacao();
    }

    function formacaoProgramacao(){
        try {
            for (let i = 0; i < programacao.length; i++) {
                return (
                <a className="categoryExplorer-item categoryExplorer-degree"
                   href={"formacoes_detalhe="+programacao[i].id}>{programacao[i].titulo}</a>
                );
            }
        }
        catch (e) {
            console.log(e);
        }
    }


    if(frontend===null){
        retornarTodasFormacoesFrontend();
    }

    function formacaoFrontend(){
        try {
            for (let i = 0; i < frontend.length; i++) {
                return (
                    <a className="categoryExplorer-item categoryExplorer-degree"
                       href={"formacoes_detalhe="+frontend[i].id}>{frontend[i].titulo}</a>
                );
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    if(datascience===null){
        retornarTodasFormacoesDataScience();
    }

    function formacaoDatascience(){
        try {
            for (let i = 0; i < datascience.length; i++) {
                return (
                    <a className="categoryExplorer-item categoryExplorer-degree"
                       href={"formacoes_detalhe="+datascience[i].id}>{datascience[i].titulo}</a>
                );
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    if(devops===null){
        retornarTodasFormacoesDevops();
    }

    function formacaoDevops(){
        try {
            for (let i = 0; i < devops.length; i++) {
                return (
                    <a className="categoryExplorer-item categoryExplorer-degree"
                       href={"formacoes_detalhe="+devops[i].id}>{devops[i].titulo}</a>
                );
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    if(uxdesign===null){
        retornarTodasFormacoesUxDesign();
    }

    function formacaoUxDesign(){
        try{
            for(let i=0; i<uxdesign.length; i++){
                return(
                    <a className="categoryExplorer-item categoryExplorer-degree"
                       href={"formacoes_detalhe="+uxdesign[i].id}>{uxdesign[i].titulo}</a>
                );
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    if(mobile===null){
        retornarTodasFormacoesMobile();
    }

    function formacaoMobile(){
        try {
            for (let i = 0; i < mobile.length; i++) {
                return (
                    <a className="categoryExplorer-item categoryExplorer-degree"
                       href={"formacoes_detalhe="+mobile[i].id}>{mobile[i].titulo}</a>
                );
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    if(inovacaoGestao===null){
        retornarTodasFormacoesInovacaoGestao();
    }

    function formacaoInovacaoGestao(){
        try {
            for (let i = 0; i < inovacaoGestao.length; i++) {
                return (
                    <a className="categoryExplorer-item categoryExplorer-degree"
                       href={"formacoes_detalhe="+inovacaoGestao[i].id}>{inovacaoGestao[i].titulo}</a>
                );
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    if (isLogged()) {

        return (
            <div>
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            <a href="/dashboard" className="banner-title-link">
                                Dashboard
                            </a>
                        </h1>
                    </div>
                </section>
            <main className="dashboard">
                <section className="categoryExplorer">
                    <div className="container">
                        <h2 className="headline">Descubra novos cursos</h2>
                        <h3 className="categoryExplorer-title categoryExplorer-title--categories"
                            id="categoryExplorer-title--categories">Formação</h3>
                        <h3
                            className="categoryExplorer-title categoryExplorer-title--careers">Cursos</h3>
                        <ul className="categoryExplorer-list">
                            <li className="categoryExplorer-list-category"
                                aria-labelledby="categoryExplorer-title--categories">
                                <section className="categoryExplorer-list-category-content color-programacao">
                                    <div className="categoryExplorer__icon__wrapper">
                                        <svg id="icon-categorias-programacao" viewBox="-13 -10 45 40">
                                            <path
                                                d="M9.166 9.524L5.703 6.062a1.039 1.039 0 1 0-1.47 1.47l2.823 2.822-2.822 2.822a1.04 1.04 0 0 0 1.47 1.47l3.462-3.461c.227-.228.327-.533.3-.83a1.037 1.037 0 0 0-.3-.829v-.002zm6.484 3.6h-5.03a1.039 1.039 0 0 0 0 2.078h5.03a1.04 1.04 0 1 0 0-2.08v.002zm.055 4.265H2.269c-.178 0-.3-.142-.3-.32V2.336c0-.179.122-.367.3-.367h13.437a.984.984 0 1 0 0-1.969H2.27C1.003 0 0 1.069 0 2.336v14.733a2.269 2.269 0 0 0 2.269 2.288h13.437a.984.984 0 1 0 0-1.968h-.001z"></path>
                                        </svg>
                                    </div>
                                    <div className="categoryExplorer-category-info">
                                        <h3 className="categoryExplorer-category-title">Programação</h3>
                                        <a className="categoryExplorer-category-link"
                                           href="/cursos_por_categoria=1">Ver todos os cursos</a>
                                    </div>
                                </section>
                                <nav className="categoryExplorer-pages"
                                     aria-label="Carreiras da categoria Programação">
                                    <div className="categoryExplorer-page" data-translate="0">
                                        <div className="categoryExplorer-list-career">
                                            {formacaoProgramacao()}
                                        </div>
                                    </div>
                                </nav>
                            </li>
                            <li className="categoryExplorer-list-category"
                                aria-labelledby="categoryExplorer-title--categories">
                                <section className="categoryExplorer-list-category-content color-front-end">
                                    <div className="categoryExplorer__icon__wrapper">
                                        <svg id="icon-categorias-programacao" viewBox="-13 -10 45 40">
                                            <path
                                                d="M9.843 1.992a.996.996 0 0 0 0-1.992h-8.67C.882 0 .563.066.38.263.184.445 0 .648 0 .938v8.67a.996.996 0 0 0 1.992 0V1.993h7.85zm9.606 7.847a.995.995 0 0 0-.996.997v7.851h-7.617a.996.996 0 1 0 0 1.992h8.67c.29 0 .492-.183.675-.38.197-.182.263-.5.263-.79v-8.673a.996.996 0 0 0-.997-.997h.002zM9.285 14.44a.88.88 0 0 0 1.757 0v-2.446l2.28 1.282a.98.98 0 0 0 .468.118.903.903 0 0 0 .777-.44.876.876 0 0 0-.314-1.2l-2.175-1.26 2.183-1.26a.878.878 0 0 0 .321-1.201c-.241-.42-.838-.564-1.258-.321l-2.28 1.282V6.473a.88.88 0 0 0-1.758 0V8.95l-2.08-1.236a.847.847 0 0 0-1.173.321.886.886 0 0 0 .338 1.201l2.187 1.26-2.176 1.259a.88.88 0 0 0 .443 1.639c.148 0 .24-.038.38-.119l2.08-1.235v2.4z"></path>
                                        </svg>
                                    </div>
                                    <div className="categoryExplorer-category-info">
                                        <h3 className="categoryExplorer-category-title">Front-end</h3>
                                        <a className="categoryExplorer-category-link"
                                           href="/cursos_por_categoria=2">Ver todos os cursos</a>
                                    </div>
                                </section>
                                <nav className="categoryExplorer-pages"
                                     aria-label="Carreiras da categoria Front-end">
                                    <div className="categoryExplorer-page" data-translate="0">
                                        <div className="categoryExplorer-list-career">
                                            {formacaoFrontend()}
                                        </div>
                                    </div>
                                </nav>
                            </li>
                            <li className="categoryExplorer-list-category"
                                aria-labelledby="categoryExplorer-title--categories">
                                <section className="categoryExplorer-list-category-content color-programacao-data-science">
                                    <div className="categoryExplorer__icon__wrapper">
                                        <svg id="icon-categorias-programacao" viewBox="-12 -10 45 40">
                                            <path d="m3.84 0.523c-0.96-0.038-1.9 0.205-2.53 0.887-0.631 0.68-0.805 1.63-0.701 2.59 0.105 0.97 0.471 2 1.03 3.12 0.52 1.02 1.23  2.1 2.06 3.18-0.84 1.1-1.54 2.2-2.06 3.2-0.56 1.1-0.928 2.2-1.03 3.1-0.107 1 0.065 2 0.7 2.6 0.63 0.7 1.56 1 2.53 0.9 0.97 0 2.02-0.3 3.17-0.8 1.2-0.5 2.49-1.3 3.79-2.2 1.3 0.9 2.6 1.7 3.8 2.2s2.2 0.8 3.2 0.8c1 0.1 1.9-0.2 2.5-0.9 0.7-0.6 0.8-1.6 0.7-2.6-0.1-0.9-0.4-2-1-3.1-0.5-1-1.2-2.1-2.1-3.2 0.9-1.08 1.6-2.16 2.1-3.18 0.6-1.12 0.9-2.15 1-3.12 0.1-0.96 0-1.91-0.7-2.59-0.6-0.682-1.5-0.925-2.5-0.887-1 0.039-2 0.332-3.2 0.817-1.2 0.51-2.5 1.26-3.8 2.18-1.3-0.92-2.59-1.67-3.79-2.18-1.15-0.485-2.21-0.778-3.17-0.817zm-0.07 1.7c0.66 0.03 1.56 0.25 2.57 0.69 0.93 0.39 1.96 0.97 3.04 1.69-0.73 0.57-1.45 1.17-2.16 1.84-0.88 0.83-1.67 1.68-2.4 2.52-0.67-0.91-1.25-1.8-1.66-2.61-0.5-0.99-0.79-1.87-0.86-2.53s0.05-1.04 0.26-1.26c0.2-0.21 0.56-0.36 1.21-0.34zm14.1 0c0.6-0.02 1 0.13 1.2 0.34 0.2 0.22 0.3 0.6 0.2 1.26 0 0.66-0.3 1.54-0.8 2.53-0.4 0.81-1 1.7-1.7 2.61-0.7-0.84-1.5-1.69-2.4-2.52-0.7-0.67-1.4-1.27-2.1-1.84 1-0.72 2.1-1.3 3-1.69 1-0.44 1.9-0.66 2.6-0.69zm-7.1 3.42c0.8 0.62 1.7 1.28 2.5 2.04 0.9 0.87 1.7 1.76 2.4 2.62-0.7 0.9-1.5 1.8-2.4 2.7-0.8 0.7-1.7 1.4-2.5 2-0.8-0.6-1.61-1.3-2.42-2h-0.01c-0.92-0.9-1.73-1.8-2.47-2.7 0.74-0.86 1.55-1.75 2.48-2.62 0.81-0.76 1.62-1.42 2.42-2.04zm-1.47 2.86a0.46 0.46 0 0 0 -0.46 0.46v1.14h3.93v-0.1-1.09 0.02a0.46 0.46 0 0 0 -0.5 -0.43h-2.97zm-0.41 2v0.1h-0.05 0.05v1a0.46 0.46 0 0 0 0.46 0.5h3.02a0.46 0.46 0 0 0 0.4 -0.5v-1.1h-3.88zm-4.1 1.2c0.73 0.8 1.52 1.7 2.4 2.5a0.85 0.85 0 0 0 0.09 0.1c0.68 0.6 1.38 1.2 2.07 1.7-1.07 0.8-2.11 1.3-3.04 1.7-1.01 0.5-1.91 0.7-2.57 0.7s-1.01-0.1-1.22-0.3c-0.2-0.2-0.32-0.6-0.25-1.3 0.07-0.6 0.36-1.5 0.86-2.5 0.41-0.8 0.99-1.7 1.66-2.6zm12 0c0.7 0.9 1.3 1.8 1.7 2.6 0.5 1 0.8 1.9 0.8 2.5 0.1 0.7 0 1.1-0.2 1.3s-0.6 0.3-1.2 0.3c-0.7 0-1.6-0.2-2.6-0.7-0.9-0.4-2-0.9-3-1.7 0.7-0.5 1.3-1.1 2-1.7a0.85 0.85 0 0 0 0.1 -0.1c0.9-0.8 1.7-1.7 2.4-2.5z"></path>
                                        </svg>
                                    </div>
                                    <div className="categoryExplorer-category-info">
                                        <h3 className="categoryExplorer-category-title">Data Science</h3>
                                        <a className="categoryExplorer-category-link"
                                           href="/cursos_por_categoria=3">Ver todos os cursos</a>
                                    </div>
                                </section>
                                <nav className="categoryExplorer-pages"
                                     aria-label="Carreiras da categoria Data Science">
                                    <div className="categoryExplorer-page" data-translate="0">
                                        <div className="categoryExplorer-list-career">
                                            {formacaoDatascience()}
                                        </div>
                                    </div>
                                </nav>
                            </li>
                            <li className="categoryExplorer-list-category"
                                aria-labelledby="categoryExplorer-title--categories">
                                <section className="categoryExplorer-list-category-content color-programacao-devops">
                                    <div className="categoryExplorer__icon__wrapper">
                                        <svg id="icon-categorias-programacao" viewBox="-12 -10 45 40">
                                            <path d="M11.19 18.67c-4.108 0-7.447-3.343-7.447-7.45 0-4.108 3.34-7.45 7.447-7.45 4.108 0 7.45 3.343 7.45 7.45 0 4.108-3.342 7.45-7.448 7.45h-.002zm10.934-9.018l-1.847-.343a9.231 9.231 0 0 0-1.308-3.178l1.093-1.573a.298.298 0 0 0 .004-.422l-1.793-1.795a.298.298 0 0 0-.42 0l-1.574 1.085a9.26 9.26 0 0 0-3.177-1.32L12.759.263C12.759.1 12.625 0 12.46 0H9.92c-.164 0-.298.1-.298.264L9.28 2.122a9.24 9.24 0 0 0-3.179 1.313L4.528 2.346a.298.298 0 0 0-.422-.003L2.311 4.138a.298.298 0 0 0 0 .42l1.086 1.573a9.258 9.258 0 0 0-1.32 3.178L.25 9.653c-.164 0-.25.134-.25.298v2.539c0 .164.086.298.25.298l1.85.343a9.237 9.237 0 0 0 1.31 3.178l-1.092 1.573a.298.298 0 0 0-.005.422l1.794 1.797a.298.298 0 0 0 .421 0l1.573-1.087a9.243 9.243 0 0 0 3.178 1.32l.343 1.805c0 .164.134.227.298.227h2.54c.164 0 .298-.063.298-.227l.343-1.84a9.227 9.227 0 0 0 3.178-1.303l1.573 1.096a.298.298 0 0 0 .422.003l1.795-1.793a.298.298 0 0 0 0-.421l-1.084-1.574a9.258 9.258 0 0 0 1.321-3.177l1.82-.344c.164 0 .24-.135.24-.299V9.95c0-.164-.076-.299-.24-.299l-.002.001zM11.19 7.842a3.382 3.382 0 0 0-3.377 3.378 3.382 3.382 0 0 0 3.377 3.377 3.38 3.38 0 0 0 3.377-3.377 3.38 3.38 0 0 0-3.377-3.377zm0 4.891a1.513 1.513 0 1 1 0-3.026 1.513 1.513 0 0 1 0 3.026z"></path>
                                        </svg>
                                    </div>
                                    <div className="categoryExplorer-category-info">
                                        <h3 className="categoryExplorer-category-title">DevOps</h3>
                                        <a className="categoryExplorer-category-link"
                                           href="/cursos_por_categoria=4">Ver todos os cursos</a>
                                    </div>
                                </section>
                                <nav className="categoryExplorer-pages"
                                     aria-label="Carreiras da categoria DevOps">
                                    <div className="categoryExplorer-page" data-translate="0">
                                        <div className="categoryExplorer-list-career">
                                            {formacaoDevops()}
                                        </div>
                                    </div>
                                </nav>
                            </li>
                            <li className="categoryExplorer-list-category"
                                aria-labelledby="categoryExplorer-title--categories">
                                <section className="categoryExplorer-list-category-content color-programacao-ux-design">
                                    <div className="categoryExplorer__icon__wrapper">
                                        <svg id="icon-categorias-programacao" viewBox="-11 -10 45 40">
                                            <path d="M23.783 8.582c-.047-.086-1.146-2.111-3.123-4.155C17.984 1.662 14.97.2 11.943.2S5.902 1.662 3.226 4.427C1.248 6.47.15 8.496.103 8.582a.865.865 0 0 0-.087.572.864.864 0 0 0 .087.573c.047.085 1.145 2.11 3.123 4.154 2.676 2.765 5.69 4.227 8.717 4.227 3.026 0 6.04-1.462 8.717-4.227 1.976-2.044 3.076-4.07 3.122-4.154a.87.87 0 0 0 .087-.573.865.865 0 0 0-.087-.574v.002zm-11.84 7.787c-5.552 0-9.39-5.918-10.166-7.216.773-1.3 4.598-7.215 10.165-7.215 5.552 0 9.39 5.916 10.164 7.215-.775 1.3-4.612 7.216-10.164 7.216zm1.36-7.288c0-.416.338-.868.757-.868h1.842c-.362-1.737-1.999-3.183-3.966-3.183-2.232 0-4.041 1.85-4.041 4.082 0 2.232 1.81 4.094 4.04 4.094 1.981 0 3.628-1.517 3.973-3.255H14.06c-.418 0-.755-.452-.755-.869l-.001-.001z"></path>
                                        </svg>
                                    </div>
                                    <div className="categoryExplorer-category-info">
                                        <h3 className="categoryExplorer-category-title">UX &amp; Design</h3>
                                        <a className="categoryExplorer-category-link"
                                           href="/cursos_por_categoria=5">Ver todos os cursos</a>
                                    </div>
                                </section>
                                <nav className="categoryExplorer-pages"
                                     aria-label="Carreiras da categoria UX &amp; Design">
                                    <div className="categoryExplorer-page" data-translate="0">
                                        <div className="categoryExplorer-list-career">
                                            {formacaoUxDesign()}
                                        </div>
                                    </div>
                                </nav>
                            </li>
                            <li className="categoryExplorer-list-category"
                                aria-labelledby="categoryExplorer-title--categories">
                                <section className="categoryExplorer-list-category-content color-programacao-mobile">
                                    <div className="categoryExplorer__icon__wrapper">
                                        <svg id="icon-categorias-programacao" viewBox="-15 -10 45 40">
                                            <path d="M12.451 20.014H2.548c-.272 0-.468-.206-.468-.514v-3.728h10.84V19.5c0 .308-.197.514-.469.514zM2.548 1.99h9.903c.272 0 .468.196.468.443V14.2H2.08V2.433c0-.247.197-.443.469-.443zM15 2.462C15 1.102 13.848 0 12.427 0H2.573C1.153 0 0 1.102 0 2.462v17.076C0 20.898 1.152 22 2.573 22h9.854a2.64 2.64 0 0 0 1.82-.721A2.41 2.41 0 0 0 15 19.538V2.462zm-7.338 14.45h-.124a1.18 1.18 0 0 0-1.175 1.185 1.18 1.18 0 0 0 1.175 1.183h.124c.65 0 1.175-.53 1.175-1.183a1.18 1.18 0 0 0-1.175-1.184z"></path>
                                        </svg>
                                    </div>
                                    <div className="categoryExplorer-category-info">
                                        <h3 className="categoryExplorer-category-title">Mobile</h3>
                                        <a className="categoryExplorer-category-link"
                                           href="/cursos_por_categoria=6">Ver todos os cursos</a>
                                    </div>
                                </section>
                                <nav className="categoryExplorer-pages"
                                     aria-label="Carreiras da categoria Mobile">
                                    <div className="categoryExplorer-page" data-translate="0">
                                        <div className="categoryExplorer-list-career">
                                            {formacaoMobile()}
                                        </div>
                                    </div>
                                </nav>
                            </li>
                            <li className="categoryExplorer-list-category"
                                aria-labelledby="categoryExplorer-title--categories">
                                <section className="categoryExplorer-list-category-content color-programacao-gestao">
                                    <div className="categoryExplorer__icon__wrapper">
                                        <svg id="icon-categorias-programacao" viewBox="-1 2 45 40">
                                            <path d="M18.352 31.862h8.296a.992.992 0 1 0 0-1.983h-8.296a.992.992 0 0 0 0 1.983z M23.492 30.87V17.39a.992.992 0 0 0-1.984 0V30.87a.992.992 0 0 0 1.984 0z M27.685 17.434h-1.037a5.14 5.14 0 0 0-5.14 5.14v2.074c0 .548.444.992.992.992h1.037a5.14 5.14 0 0 0 5.14-5.14v-2.074a.992.992 0 0 0-.992-.992zm-.991 3.066a3.156 3.156 0 0 1-3.157 3.156h-.045v-1.082a3.156 3.156 0 0 1 3.156-3.156h.046V20.5z M17.36 29.445v4.536c0 .548.444.992.992.992h8.296a.992.992 0 0 0 .992-.992v-4.536a10.31 10.31 0 0 0 5.185-8.945c0-5.702-4.623-10.325-10.325-10.325-5.702 0-10.325 4.623-10.325 10.325a10.31 10.31 0 0 0 5.185 8.945zm1.984 3.545v-4.138a.992.992 0 0 0-.55-.888 8.332 8.332 0 0 1-4.636-7.464 8.342 8.342 0 1 1 16.684 0 8.332 8.332 0 0 1-4.636 7.464.992.992 0 0 0-.55.888v4.138h-6.312z"></path>
                                        </svg>
                                    </div>
                                    <div className="categoryExplorer-category-info">
                                        <h3 className="categoryExplorer-category-title">Inovação &amp; Gestão</h3>
                                        <a className="categoryExplorer-category-link"
                                           href="/cursos_por_categoria=7">Ver todos os
                                            cursos</a>
                                    </div>
                                </section>
                                <nav className="categoryExplorer-pages"
                                     aria-label="Carreiras da categoria Inovação &amp; Gestão">
                                    <div className="categoryExplorer-page" data-translate="0">
                                        <div className="categoryExplorer-list-career">
                                            {formacaoInovacaoGestao()}
                                        </div>
                                    </div>
                                </nav>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            </div>
        );
    }else{
        window.location.href = '/signin'; //manda para a rota home
    }
}
export default Dashboard;