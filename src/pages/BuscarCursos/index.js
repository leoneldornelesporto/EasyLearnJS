import React from 'react';

function GetQueryString(a)
{
    a = a || window.location.search.substr(1).split('&').concat(window.location.hash.substr(1).split("&"));

    if (typeof a === "string")
        a = a.split("#").join("&").split("&");
    if (!a) return {};

    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p = a[i].split('=');
        if (p.length !== 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

const BuscarCursos = () => {
    var query = GetQueryString()["query"];

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

    const result = json.find( fruit => fruit.nome === query );
    const possueValorArray = result !== undefined;
    const queryNotEmpty = query !== '';

    console.log("array " + possueValorArray);
    console.log("query " + queryNotEmpty);


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
                            possueValorArray === true?
                            <li className="card-list__item" data-course-name={result.nome}
                                data-started-at="" data-finished-at="">
                                <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                    <a className="course-card__course-link " data-recommendationId="" data-courseid=""
                                       data-recommendationsource="" href={"curso/detalhe/".concat(result.rota)}></a>
                                    <div className="course-card__progress ">
                                        <div className="course-card__bar" aria-hidden="true"></div>
                                        <span className="course-card__number" aria-label="Progresso do curso">%</span>
                                    </div>
                                    <div className="course-card__content-wrapper">
                                        <div className="course-card__content">
                                            <img className="course-card__icon" aria-hidden="true" alt=""
                                                 src={result.imagem}/>
                                            <span className="course-card__name">{result.descricao}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                                :
                                    <p className="search-noResult search-noResult--visible" aria-hidden="false">
                                        Nenhum resultado encontrado para <strong>{query}</strong>. Tente outra busca!
                                    </p>
                    }
                </ul>
            </div>
        </div>
    );
}
export default BuscarCursos;