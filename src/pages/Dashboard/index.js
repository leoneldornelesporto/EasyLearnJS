import React from 'react';
import './style.css';

const Dashboard = () => {


    return(
        <section className="categoryExplorer">
            <div className="container">


                <h2 className="headline">Descubra novos cursos</h2>
                <h3 className="categoryExplorer-title categoryExplorer-title--categories"
                    id="categoryExplorer-title--categories">Categorias</h3><h3
                className="categoryExplorer-title categoryExplorer-title--careers">Formações</h3>

                <ul className="categoryExplorer-list">

                    <li className="categoryExplorer-list-category" aria-labelledby="categoryExplorer-title--categories">
                        <section className="categoryExplorer-list-category-content color-programacao">
                            <div className="categoryExplorer__icon__wrapper">
                                <svg id="icon-categorias-programacao" viewBox="-13 -10 45 40">
                                    <path d="M9.166 9.524L5.703 6.062a1.039 1.039 0 1 0-1.47 1.47l2.823 2.822-2.822 2.822a1.04 1.04 0 0 0 1.47 1.47l3.462-3.461c.227-.228.327-.533.3-.83a1.037 1.037 0 0 0-.3-.829v-.002zm6.484 3.6h-5.03a1.039 1.039 0 0 0 0 2.078h5.03a1.04 1.04 0 1 0 0-2.08v.002zm.055 4.265H2.269c-.178 0-.3-.142-.3-.32V2.336c0-.179.122-.367.3-.367h13.437a.984.984 0 1 0 0-1.969H2.27C1.003 0 0 1.069 0 2.336v14.733a2.269 2.269 0 0 0 2.269 2.288h13.437a.984.984 0 1 0 0-1.968h-.001z"></path>
                                </svg>
                            </div>
                            <div className="categoryExplorer-category-info">
                                <h3 className="categoryExplorer-category-title">Programação</h3>
                                <a className="categoryExplorer-category-link"
                                   href="https://cursos.alura.com.br/category/programacao">Ver todos os cursos</a>

                                <a className="categoryExplorer-category-link categoryExplorer-category-link--careers"
                                   href="https://cursos.alura.com.br/formacoes#programacao">Ver todas as formações</a>

                            </div>
                        </section>
                        <nav className="categoryExplorer-pages"
                             aria-label="Carreiras da categoria Programação">

                            <div className="categoryExplorer-page" data-translate="0">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-jogos-unity">Formação Jogos com
                                        Unity</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-desenvolvedor-php">Formação PHP</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-certificacao-java">Formação
                                        Certificação Java</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-raspberry-pi">Formação Raspberry
                                        Pi</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-internet-das-coisas-iot">Formação
                                        Internet das Coisas</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-certificacao-csharp">Formação
                                        Certificação C# Programming</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="1">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-integracao-aplicacoes-java">Formação
                                        Integração de Aplicações Java</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-vb-net">Formação VB.NET</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-microcontroladores-eletronica-aplicada">Formação
                                        Microcontroladores e Eletrônica Aplicada</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-wordpress">Formação Wordpress</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-arquiteto-php">Formação Arquiteto
                                        PHP</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-windows-forms-csharp">Formação Windows
                                        Forms com C#</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="2">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-kotlin">Formação Kotlin</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-node-js-12">Formação Node.js com
                                        Express</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-c-sharp-orientacao-objetos">Formação
                                        C# e orientação a objetos</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-dotnet">Formação ASP.NET Core REST
                                        APIs</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-linguagem-c-plus-plus">Formação
                                        Linguagem C++</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-programacao">Formação Iniciante em
                                        Programação</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="3">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-spring-framework">Formação Spring
                                        Framework</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-java">Formação Java e Orientação a
                                        Objetos</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-arquitetura-design-projetos-java">Formação
                                        Arquitetura e Design de Projetos Java</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-django-rest">Formação Django REST
                                        APIs</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-Python-linguagem">Formação Python</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-django">Formação Django</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="4">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-clojure">Formação Clojure</a>


                                </div>
                            </div>

                        </nav>

                        <ul className="categoryExplorer-carousel-control categoryExplorer__text-color--programacao"
                            aria-hidden="true">

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="0"
                               className="carousel-control-link control-link-active"></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="1"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="2"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="3"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="4"
                               className="carousel-control-link "></a>

                        </ul>

                    </li>

                    <li className="categoryExplorer-list-category" aria-labelledby="categoryExplorer-title--categories">
                        <section className="categoryExplorer-list-category-content color-front-end">
                            <div className="categoryExplorer__icon__wrapper">
                                <svg id="icon-categorias-programacao" viewBox="-13 -10 45 40">
                                    <path d="M9.843 1.992a.996.996 0 0 0 0-1.992h-8.67C.882 0 .563.066.38.263.184.445 0 .648 0 .938v8.67a.996.996 0 0 0 1.992 0V1.993h7.85zm9.606 7.847a.995.995 0 0 0-.996.997v7.851h-7.617a.996.996 0 1 0 0 1.992h8.67c.29 0 .492-.183.675-.38.197-.182.263-.5.263-.79v-8.673a.996.996 0 0 0-.997-.997h.002zM9.285 14.44a.88.88 0 0 0 1.757 0v-2.446l2.28 1.282a.98.98 0 0 0 .468.118.903.903 0 0 0 .777-.44.876.876 0 0 0-.314-1.2l-2.175-1.26 2.183-1.26a.878.878 0 0 0 .321-1.201c-.241-.42-.838-.564-1.258-.321l-2.28 1.282V6.473a.88.88 0 0 0-1.758 0V8.95l-2.08-1.236a.847.847 0 0 0-1.173.321.886.886 0 0 0 .338 1.201l2.187 1.26-2.176 1.259a.88.88 0 0 0 .443 1.639c.148 0 .24-.038.38-.119l2.08-1.235v2.4z"></path>
                                </svg>
                            </div>
                            <div className="categoryExplorer-category-info">
                                <h3 className="categoryExplorer-category-title">Front-end</h3>
                                <a className="categoryExplorer-category-link"
                                   href="https://cursos.alura.com.br/category/front-end">Ver todos os cursos</a>

                                <a className="categoryExplorer-category-link categoryExplorer-category-link--careers"
                                   href="https://cursos.alura.com.br/formacoes#front-end">Ver todas as formações</a>

                            </div>
                        </section>
                        <nav className="categoryExplorer-pages"
                             aria-label="Carreiras da categoria Front-end">

                            <div className="categoryExplorer-page" data-translate="0" >
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-acessibilidade-web">Formação
                                        Acessibilidade Web</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-html-e-css">Formação HTML e CSS</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-front-end">Formação Front-end</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-react-js">Formação React JS</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-angular">Formação Angular</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-vuejs">Formação Vue.js</a>


                                </div>
                            </div>

                        </nav>

                    </li>

                    <li className="categoryExplorer-list-category" aria-labelledby="categoryExplorer-title--categories">
                        <section className="categoryExplorer-list-category-content color-programacao-data-science">
                            <div className="categoryExplorer__icon__wrapper">

                            </div>
                            <div className="categoryExplorer-category-info">
                                <h3 className="categoryExplorer-category-title">Data Science</h3>
                                <a className="categoryExplorer-category-link"
                                   href="https://cursos.alura.com.br/category/data-science">Ver todos os cursos</a>

                                <a className="categoryExplorer-category-link categoryExplorer-category-link--careers"
                                   href="https://cursos.alura.com.br/formacoes#data-science">Ver todas as formações</a>

                            </div>
                        </section>
                        <nav className="categoryExplorer-pages"
                             aria-label="Carreiras da categoria Data Science">

                            <div className="categoryExplorer-page" data-translate="0">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-microsoft-sql-server-2017">Formação
                                        SQL com Microsoft SQL Server 2017</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-business-intelligence-data-warehouse">Formação
                                        BI e Data Warehouse com SQL Server e Power BI</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-oracle-mysql">Formação SQL com MySQL
                                        Server da Oracle</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-oracle-database-sql-plsql">Formação
                                        SQL com Oracle Database</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-python-data-science">Formação Python
                                        para Data Science</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-matematica-programacao-data-science">Formação
                                        Matemática para Programação e Data Science</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="1">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-datomic">Formação Datomic</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-power-bi">Formação Power BI</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-excel-vba">Formação Excel VBA</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-data-science">Formação Data
                                        Science</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-modelagem-dados">Formação Modelagem de
                                        dados</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-machine-learning">Formação Machine
                                        Learning</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="2">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-postgresql">Formação SQL com
                                        PostgreSQL</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-estatistica-python">Formação
                                        Estatística com Python</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-machine-learning-avancada">Formação
                                        Machine Learning Avançada</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-machine-learning-negocios-digitais">Formação
                                        Machine Learning para Negócios Digitais</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-deep-learning-pytorch">Formação Deep
                                        Learning com Pytorch</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-data-analysis-google-sheets">Formação
                                        Data Analysis com Google Sheets</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="3">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-google-bigquery-datastudio">Formação
                                        Google BigQuery e DataStudio</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-estatistica-r">Formação Estatística
                                        com R</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-business-intelligence-data-warehouse-pentaho">Formação
                                        BI e Data Warehouse com Pentaho</a>


                                </div>
                            </div>

                        </nav>

                        <ul className="categoryExplorer-carousel-control categoryExplorer__text-color--data-science"
                            aria-hidden="true">

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="0"
                               className="carousel-control-link control-link-active"></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="1"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="2"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="3"
                               className="carousel-control-link "></a>

                        </ul>

                    </li>

                    <li className="categoryExplorer-list-category" aria-labelledby="categoryExplorer-title--categories">
                        <section className="categoryExplorer-list-category-content color-programacao-devops">
                            <div className="categoryExplorer__icon__wrapper">

                            </div>
                            <div className="categoryExplorer-category-info">
                                <h3 className="categoryExplorer-category-title">DevOps</h3>
                                <a className="categoryExplorer-category-link"
                                   href="https://cursos.alura.com.br/category/devops">Ver todos os cursos</a>

                                <a className="categoryExplorer-category-link categoryExplorer-category-link--careers"
                                   href="https://cursos.alura.com.br/formacoes#devops">Ver todas as formações</a>

                            </div>
                        </section>
                        <nav className="categoryExplorer-pages"
                             aria-label="Carreiras da categoria DevOps">

                            <div className="categoryExplorer-page" data-translate="0">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-redes">Formação Administrador de
                                        Redes</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-seguranca-de-aplicacoes">Formação
                                        Segurança de aplicações</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-amazon-web-services">Formação Amazon
                                        Web Services</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-certificacao-lpi-linux-essentials">Formação
                                        Certificação LPI Linux Essentials</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-kafka">Formação Apache Kafka</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-owasp">Formação OWASP</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="1">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-docker-dca">Formação Certificação
                                        Docker DCA</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-aws-certified-cloud-practitioner">Formação
                                        AWS Certified Cloud Practitioner</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-aws-certified-solutions-architect-associate">Formação
                                        AWS Certified Solutions Architect - Associate</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-devops">Formação DevOps</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-certificacao-az-900-microsoft-azure-fundamentals">Formação
                                        Certificação AZ-900: Microsoft Azure Fundamentals</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-google-certified-associate-cloud-engineer">Formação
                                        Google Certified Associate Cloud Engineer</a>


                                </div>
                            </div>

                        </nav>

                        <ul className="categoryExplorer-carousel-control categoryExplorer__text-color--devops"
                            aria-hidden="true">

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="0"
                               className="carousel-control-link control-link-active"></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="1"
                               className="carousel-control-link "></a>

                        </ul>

                    </li>

                    <li className="categoryExplorer-list-category" aria-labelledby="categoryExplorer-title--categories">
                        <section className="categoryExplorer-list-category-content color-programacao-ux-design" >
                            <div className="categoryExplorer__icon__wrapper">

                            </div>
                            <div className="categoryExplorer-category-info">
                                <h3 className="categoryExplorer-category-title">UX &amp; Design</h3>
                                <a className="categoryExplorer-category-link"
                                   href="https://cursos.alura.com.br/category/design-ux">Ver todos os cursos</a>

                                <a className="categoryExplorer-category-link categoryExplorer-category-link--careers"
                                   href="https://cursos.alura.com.br/formacoes#design-ux">Ver todas as formações</a>

                            </div>
                        </section>
                        <nav className="categoryExplorer-pages"
                             aria-label="Carreiras da categoria UX &amp; Design">

                            <div className="categoryExplorer-page" data-translate="0">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-motion-design">Formação Motion
                                        Design</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-unreal-engine">Formação Unreal
                                        Engine</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-grafica-illustrator">Formação Produção
                                        Gráfica com Illustrator</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-pinturadigital-photoshop">Formação
                                        Pintura Digital no Photoshop</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-ilustra-publicitaria">Formação
                                        Ilustração Publicitária no Photoshop</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-producao-indesign">Formação
                                        InDesign</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="1">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-procucao-premiere">Formação Produção
                                        de vídeo no Premiere</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-ux-research">Formação UX Research</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-props-para-games">Formação Props para
                                        games</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-osteologia">Formação Osteologia
                                        ZBrush</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-identidadevisual">Formação Identidade
                                        Visual</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-tratamento-de-imagem">Formação
                                        Tratamento de Imagem</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="2">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-fotografia">Formação Fotografia</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-design-grafico">Formação Design
                                        Gráfico</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-producao-com-photoshop">Formação
                                        Produção com Photoshop</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-editor-video">Formação Edição de
                                        vídeo</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-desenhohumano-photoshop">Formação
                                        Desenho básico</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-hq-narrativa-sequencial">Formação HQ -
                                        Narrativa Sequencial</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="3">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-ux-research-qualitativo">Formação
                                        Pesquisas qualitativas para UX Research</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-identidade-visual-softwares-free">Formação
                                        Identidade Visual com softwares gratuitos</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-blender">Formação Blender</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-ux">Formação UX Design</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-figma">Formação Figma</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-ui-sketch">Formação Sketch</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="4">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-ui-adobe-xd">Formação Adobe XD</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-design-de-jogos">Formação Design de
                                        Jogos</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-estatistica-para-ux-research">Formação
                                        UX Research: Análise e visualização de dados</a>


                                </div>
                            </div>

                        </nav>

                        <ul className="categoryExplorer-carousel-control categoryExplorer__text-color--design-ux"
                            aria-hidden="true">

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="0"
                               className="carousel-control-link control-link-active"></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="1"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="2"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="3"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="4"
                               className="carousel-control-link "></a>

                        </ul>

                    </li>

                    <li className="categoryExplorer-list-category" aria-labelledby="categoryExplorer-title--categories">
                        <section className="categoryExplorer-list-category-content color-programacao-mobile">
                            <div className="categoryExplorer__icon__wrapper">

                            </div>
                            <div className="categoryExplorer-category-info">
                                <h3 className="categoryExplorer-category-title">Mobile</h3>
                                <a className="categoryExplorer-category-link"
                                   href="https://cursos.alura.com.br/category/mobile">Ver todos os cursos</a>

                                <a className="categoryExplorer-category-link categoryExplorer-category-link--careers"
                                   href="https://cursos.alura.com.br/formacoes#mobile">Ver todas as formações</a>

                            </div>
                        </section>
                        <nav className="categoryExplorer-pages"
                             aria-label="Carreiras da categoria Mobile">

                            <div className="categoryExplorer-page" data-translate="0">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-android">Formação Android</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-testes-automatizados-android">Formação
                                        Testes automatizados no Android</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-arquiteto-android">Formação
                                        Arquitetura Android</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-flutter">Formação Flutter</a>


                                </div>
                            </div>

                        </nav>

                    </li>

                    <li className="categoryExplorer-list-category" aria-labelledby="categoryExplorer-title--categories">
                        <section className="categoryExplorer-list-category-content color-programacao-gestao">
                            <div className="categoryExplorer__icon__wrapper">

                            </div>
                            <div className="categoryExplorer-category-info">
                                <h3 className="categoryExplorer-category-title">Inovação &amp; Gestão</h3>
                                <a className="categoryExplorer-category-link"
                                   href="https://cursos.alura.com.br/category/inovacao-gestao">Ver todos os cursos</a>

                                <a className="categoryExplorer-category-link categoryExplorer-category-link--careers"
                                   href="https://cursos.alura.com.br/formacoes#inovacao-gestao">Ver todas as
                                    formações</a>

                            </div>
                        </section>
                        <nav className="categoryExplorer-pages"
                             aria-label="Carreiras da categoria Inovação &amp; Gestão">

                            <div className="categoryExplorer-page" data-translate="0" >
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-business-agility">Formação Business
                                        Agility</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-certificacao-itil-foundation">Formação
                                        Certificação da biblioteca de infraestrutura de tecnologia da informação -
                                        Fundamentos v3</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-certificacao-cobit-5">Formação
                                        Certificação Cobit 5</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-certificacao-pmp-capm-pmi">Formação
                                        Certificação PMP e CAPM do PMI</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-vendas-de-alta-performance">Formação
                                        Vendas de Alta Performance</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-comunicacao">Formação Comunicação</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="1">
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-produtividade">Formação
                                        Produtividade</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-minha-primeira-lideranca">Formação
                                        Minha primeira liderança</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-digital-e-agile-thinking">Formação
                                        Digital &amp; Agile Thinking</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-certificacao-itil-4-foundation">Formação
                                        Certificação da biblioteca de infraestrutura de tecnologia da informação -
                                        Fundamentos v4</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-minha-carreira">Formação Minha
                                        carreira</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-gerente-agil">Formação Gerente Ágil -
                                        Metodologia Agile | Alura</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="2" >
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-social-media">Formação Social
                                        Media</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-inovacao-para-lideres">Formação
                                        Inovação para líderes</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-desenvolvimento-pessoal">Formação
                                        Desenvolvimento Pessoal</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-lider-de-si">Formação Líder de si</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-aprendizagem">Formação
                                        Aprendizagem</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-empreendedorismo-digital">Formação
                                        Empreendedorismo Digital</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="3" >
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-negociacao">Formação Negociação</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-criatividade">Formação
                                        Criatividade</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-marketing-digital">Formação Marketing
                                        Digital</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-seo">Formação SEO</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-rh-4-0-digital-agile-transforming-business-partner">Formação
                                        RH 4.0: Digital Agile &amp; Transforming Business Partner</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-comunicacao-lideres">Formação
                                        Comunicação para líderes</a>


                                </div>
                            </div>

                            <div className="categoryExplorer-page page--shrinked" data-translate="4" >
                                <div className="categoryExplorer-list-career">


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-pensamento-estrategico">Formação
                                        Pensamento estratégico</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-personal-branding">Formação Personal
                                        Branding</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-e-commerce">Formação E-commerce</a>


                                    <a className="categoryExplorer-item categoryExplorer-degree"
                                       href="https://cursos.alura.com.br/formacao-gestao-qualidade">Formação Gestão da
                                        qualidade</a>


                                </div>
                            </div>

                        </nav>

                        <ul className="categoryExplorer-carousel-control categoryExplorer__text-color--inovacao-gestao"
                            aria-hidden="true">

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="0"
                               className="carousel-control-link control-link-active"></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="1"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="2"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="3"
                               className="carousel-control-link "></a>

                            <a href="https://cursos.alura.com.br/dashboard#" data-translate="4"
                               className="carousel-control-link "></a>

                        </ul>

                    </li>

                </ul>
            </div>
        </section>
    );
}
export default Dashboard;