import React from 'react';
import {useLocation} from "react-router-dom";

function GetQueryString(a)
{
    a = a || window.location.search.substr(1).split('&').concat(window.location.hash.substr(1).split("&"));

    if (typeof a === "string")
        a = a.split("#").join("&").split("&");

    // se não há valores, retorna um objeto vazio
    if (!a) return {};

    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        // obtem array com chave/valor
        var p = a[i].split('=');

        // se não houver valor, ignora o parametro
        if (p.length != 2) continue;

        // adiciona a propriedade chave ao objeto de retorno
        // com o valor decodificado, substituindo `+` por ` `
        // para aceitar URLs codificadas com `+` ao invés de `%20`
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    // retorna o objeto criado
    return b;
}

const Cursos = () => {
    var query = GetQueryString()["query"];

    let json = [{
        "nome"   : "Curso",
        "descricao" : "Curso 1: Parte 1",
        "imagem":"https://www.alura.com.br/assets/api/cursos/abap.svg"
    },
        {
            "nome"   : "Curso 2",
            "descricao" : "Curso 2: Parte 2",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-persistencia.svg"
        },
        {
            "nome"   : "Curso 3",
            "descricao" : "Curso 3: Parte 3",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-relatorios-alv-sap.svg"
        },
        {
            "nome"   : "Curso 4",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg"
        }
    ];

    const result = json.find( fruit => fruit.nome === query );

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
                        query == '' ?
                        json.map((value,index)=>{
                        return (
                            <li className="card-list__item" data-course-name={value.nome}
                                    data-started-at="" data-finished-at="">
                                <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                    <a className="course-card__course-link " data-recommendationId="" data-courseid=""
                                       data-recommendationsource="" href="/course/abap"></a>
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
                    :
                            result != null ?
                            <li className="card-list__item" data-course-name={result.nome}
                                data-started-at="" data-finished-at="">
                                <div className="course-card  course-card--simple-card bootcamp-background-dark-section">
                                    <a className="course-card__course-link " data-recommendationId="" data-courseid=""
                                       data-recommendationsource="" href="/course/abap"></a>
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
                                <h1>Não encontrei nenhum curso ;(</h1>
                    }
                </ul>
            </div>
        </div>
    );
}
export default Cursos;