import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {CursoContext} from "../../context/CursoProvider";

const Cursos = () => {

    const {cursos,retornarTodosOsCursos} = useContext(CursoContext);

    useEffect(()=>{
        retornarTodosOsCursos();
    },[])

    function retornarCursos(){
        try{
            return(
                <>
                {
                    cursos.map((value, index)=>{
                        return (
                            <li className="card-list__item" data-course-name={value.nome}
                                data-started-at="" data-finished-at="">
                                <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                    <Link className="course-card__course-link " data-recommendationId="" data-courseid=""
                                          data-recommendationsource="" to={"/curso_detalhe=".concat(value.uuid)}></Link>
                                    <div className="course-card__content-wrapper">
                                        <div className="course-card__content">
                                            <img className="course-card__icon" aria-hidden="true" alt="" src={value.imagemIcon}/>
                                                <span className="course-card__name">{value.nome}</span>
                                        </div>
                                    </div>
                                </div>
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

    return(
        <div>
            <section className="banner bootcamp-banner-background-theme">
                <div className="container">
                    <h1 className="banner-title">
                        Cursos
                    </h1>
                </div>
            </section>
            <div className="container">
                <ul className="card-list allCourses__card-list" id="">
                    {retornarCursos()}
                </ul>
            </div>
        </div>
    );
}
export default Cursos;