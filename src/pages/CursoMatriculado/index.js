import React from 'react';

const CursosMatriculados = () => {

    return(
        <main className="myCourses">
            <div className="container">
                <h2 className="myCourses__title" id="all">Cursos finalizados</h2>
                <ul className="card-list myCourses__card-list" id="">
                    <li className="card-list__item" data-course-name="Agile Avançado: Crie modelos e descubra o Nexus"
                        data-started-at="" data-finished-at="">
                        <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                            <a className="course-card__course-link " data-recommendationid="" data-courseid=""
                               data-recommendationsource="" href="/course/agile-avancado"></a>
                            <div className="course-card__content-wrapper">
                                <div className="course-card__content">
                                    <img className="course-card__icon" aria-hidden="true" alt=""
                                         src="https://www.alura.com.br/assets/api/cursos/agile-avancado.svg"/>
                                        <span className="course-card__name">Agile Avançado: Crie modelos e descubra o Nexus</span>
                                </div>
                            </div>
                            <div className="course-card__other-links">
                                <a className="course-card__certificate bootcamp-text-color"
                                   href="/user/leonel-porto/course/agile-avancado/certificate">Certificado</a>
                            </div>
                        </div>
                    </li>
                    <li className="card-list__item"
                        data-course-name="Angular e Jasmine: Testes de unidade para sua aplicação" data-started-at=""
                        data-finished-at="">
                        <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                            <a className="course-card__course-link " data-recommendationid="" data-courseid=""
                               data-recommendationsource="" href="/course/angular-unit-test"></a>
                            <div className="course-card__content-wrapper">
                                <div className="course-card__content">
                                    <img className="course-card__icon" aria-hidden="true" alt=""
                                         src="https://www.alura.com.br/assets/api/cursos/angular-unit-test.svg"/>
                                        <span className="course-card__name">Angular e Jasmine: Testes de unidade para sua aplicação</span>
                                </div>
                            </div>
                            <div className="course-card__other-links">
                                <a className="course-card__certificate bootcamp-text-color"
                                   href="/user/leonel-porto/course/angular-unit-test/certificate">Certificado</a>
                            </div>
                        </div>
                    </li>
                    <li className="card-list__item"
                        data-course-name="Certificação Java SE 7 Programmer I: O básico de Java" data-started-at=""
                        data-finished-at="">
                        <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                            <a className="course-card__course-link " data-recommendationid="" data-courseid=""
                               data-recommendationsource="" href="/course/certificacao-java-basico"></a>
                            <div className="course-card__content-wrapper">
                                <div className="course-card__content">
                                    <img className="course-card__icon" aria-hidden="true" alt=""
                                         src="https://www.alura.com.br/assets/api/cursos/certificacao-java-basico.svg"/>
                                        <span className="course-card__name">Certificação Java SE 7 Programmer I: O básico de Java</span>
                                </div>
                            </div>
                            <div className="course-card__other-links">
                                <a className="course-card__certificate bootcamp-text-color"
                                   href="/user/leonel-porto/course/certificacao-java-basico/certificate">Certificado</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <section>
                    <div className="myCourses__paused-wrapper">
                        <h2 className="myCourses__title">Cursos que não quero mais fazer por enquanto</h2>
                        <div className="myCourses__paused-showAll"></div>
                    </div>
                    <div className="myCourses__pausedSection">
                        <ul className="card-list myCourses__card-list myCourses__paused__list" id="pausedCourses">
                            <li className="card-list__item" data-course-name="Comunicação HTTP: Flutter com web API"
                                data-started-at="" data-finished-at="">
                                <div className="course-card   bootcamp-background-dark-section">
                                    <a className="course-card__course-link " data-recommendationid="" data-courseid=""
                                       data-recommendationsource="" href="/course/flutter-comunicacao-http"></a>
                                    <div className="course-card__progress ">
                                        <div className="course-card__bar" aria-hidden="true"
                                             ></div>
                                        <span className="course-card__number" aria-label="Progresso do curso">0%</span>
                                    </div>
                                    <div className="course-card__content-wrapper">
                                        <div className="course-card__content">
                                            <img className="course-card__icon" aria-hidden="true" alt=""
                                                 src="https://www.alura.com.br/assets/api/cursos/flutter-comunicacao-http.svg"/>
                                                <span className="course-card__name">Comunicação HTTP: Flutter com web API</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default CursosMatriculados;