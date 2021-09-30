import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {CategoriaContext} from "../../context/CategoriaProvider";
import {CursoContext} from "../../context/CursoProvider";

const BuscarCursos = () => {

    const {curso,opcao,setOpcao,retornarCursoPorIdCategoria} = useContext(CategoriaContext);
    const {cursos,errorMessage,retornarCursosPorNome} = useContext(CursoContext);

    const { nome } = useParams();

    async function findCursoByCategoria(e){
        e.preventDefault()
        retornarCursoPorIdCategoria(opcao);
    }

    useEffect(()=>{
        retornarCursosPorNome(nome);
    },[])

    console.log(curso.length);
    return(
        <div>
            <div>
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            Cursos
                        </h1>
                    </div>
                </section>

                <div id="busca--filtros" >
                    <h2 className="filtros-busca--title">Filtrar por:</h2>
                    <div className="busca--filtros--wrapper">
                        <h3>Categorias</h3>
                        <form onSubmit={findCursoByCategoria}>
                            <ul id="busca--filtros--categorias" className="busca--listagem-filtros">

                                <li>
                                    <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="programacao" onChange={e=>setOpcao(1)}/>
                                    <span className="busca--filtro--nome-filtro">Programação&nbsp;</span>
                                </li>

                                <li>
                                    <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="front-end" onChange={e=>setOpcao(2)}/>
                                    <span className="busca--filtro--nome-filtro">Front-end&nbsp;</span>
                                </li>

                                <li>
                                    <input hidden="" id="category-filter--5" className="filter-checkbox" type="checkbox" value="data-science" onChange={e=>setOpcao(3)}/>
                                    <span className="busca--filtro--nome-filtro">Data Science&nbsp;</span>
                                </li>

                                <li>
                                    <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="devops" onChange={e=>setOpcao(4)}/>
                                    <span className="busca--filtro--nome-filtro">DevOps&nbsp;</span>
                                </li>

                                <li>
                                    <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="design-ux" onChange={e=>setOpcao(5)}/>
                                    <span className="busca--filtro--nome-filtro">UX &amp; Design&nbsp;</span>
                                </li>

                                <li>
                                    <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="mobile"  onChange={e=>setOpcao(6)}/>
                                    <span className="busca--filtro--nome-filtro">Mobile&nbsp;</span>
                                </li>

                                <li>
                                    <input hidden="" id="category-filter--6" className="filter-checkbox" type="checkbox" value="inovacao-gestao" onChange={e=>setOpcao(7)}/>
                                    <span className="busca--filtro--nome-filtro">Inovação &amp; Gestão&nbsp;</span>
                                </li>

                                <li>
                                    <input hidden="" id="category-filter--7" className="filter-checkbox" type="checkbox" value="outros" onChange={e=>setOpcao(8)}/>
                                    <span className="busca--filtro--nome-filtro">Outros&nbsp;</span>
                                </li>
                                <button id="busca--filtrar-resultados" aria-label="Filtrar busca">Filtrar resultados</button>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container_1">
                <ul className="card-list allCourses__card-list" id="">
                    {
                        cursos !== null?
                                cursos.map((value,index)=>{
                                    return (
                                        <li className="card-list__item" data-course-name={value.nome}
                                            data-started-at="" data-finished-at="">
                                            <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                                <a className="course-card__course-link " data-recommendationId="" data-courseid=""
                                                   data-recommendationsource="" href={"curso_detalhe=".concat(value.uuid)}></a>
                                                <div className="course-card__progress ">
                                                    <div className="course-card__bar" aria-hidden="true"></div>
                                                    <span className="course-card__number" aria-label="Progresso do curso">%</span>
                                                </div>
                                                <div className="course-card__content-wrapper">
                                                    <div className="course-card__content">
                                                        <img className="course-card__icon" aria-hidden="true" alt=""
                                                             src={value.imagemIcon}/>
                                                        <span className="course-card__name">{value.descricao}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )})
                            :
                            curso.length !== 0?
                                curso.map((value,index)=>{
                                    return (
                                        <li className="card-list__item" data-course-name={value.nome}
                                            data-started-at="" data-finished-at="">
                                            <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                                <a className="course-card__course-link " data-recommendationId="" data-courseid=""
                                                   data-recommendationsource="" href={"curso_detalhe=".concat(value.uuid)}></a>
                                                <div className="course-card__progress ">
                                                    <div className="course-card__bar" aria-hidden="true"></div>
                                                    <span className="course-card__number" aria-label="Progresso do curso">%</span>
                                                </div>
                                                <div className="course-card__content-wrapper">
                                                    <div className="course-card__content">
                                                        <img className="course-card__icon" aria-hidden="true" alt=""
                                                             src={value.imagemIcon}/>
                                                        <span className="course-card__name">{value.descricao}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )})
                            :
                            <div>Não tem nenhum cursos com a busca - {nome}</div>
                    }
                </ul>
            </div>
        </div>
    );
}
export default BuscarCursos;