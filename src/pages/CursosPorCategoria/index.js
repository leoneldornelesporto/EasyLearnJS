import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {CursoContext} from "../../context/CursoProvider";

const CursosPorCategoria = () => {

    const { id } = useParams();
    const {cursos,retornarCursosPorIdDaCategoria} = useContext(CursoContext);

    if (cursos===null){
        retornarCursosPorIdDaCategoria(id);
    }

    console.log(cursos)

    function header(){
        if(id==='1'){
            return(
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            Programação
                        </h1>
                    </div>
                </section>
            )
        }

        if(id==='2'){
            return(
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            Front-end
                        </h1>
                    </div>
                </section>
            )
        }

        if(id==='3'){
            return(
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            Data Science
                        </h1>
                    </div>
                </section>
            )
        }

        if(id==='4'){
            return(
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            DevOps
                        </h1>
                    </div>
                </section>
            )
        }

        if(id==='5'){
            return(
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            Ux & Design
                        </h1>
                    </div>
                </section>
            )
        }

        if(id==='6'){
            return(
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            Mobile
                        </h1>
                    </div>
                </section>
            )
        }

        if(id==='7'){
            return(
                <section className="banner bootcamp-banner-background-theme">
                    <div className="container">
                        <h1 className="banner-title">
                            Inovação & Gestão
                        </h1>
                    </div>
                </section>
            )
        }
    }

    function body(){
        try{
                return (
                        <ul className="card-list allCourses__card-list" id="">
                            {
                                cursos.map((value, index)=>{
                                    return (
                                        <li className="card-list__item" data-course-name={value.nome}
                                            data-started-at="" data-finished-at="">
                                            <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                                <Link className="course-card__course-link " data-recommendationId="" data-courseid=""
                                                      data-recommendationsource="" to={"/curso_detalhe=".concat(value.uuid)}></Link>
                                                <div className="course-card__progress ">
                                                    <div className="course-card__bar" aria-hidden="true"></div>
                                                    <span className="course-card__number" aria-label="Progresso do curso">%</span>
                                                </div>
                                                <div className="course-card__content-wrapper">
                                                    <div className="course-card__content">
                                                        <img className="course-card__icon" aria-hidden="true" alt=""
                                                             src={value.imagemIcon}/>
                                                        <span className="course-card__name">{value.nome}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                );
        }catch (e) {
            return(<></>)
        }
    }

    return(
        <div>
            {header()}
            <div className="container">
                {body()}
            </div>
        </div>
    );
}

export default CursosPorCategoria;