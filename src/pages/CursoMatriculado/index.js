import React, {useContext, useEffect} from 'react';
import {MatriculaContext} from "../../context/MatriculaContext";
import Cookies from "js-cookie";
import {AuthUserContext} from "../../context/AuthUserProvider";
import {getAuthorization} from "../../context/AuthHandler";
import {Link} from "react-router-dom";

const CursosMatriculados = () => {

    const {aluno,signIn,signInV1} = useContext(AuthUserContext);
    const {matriculas,cursosPausados,errorMessage,setErrorMessage,retornarTodasMatriculas,salvarMatricula,verificarMatriculaPorId,verificarMatriculaPorUuid,verificarSeEstouMatriculadoEmAlgumCursoById,verificarSePauseiAlgumCursoMatricula} = useContext(MatriculaContext);


    useEffect(()=>{
        signInV1(Cookies.get("email"),Cookies.get("senha"));
        verificarSeEstouMatriculadoEmAlgumCursoById(aluno.id, getAuthorization());
        verificarSePauseiAlgumCursoMatricula(aluno.id, getAuthorization());
        },[])

    function body() {
        try {
            return (
                <main className="myCourses">
                    <div className="container">
                        <h2 className="myCourses__title" id="all">Cursos finalizados</h2>
                        <ul className="card-list myCourses__card-list" id="">
                            {
                                matriculas.map((value, index) => {
                                    //console.log(value.cursoDto)
                                    return (
                                        <li className="card-list__item" data-course-name={value.nome}
                                            data-started-at="" data-finished-at="">
                                            <div
                                                className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                                <Link className="course-card__course-link " data-recommendationId=""
                                                      data-courseid=""
                                                      data-recommendationsource=""
                                                      to={"/curso_detalhe=".concat(value.uuid)}></Link>
                                                <div className="course-card__progress ">
                                                    <div className="course-card__bar" aria-hidden="true"></div>
                                                    <span className="course-card__number"
                                                          aria-label="Progresso do curso">%</span>
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
                                    )
                                })
                            }
                        </ul>
                        <section>
                            <div className="myCourses__paused-wrapper">
                                <h2 className="myCourses__title">Cursos que não quero mais fazer por enquanto</h2>
                                <div className="myCourses__paused-showAll"></div>
                            </div>
                            <div className="myCourses__pausedSection">
                                <ul className="card-list myCourses__card-list myCourses__paused__list"
                                    id="pausedCourses">
                                    {
                                        cursosPausados !== null?
                                        cursosPausados.map((value, index) => {
                                            //console.log(value.cursoDto)
                                            return (
                                                <li className="card-list__item" data-course-name={value.nome}
                                                    data-started-at="" data-finished-at="">
                                                    <div
                                                        className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                                        <Link className="course-card__course-link " data-recommendationId=""
                                                              data-courseid=""
                                                              data-recommendationsource=""
                                                              to={"/curso_detalhe=".concat(value.uuid)}></Link>
                                                        <div className="course-card__progress ">
                                                            <div className="course-card__bar" aria-hidden="true"></div>
                                                            <span className="course-card__number"
                                                                  aria-label="Progresso do curso">%</span>
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
                                            )
                                        })
                                            :
                                            <></>
                                    }
                                </ul>
                            </div>
                        </section>
                    </div>
                </main>
            )
        } catch (e) {
            signInV1(Cookies.get("email"),Cookies.get("senha"));
            verificarSeEstouMatriculadoEmAlgumCursoById(aluno.id, getAuthorization());
            verificarSePauseiAlgumCursoMatricula(aluno.id, getAuthorization());
            return (
                <></>
            );
        }
    }

    return(
        body()
    );
}

export default CursosMatriculados;