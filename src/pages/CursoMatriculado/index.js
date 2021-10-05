import React, {useContext, useEffect} from 'react';
import {MatriculaContext} from "../../context/MatriculaContext";
import Cookies from "js-cookie";
import {AuthUserContext} from "../../context/AuthUserProvider";
import {getAuthorization, isLogged} from "../../context/AuthHandler";
import {Link} from "react-router-dom";

const CursosMatriculados = () => {

    const {aluno,signIn,signInV1} = useContext(AuthUserContext);
    const {matriculas,cursosPausados,errorMessage,setErrorMessage,retornarTodasMatriculas,salvarMatricula,verificarMatriculaPorId,verificarMatriculaPorUuid,verificarSeEstouMatriculadoEmAlgumCursoById,verificarSePauseiAlgumCursoMatricula} = useContext(MatriculaContext);

    if(matriculas===null){
        signInV1(Cookies.get("email"), Cookies.get("senha"));
        verificarSeEstouMatriculadoEmAlgumCursoById(aluno.id, getAuthorization());
    }

    function cursosMatriculados(){
        try{
                for(let i=0;i<matriculas.length;i++){
                    return(
                        <li className="card-list__item" data-course-name={matriculas[i].nome}
                            data-started-at="" data-finished-at="">

                            <div
                                className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                <Link className="course-card__course-link "
                                      data-recommendationId=""
                                      data-courseid=""
                                      data-recommendationsource=""
                                      to={"/curso_detalhe=".concat(matriculas[i].uuid)}></Link>
                                <div className="course-card__progress ">
                                    <div className="course-card__bar"
                                         aria-hidden="true"></div>
                                    <span className="course-card__number"
                                          aria-label="Progresso do curso">%0</span>
                                </div>
                                <div className="course-card__content-wrapper">
                                    <div className="course-card__content">
                                        <img className="course-card__icon"
                                             aria-hidden="true" alt=""
                                             src={matriculas[i].imagemIcon}/>
                                        <span
                                            className="course-card__name">{matriculas[i].nome}</span>
                                    </div>

                                </div>
                            </div>
                        </li>
                    )
            }
        }
        catch (e) {
            return (<div>Vazia</div>)
        }
    }

    if(matriculas===null){
        signInV1(Cookies.get("email"), Cookies.get("senha"));
        verificarSePauseiAlgumCursoMatricula(aluno.id, getAuthorization());
    }

    function cursosPausado(){
        try{
                for(let i=0;i<cursosPausados.length;i++){
                    verificarSePauseiAlgumCursoMatricula(aluno.id, getAuthorization());
                    return(
                        <li className="card-list__item" data-course-name={cursosPausados[i].nome}
                            data-started-at="" data-finished-at="">

                            <div
                                className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                <Link className="course-card__course-link "
                                      data-recommendationId=""
                                      data-courseid=""
                                      data-recommendationsource=""
                                      to={"/curso_detalhe=".concat(cursosPausados[i].uuid)}></Link>
                                <div className="course-card__progress ">
                                    <div className="course-card__bar"
                                         aria-hidden="true"></div>
                                    <span className="course-card__number"
                                          aria-label="Progresso do curso">%0</span>
                                </div>
                                <div className="course-card__content-wrapper">
                                    <div className="course-card__content">
                                        <img className="course-card__icon"
                                             aria-hidden="true" alt=""
                                             src={cursosPausados[i].imagemIcon}/>
                                        <span
                                            className="course-card__name">{cursosPausados[i].nome}</span>
                                    </div>

                                </div>
                            </div>
                        </li>
                    )
                }
        }
        catch (e) {
            return (<div>Vazia</div>)
        }
    }

    function body() {
        if(isLogged()) {
                return (
                    <main className="myCourses">
                        <div className="container">
                            <h2 className="myCourses__title" id="all">Cursos finalizados</h2>
                            <ul className="card-list myCourses__card-list" id="">
                                {
                                    cursosMatriculados()
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
                                            cursosPausado()
                                        }
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </main>
                )
        }
        else{
            window.location.href = '/signin'; //manda para a rota home
        }
    }

    return(
        body()
    );
}

export default CursosMatriculados;