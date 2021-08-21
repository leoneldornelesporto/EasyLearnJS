import React from 'react';

const Cursos = () => {
    let json = [{
        "nome"   : "Curso 1",
        "descricao" : "Curso 1: Parte 1",
        "imagem":"https://www.alura.com.br/assets/api/cursos/abap.svg",
        "rota":"curso-1"
    },
        {
            "nome"   : "Curso 2",
            "descricao" : "Curso 2: Parte 2",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-persistencia.svg",
            "rota":"curso-2"
        },
        {
            "nome"   : "Curso 3",
            "descricao" : "Curso 3: Parte 3",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-relatorios-alv-sap.svg",
            "rota":"curso-3"
        },
        {
            "nome"   : "Curso 4",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4"
        }
    ];


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
                            json.map((value,index)=>{
                                return (
                                    <li className="card-list__item" data-course-name={value.nome}
                                        data-started-at="" data-finished-at="">
                                        <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                            <a className="course-card__course-link " data-recommendationId="" data-courseid=""
                                               data-recommendationsource="" href={"curso/detalhe/".concat(value.rota)}></a>
                                            <div className="course-card__progress ">
                                                <div className="course-card__bar" aria-hidden="true"></div>
                                                <span className="course-card__number" aria-label="Progresso do curso">%</span>
                                            </div>
                                            <div className="course-card__content-wrapper">
                                                <div className="course-card__content">
                                                    <img className="course-card__icon" aria-hidden="true" alt=""
                                                         src={value.imagem}/>
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