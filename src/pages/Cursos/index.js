import React, {useState} from 'react';
import {getAllCursos} from '../../helpers/EasyLearnApi';

const Cursos = () => {

    const [allCursos, setAllCursos] = useState([]);

    getAllCursos().then(function(result) {
        return setAllCursos(result);
    })

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
                    {
                            allCursos.map((value,index)=>{
                                return (
                                    <li className="card-list__item" data-course-name={value.nome}
                                        data-started-at="" data-finished-at="">
                                        <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                            <a className="course-card__course-link " data-recommendationId="" data-courseid=""
                                               data-recommendationsource="" href={"curso/detalhe/".concat(value.uuid)}></a>
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
                                );
                            })
                    }
                </ul>
            </div>
        </div>
    );
}
export default Cursos;