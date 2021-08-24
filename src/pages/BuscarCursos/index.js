import React, {useState} from 'react';

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

    const [mobile, setMobile] = useState('');
    const [programacao, setProgramacao] = useState('');
    const [frontEnd, setFrontEnd] = useState('');
    const [devOps, setDevOps] = useState('');
    const [uxDesign, setUxDesign] = useState('');
    const [dataScience, setDataScience] = useState('');
    const [inovacaoGestao, setInovacaoGestao] = useState('');
    const [outros, setOutros] = useState('');
    const [cursos, setCursos] = useState([]);
    const [checked, setChecked] = useState('');

    const json = [{
        "nome"   : "Curso 1",
        "descricao" : "Curso 1: Parte 1",
        "imagem":"https://www.alura.com.br/assets/api/cursos/abap.svg",
        "rota":"curso-1",
        "categoria":"mobile"
    },
        {
            "nome"   : "Curso 2",
            "descricao" : "Curso 2: Parte 2",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-persistencia.svg",
            "rota":"curso-2",
            "categoria":"mobile"
        },
        {
            "nome"   : "Curso 3",
            "descricao" : "Curso 3: Parte 3",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-relatorios-alv-sap.svg",
            "rota":"curso-3",
            "categoria":"front-end"
        },
        {
            "nome"   : "Curso 4",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4",
            "categoria":"inovacao-gestao"
        },
        {
            "nome"   : "Curso 5",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4",
            "categoria":"inovacao-gestao"
        },
        {
            "nome"   : "Curso 3",
            "descricao" : "Curso 3: Parte 3",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-relatorios-alv-sap.svg",
            "rota":"curso-3",
            "categoria":"front-end"
        },
        {
            "nome"   : "Curso 4",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4",
            "categoria":"inovacao-gestao"
        },
        {
            "nome"   : "Curso 5",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4",
            "categoria":"inovacao-gestao"
        },
        {
            "nome"   : "Curso 3",
            "descricao" : "Curso 3: Parte 3",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-relatorios-alv-sap.svg",
            "rota":"curso-3",
            "categoria":"front-end"
        },
        {
            "nome"   : "Curso 4",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4",
            "categoria":"inovacao-gestao"
        },
        {
            "nome"   : "Curso 5",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4",
            "categoria":"inovacao-gestao"
        },
        {
            "nome"   : "Curso 3",
            "descricao" : "Curso 3: Parte 3",
            "imagem":"https://www.alura.com.br/assets/api/cursos/abap-relatorios-alv-sap.svg",
            "rota":"curso-3",
            "categoria":"front-end"
        },
        {
            "nome"   : "Curso 4",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4",
            "categoria":"inovacao-gestao"
        },
        {
            "nome"   : "Curso 5",
            "descricao" : "Curso 4: Parte 4",
            "imagem":"https://www.alura.com.br/assets/api/cursos/acessibilidade-ux.svg",
            "rota":"curso-4",
            "categoria":"inovacao-gestao"
        }
    ];

    async function handleClick({ target }) {
        setChecked(target.checked);
    }

    async function limparArray(e) {
        e.preventDefault()
        setCursos([]);
        setMobile('');
        setProgramacao('');
        setFrontEnd('');
        setDevOps('');
        setUxDesign('');
        setDataScience('');
        setInovacaoGestao('');
        setOutros('');
    }

    async function findCursoByCategoria(e){
        e.preventDefault();
        const cursoSalvos = [];

        for (let i=0;i<json.length;i++){
            if (json[i].categoria === mobile || json[i].categoria === programacao || json[i].categoria === frontEnd || json[i].categoria === devOps || json[i].categoria === uxDesign ||
                json[i].categoria === dataScience || json[i].categoria === inovacaoGestao || json[i].categoria === outros){
                cursoSalvos.push(json[i]);
            }
        }
        setCursos(cursoSalvos);
    }

    const result = json.find( fruit => fruit.nome === query );
    const possueValorArray = result !== undefined;
    const queryNotEmpty = query !== '';


    return(
        <div>
            <section className="banner bootcamp-banner-background-theme">
                <div className="container_1">
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
                                <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="mobile" onClick={handleClick} onChange={e=>setMobile(e.target.value)}/>
                                <span className="busca--filtro--nome-filtro">Mobile&nbsp;</span>
                            </li>

                            <li>
                                <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="programacao" onChange={e=>setProgramacao(e.target.value)}/>
                                <span className="busca--filtro--nome-filtro">Programação&nbsp;</span>
                            </li>

                            <li>
                                <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="front-end" onChange={e=>setFrontEnd(e.target.value)}/>
                                <span className="busca--filtro--nome-filtro">Front-end&nbsp;</span>
                            </li>

                            <li>
                                <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="devops" onChange={e=>setDevOps(e.target.value)}/>
                                <span className="busca--filtro--nome-filtro">DevOps&nbsp;</span>
                            </li>

                            <li>
                                <input hidden="" id="category-filter--4" className="filter-checkbox" type="checkbox" value="design-ux" onChange={e=>setUxDesign(e.target.value)}/>
                                <span className="busca--filtro--nome-filtro">UX &amp; Design&nbsp;</span>
                            </li>

                            <li>
                                <input hidden="" id="category-filter--5" className="filter-checkbox" type="checkbox" value="data-science" onChange={e=>setDataScience(e.target.value)}/>
                                <span className="busca--filtro--nome-filtro">Data Science&nbsp;</span>
                            </li>

                            <li>
                                <input hidden="" id="category-filter--6" className="filter-checkbox" type="checkbox" value="inovacao-gestao" onChange={e=>setInovacaoGestao(e.target.value)}/>
                                <span className="busca--filtro--nome-filtro">Inovação &amp; Gestão&nbsp;</span>
                            </li>

                            <li>
                                <input hidden="" id="category-filter--7" className="filter-checkbox" type="checkbox" value="outros" onChange={e=>setOutros(e.target.value)}/>
                                <span className="busca--filtro--nome-filtro">Outros&nbsp;</span>
                            </li>
                            <button id="busca--filtrar-resultados" aria-label="Filtrar busca">Filtrar resultados</button>
                        </ul>
                    </form>
                    <form onSubmit={limparArray}>
                        <button id="busca--filtrar-resultados" aria-label="Filtrar busca">Limpar Pesquisa</button>
                    </form>
                </div>
            </div>


            <div className="container_1">
                <ul className="card-list allCourses__card-list" id="">
                    {
                        !queryNotEmpty || result === undefined?
                            cursos.map((value,index)=>{
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
                                )})
                            :
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
                    }
                </ul>
            </div>
        </div>
    );
}
export default BuscarCursos;