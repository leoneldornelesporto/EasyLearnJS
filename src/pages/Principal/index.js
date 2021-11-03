import React from 'react';

const Principal = () => {

    return(
            <div className="container">
                <div className="home--background">
                    <div className="home__titles"><h1 className="home__titles__main-title">Mergulhe em Tecnologia!</h1>
                        <p className="home__titles__sub-title">Você vai estudar, praticar, discutir e se aprofundar em
                            uma plataforma que respira tecnologia.</p></div>
                </div>
                            <nav className="categories--home">
                                <div className="categories__elements--home">
                                    <div className="categories__wrapper__links--home --programacao">
                                        <a className="categories__link--home" href="/cursos-online-programacao">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__svg-wrapper--home"
                                                     >
                                                    <svg className="pagina-categoria__svg--home categories__svg--home">
                                                        <path d="M9.166 9.524L5.703 6.062a1.039 1.039 0 1 0-1.47 1.47l2.823 2.822-2.822 2.822a1.04 1.04 0 0 0 1.47 1.47l3.462-3.461c.227-.228.327-.533.3-.83a1.037 1.037 0 0 0-.3-.829v-.002zm6.484 3.6h-5.03a1.039 1.039 0 0 0 0 2.078h5.03a1.04 1.04 0 1 0 0-2.08v.002zm.055 4.265H2.269c-.178 0-.3-.142-.3-.32V2.336c0-.179.122-.367.3-.367h13.437a.984.984 0 1 0 0-1.969H2.27C1.003 0 0 1.069 0 2.336v14.733a2.269 2.269 0 0 0 2.269 2.288h13.437a.984.984 0 1 0 0-1.968h-.001z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="categories__link--home"
                                           href="#">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__texts" >
                                                    <span className="categories__link__text">Escola</span><h4
                                                    className="categories__link__category-name">Programação</h4></div>
                                            </div>
                                        </a>
                                        <nav className="categories__calls--home">
                                            <a href="#"
                                               className="categories__calls__description--home">Lógica</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Python</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">PHP</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Java</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">.NET</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Node JS</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">C</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Computação</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Jogos</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">IoT</a><span
                                            className="categories__calls__description-separator"></span>
                                            <a href="#"
                                               className="categories__calls__link-see-more--home">e mais...</a></nav>
                                    </div>
                                    <div className="categories__wrapper__links--home --front-end">
                                        <a className="categories__link--home" href="/cursos-online-programacao">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__svg-wrapper--home"
                                                >
                                                    <svg className="pagina-categoria__svg--home categories__svg--home">
                                                        <path d="M9.843 1.992a.996.996 0 0 0 0-1.992h-8.67C.882 0 .563.066.38.263.184.445 0 .648 0 .938v8.67a.996.996 0 0 0 1.992 0V1.993h7.85zm9.606 7.847a.995.995 0 0 0-.996.997v7.851h-7.617a.996.996 0 1 0 0 1.992h8.67c.29 0 .492-.183.675-.38.197-.182.263-.5.263-.79v-8.673a.996.996 0 0 0-.997-.997h.002zM9.285 14.44a.88.88 0 0 0 1.757 0v-2.446l2.28 1.282a.98.98 0 0 0 .468.118.903.903 0 0 0 .777-.44.876.876 0 0 0-.314-1.2l-2.175-1.26 2.183-1.26a.878.878 0 0 0 .321-1.201c-.241-.42-.838-.564-1.258-.321l-2.28 1.282V6.473a.88.88 0 0 0-1.758 0V8.95l-2.08-1.236a.847.847 0 0 0-1.173.321.886.886 0 0 0 .338 1.201l2.187 1.26-2.176 1.259a.88.88 0 0 0 .443 1.639c.148 0 .24-.038.38-.119l2.08-1.235v2.4z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="categories__link--home"
                                           href="#">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__texts" >
                                                    <span className="categories__link__text">Escola</span><h4
                                                    className="categories__link__category-name">Front-end</h4></div>
                                            </div>
                                        </a>
                                        <nav className="categories__calls--home">
                                            <a href="#"
                                               className="categories__calls__description--home">HTML, CSS</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">React</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Angular</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">JavaScript</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">jQuery</a><span
                                            className="categories__calls__description-separator"></span>
                                            <a href="#"
                                               className="categories__calls__link-see-more--home">e mais...</a></nav>
                                    </div>
                                    <div className="categories__wrapper__links--home --data-science"
                                         >
                                        <a className="categories__link--home" href="/cursos-online-programacao">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__svg-wrapper--home"
                                                >
                                                    <svg className="pagina-categoria__svg--home categories__svg--home">
                                                        <path d="m3.84 0.523c-0.96-0.038-1.9 0.205-2.53 0.887-0.631 0.68-0.805 1.63-0.701 2.59 0.105 0.97 0.471 2 1.03 3.12 0.52 1.02 1.23  2.1 2.06 3.18-0.84 1.1-1.54 2.2-2.06 3.2-0.56 1.1-0.928 2.2-1.03 3.1-0.107 1 0.065 2 0.7 2.6 0.63 0.7 1.56 1 2.53 0.9 0.97 0 2.02-0.3 3.17-0.8 1.2-0.5 2.49-1.3 3.79-2.2 1.3 0.9 2.6 1.7 3.8 2.2s2.2 0.8 3.2 0.8c1 0.1 1.9-0.2 2.5-0.9 0.7-0.6 0.8-1.6 0.7-2.6-0.1-0.9-0.4-2-1-3.1-0.5-1-1.2-2.1-2.1-3.2 0.9-1.08 1.6-2.16 2.1-3.18 0.6-1.12 0.9-2.15 1-3.12 0.1-0.96 0-1.91-0.7-2.59-0.6-0.682-1.5-0.925-2.5-0.887-1 0.039-2 0.332-3.2 0.817-1.2 0.51-2.5 1.26-3.8 2.18-1.3-0.92-2.59-1.67-3.79-2.18-1.15-0.485-2.21-0.778-3.17-0.817zm-0.07 1.7c0.66 0.03 1.56 0.25 2.57 0.69 0.93 0.39 1.96 0.97 3.04 1.69-0.73 0.57-1.45 1.17-2.16 1.84-0.88 0.83-1.67 1.68-2.4 2.52-0.67-0.91-1.25-1.8-1.66-2.61-0.5-0.99-0.79-1.87-0.86-2.53s0.05-1.04 0.26-1.26c0.2-0.21 0.56-0.36 1.21-0.34zm14.1 0c0.6-0.02 1 0.13 1.2 0.34 0.2 0.22 0.3 0.6 0.2 1.26 0 0.66-0.3 1.54-0.8 2.53-0.4 0.81-1 1.7-1.7 2.61-0.7-0.84-1.5-1.69-2.4-2.52-0.7-0.67-1.4-1.27-2.1-1.84 1-0.72 2.1-1.3 3-1.69 1-0.44 1.9-0.66 2.6-0.69zm-7.1 3.42c0.8 0.62 1.7 1.28 2.5 2.04 0.9 0.87 1.7 1.76 2.4 2.62-0.7 0.9-1.5 1.8-2.4 2.7-0.8 0.7-1.7 1.4-2.5 2-0.8-0.6-1.61-1.3-2.42-2h-0.01c-0.92-0.9-1.73-1.8-2.47-2.7 0.74-0.86 1.55-1.75 2.48-2.62 0.81-0.76 1.62-1.42 2.42-2.04zm-1.47 2.86a0.46 0.46 0 0 0 -0.46 0.46v1.14h3.93v-0.1-1.09 0.02a0.46 0.46 0 0 0 -0.5 -0.43h-2.97zm-0.41 2v0.1h-0.05 0.05v1a0.46 0.46 0 0 0 0.46 0.5h3.02a0.46 0.46 0 0 0 0.4 -0.5v-1.1h-3.88zm-4.1 1.2c0.73 0.8 1.52 1.7 2.4 2.5a0.85 0.85 0 0 0 0.09 0.1c0.68 0.6 1.38 1.2 2.07 1.7-1.07 0.8-2.11 1.3-3.04 1.7-1.01 0.5-1.91 0.7-2.57 0.7s-1.01-0.1-1.22-0.3c-0.2-0.2-0.32-0.6-0.25-1.3 0.07-0.6 0.36-1.5 0.86-2.5 0.41-0.8 0.99-1.7 1.66-2.6zm12 0c0.7 0.9 1.3 1.8 1.7 2.6 0.5 1 0.8 1.9 0.8 2.5 0.1 0.7 0 1.1-0.2 1.3s-0.6 0.3-1.2 0.3c-0.7 0-1.6-0.2-2.6-0.7-0.9-0.4-2-0.9-3-1.7 0.7-0.5 1.3-1.1 2-1.7a0.85 0.85 0 0 0 0.1 -0.1c0.9-0.8 1.7-1.7 2.4-2.5z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="categories__link--home"
                                           href="#">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__texts" >
                                                    <span className="categories__link__text">Escola</span><h4
                                                    className="categories__link__category-name">Data Science</h4></div>
                                            </div>
                                        </a>
                                        <nav className="categories__calls--home">
                                            <a href="#"
                                               className="categories__calls__description--home">Ciência de
                                                dados</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">BI</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">SQL e Banco de Dados</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Excel</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Machine
                                                Learning</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">NoSQL</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Estatística</a><span
                                            className="categories__calls__description-separator"></span>
                                            <a href="#"
                                               className="categories__calls__link-see-more--home">e mais...</a></nav>
                                    </div>
                                    <div className="categories__wrapper__links--home --devops"
                                       >
                                        <a className="categories__link--home" href="/cursos-online-programacao">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__svg-wrapper--home"
                                                >
                                                    <svg className="pagina-categoria__svg--home categories__svg--home">
                                                        <path d="M11.19 18.67c-4.108 0-7.447-3.343-7.447-7.45 0-4.108 3.34-7.45 7.447-7.45 4.108 0 7.45 3.343 7.45 7.45 0 4.108-3.342 7.45-7.448 7.45h-.002zm10.934-9.018l-1.847-.343a9.231 9.231 0 0 0-1.308-3.178l1.093-1.573a.298.298 0 0 0 .004-.422l-1.793-1.795a.298.298 0 0 0-.42 0l-1.574 1.085a9.26 9.26 0 0 0-3.177-1.32L12.759.263C12.759.1 12.625 0 12.46 0H9.92c-.164 0-.298.1-.298.264L9.28 2.122a9.24 9.24 0 0 0-3.179 1.313L4.528 2.346a.298.298 0 0 0-.422-.003L2.311 4.138a.298.298 0 0 0 0 .42l1.086 1.573a9.258 9.258 0 0 0-1.32 3.178L.25 9.653c-.164 0-.25.134-.25.298v2.539c0 .164.086.298.25.298l1.85.343a9.237 9.237 0 0 0 1.31 3.178l-1.092 1.573a.298.298 0 0 0-.005.422l1.794 1.797a.298.298 0 0 0 .421 0l1.573-1.087a9.243 9.243 0 0 0 3.178 1.32l.343 1.805c0 .164.134.227.298.227h2.54c.164 0 .298-.063.298-.227l.343-1.84a9.227 9.227 0 0 0 3.178-1.303l1.573 1.096a.298.298 0 0 0 .422.003l1.795-1.793a.298.298 0 0 0 0-.421l-1.084-1.574a9.258 9.258 0 0 0 1.321-3.177l1.82-.344c.164 0 .24-.135.24-.299V9.95c0-.164-.076-.299-.24-.299l-.002.001zM11.19 7.842a3.382 3.382 0 0 0-3.377 3.378 3.382 3.382 0 0 0 3.377 3.377 3.38 3.38 0 0 0 3.377-3.377 3.38 3.38 0 0 0-3.377-3.377zm0 4.891a1.513 1.513 0 1 1 0-3.026 1.513 1.513 0 0 1 0 3.026z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="categories__link--home"
                                           href="#">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__texts">
                                                    <span className="categories__link__text">Escola</span><h4
                                                    className="categories__link__category-name">DevOps</h4></div>
                                            </div>
                                        </a>
                                        <nav className="categories__calls--home">
                                            <a href="#"
                                               className="categories__calls__description--home">AWS</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Azure</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Docker</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Segurança</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">IaC</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Linux</a><span
                                            className="categories__calls__description-separator"></span>
                                            <a href="#"
                                               className="categories__calls__link-see-more--home">e mais...</a></nav>
                                    </div>
                                    <div className="categories__wrapper__links--home --design-ux"
                                         >
                                        <a className="categories__link--home" href="/cursos-online-programacao">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__svg-wrapper--home"
                                                >
                                                    <svg className="pagina-categoria__svg--home categories__svg--home">
                                                        <path d="M23.783 8.582c-.047-.086-1.146-2.111-3.123-4.155C17.984 1.662 14.97.2 11.943.2S5.902 1.662 3.226 4.427C1.248 6.47.15 8.496.103 8.582a.865.865 0 0 0-.087.572.864.864 0 0 0 .087.573c.047.085 1.145 2.11 3.123 4.154 2.676 2.765 5.69 4.227 8.717 4.227 3.026 0 6.04-1.462 8.717-4.227 1.976-2.044 3.076-4.07 3.122-4.154a.87.87 0 0 0 .087-.573.865.865 0 0 0-.087-.574v.002zm-11.84 7.787c-5.552 0-9.39-5.918-10.166-7.216.773-1.3 4.598-7.215 10.165-7.215 5.552 0 9.39 5.916 10.164 7.215-.775 1.3-4.612 7.216-10.164 7.216zm1.36-7.288c0-.416.338-.868.757-.868h1.842c-.362-1.737-1.999-3.183-3.966-3.183-2.232 0-4.041 1.85-4.041 4.082 0 2.232 1.81 4.094 4.04 4.094 1.981 0 3.628-1.517 3.973-3.255H14.06c-.418 0-.755-.452-.755-.869l-.001-.001z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="categories__link--home"
                                           href="#">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__texts" >
                                                    <span className="categories__link__text">Escola</span><h4
                                                    className="categories__link__category-name">UX &amp; Design</h4>
                                                </div>
                                            </div>
                                        </a>
                                        <nav className="categories__calls--home">
                                            <a href="#"
                                               className="categories__calls__description--home">Photoshop e
                                                Illustrator</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Usabilidade e
                                                UX</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Vídeo e Motion</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">3D</a><span
                                            className="categories__calls__description-separator"></span>
                                            <a href="#"
                                               className="categories__calls__link-see-more--home">e mais...</a></nav>
                                    </div>
                                    <div className="categories__wrapper__links--home --mobile"
                                        >
                                        <a className="categories__link--home" href="/cursos-online-programacao">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__svg-wrapper--home"
                                                >
                                                    <svg className="pagina-categoria__svg--home categories__svg--home">
                                                        <path d="M12.451 20.014H2.548c-.272 0-.468-.206-.468-.514v-3.728h10.84V19.5c0 .308-.197.514-.469.514zM2.548 1.99h9.903c.272 0 .468.196.468.443V14.2H2.08V2.433c0-.247.197-.443.469-.443zM15 2.462C15 1.102 13.848 0 12.427 0H2.573C1.153 0 0 1.102 0 2.462v17.076C0 20.898 1.152 22 2.573 22h9.854a2.64 2.64 0 0 0 1.82-.721A2.41 2.41 0 0 0 15 19.538V2.462zm-7.338 14.45h-.124a1.18 1.18 0 0 0-1.175 1.185 1.18 1.18 0 0 0 1.175 1.183h.124c.65 0 1.175-.53 1.175-1.183a1.18 1.18 0 0 0-1.175-1.184z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="categories__link--home"
                                           href="#">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__texts">
                                                    <span className="categories__link__text">Escola</span><h4
                                                    className="categories__link__category-name">Mobile</h4></div>
                                            </div>
                                        </a>
                                        <nav className="categories__calls--home">
                                            <a href="#"
                                               className="categories__calls__description--home">React Native</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Flutter</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">iOS e Swift</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Android, Kotlin</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Jogos</a><span
                                            className="categories__calls__description-separator"></span>
                                            <a href="#"
                                               className="categories__calls__link-see-more--home">e mais...</a></nav>
                                    </div>
                                    <div className="categories__wrapper__links--home --inovacao-gestao"
                                         >
                                        <a className="categories__link--home" href="/cursos-online-programacao">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__svg-wrapper--home"
                                                >
                                                    <svg className="pagina-categoria__svg--home categories__svg--home" width="100">
                                                        <path d="M15.612 38.715h13.776a1.647 1.717 0 1 0 0-3.433H15.612a1.647 1.717 0 0 0 0 3.433zm8.535-1.717V13.66a1.647 1.717 0 0 0-3.294 0v23.337a1.647 1.717 0 0 0 3.294 0zm6.963-23.261h-1.722a8.535 8.899 0 0 0-8.535 8.899v3.59c0 .949.737 1.718 1.647 1.718h1.722a8.535 8.899 0 0 0 8.535-8.899v-3.59a1.647 1.717 0 0 0-1.647-1.718zm-1.646 5.308a5.24 5.464 0 0 1-5.242 5.464h-.075v-1.873a5.24 5.464 0 0 1 5.241-5.464h.076v1.873zm-15.5 15.486v7.853c0 .949.738 1.717 1.648 1.717h13.776a1.647 1.717 0 0 0 1.647-1.717V34.53a17.12 17.85 0 0 0 8.61-15.486C39.646 9.173 31.97 1.17 22.5 1.17S5.354 9.173 5.354 19.045a17.12 17.85 0 0 0 8.61 15.486zm3.295 6.137v-7.164a1.647 1.717 0 0 0-.913-1.537 13.836 14.425 0 0 1-7.699-12.922 13.853 14.442 0 1 1 27.706 0 13.836 14.425 0 0 1-7.699 12.922 1.647 1.717 0 0 0-.913 1.537v7.164H17.259z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="categories__link--home"
                                           href="#">
                                            <div className="categories__link-wrapper--home">
                                                <div className="categories__texts" >
                                                    <span className="categories__link__text">Escola</span><h4
                                                    className="categories__link__category-name">Inovação &amp; Gestão</h4>
                                                </div>
                                            </div>
                                        </a>
                                        <nav className="categories__calls--home">
                                            <a href="#"
                                               className="categories__calls__description--home">Métodos Ágeis</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Softskills</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Liderança e
                                                Gestão</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Startups</a><span
                                            className="categories__calls__description-separator">, </span>
                                            <a href="#"
                                               className="categories__calls__description--home">Vendas</a><span
                                            className="categories__calls__description-separator"></span>
                                            <a href="#"
                                               className="categories__calls__link-see-more--home">e mais...</a></nav>
                                    </div>
                                </div>
                            </nav>
                <section className="degrees-list">
                    <div className="container --titles"><h3>Nossas Formações, Seu Guia</h3><h2>Sequências de cursos
                        organizados em Formações</h2><p>Formações com conteúdo do mercado de trabalho: sequências de
                        cursos e conteúdo para você se capacitar em tecnologia e negócios digitais.</p>

                        <div className="features__video-wrapper">
                            <div className="home-diferenciais-video">
                                <div className="home-diferenciais-video-wrapper">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Dw4wpiyPCUM"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container --items">
                        <ul className="careers__list">
                            <li className="careers__list__item --programacao ">
                                <div className="careers__list__item__title-wrapper">
                                    <div className="categories__svg-wrapper">
                                        <svg className="pagina-categoria__svg svgFill-programacao categories__svg">
                                            <path d="M9.166 9.524L5.703 6.062a1.039 1.039 0 1 0-1.47 1.47l2.823 2.822-2.822 2.822a1.04 1.04 0 0 0 1.47 1.47l3.462-3.461c.227-.228.327-.533.3-.83a1.037 1.037 0 0 0-.3-.829v-.002zm6.484 3.6h-5.03a1.039 1.039 0 0 0 0 2.078h5.03a1.04 1.04 0 1 0 0-2.08v.002zm.055 4.265H2.269c-.178 0-.3-.142-.3-.32V2.336c0-.179.122-.367.3-.367h13.437a.984.984 0 1 0 0-1.969H2.27C1.003 0 0 1.069 0 2.336v14.733a2.269 2.269 0 0 0 2.269 2.288h13.437a.984.984 0 1 0 0-1.968h-.001z"></path>
                                       </svg>
                                    </div>
                                    <h3 className="careers__list__item__title">Programação</h3></div>
                                <ul className="careers__list__item__list careers__list__item__list--formacoes">
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-arquiteto-php">
                                            Arquiteto PHP </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-arquitetura-design-projetos-java">
                                            Arquitetura e Design de Projetos Java </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-dotnet">
                                            ASP.NET Core REST APIs </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-c-sharp-orientacao-objetos">
                                            C# e orientação a objetos </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-certificacao-csharp">
                                            Certificação C# Programming </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-certificacao-java">
                                            Certificação Java </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-clojure">
                                            Clojure </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-django">
                                            Django </a></li>
                                    <li className="careers__list__item__see-more">
                                        <a href="/cursos-online-programacao"
                                           className="careers__list__item__see-more__link">ver todas</a></li>
                                </ul>
                            </li>
                            <li className="careers__list__item --front-end ">
                                <div className="careers__list__item__title-wrapper">
                                    <div className="categories__svg-wrapper">
                                        <svg className="pagina-categoria__svg svgFill-front-end categories__svg" >
                                            <path d="M9.843 1.992a.996.996 0 0 0 0-1.992h-8.67C.882 0 .563.066.38.263.184.445 0 .648 0 .938v8.67a.996.996 0 0 0 1.992 0V1.993h7.85zm9.606 7.847a.995.995 0 0 0-.996.997v7.851h-7.617a.996.996 0 1 0 0 1.992h8.67c.29 0 .492-.183.675-.38.197-.182.263-.5.263-.79v-8.673a.996.996 0 0 0-.997-.997h.002zM9.285 14.44a.88.88 0 0 0 1.757 0v-2.446l2.28 1.282a.98.98 0 0 0 .468.118.903.903 0 0 0 .777-.44.876.876 0 0 0-.314-1.2l-2.175-1.26 2.183-1.26a.878.878 0 0 0 .321-1.201c-.241-.42-.838-.564-1.258-.321l-2.28 1.282V6.473a.88.88 0 0 0-1.758 0V8.95l-2.08-1.236a.847.847 0 0 0-1.173.321.886.886 0 0 0 .338 1.201l2.187 1.26-2.176 1.259a.88.88 0 0 0 .443 1.639c.148 0 .24-.038.38-.119l2.08-1.235v2.4z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="careers__list__item__title">Front-end</h3></div>
                                <ul className="careers__list__item__list careers__list__item__list--formacoes">
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-acessibilidade-web">
                                            Acessibilidade Web </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-angular">
                                            Angular </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-front-end">
                                            Front-end </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-html-e-css">
                                            HTML e CSS </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-react-js">
                                            React JS </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-vuejs">
                                            Vue.js </a></li>
                                    <li className="careers__list__item__see-more">
                                        <a href="/cursos-online-front-end"
                                           className="careers__list__item__see-more__link">ver todas</a></li>
                                </ul>
                            </li>
                            <li className="careers__list__item --data-science ">
                                <div className="careers__list__item__title-wrapper">
                                    <div className="categories__svg-wrapper">
                                        <svg className="pagina-categoria__svg svgFill-data-science categories__svg">
                                            <path d="m3.84 0.523c-0.96-0.038-1.9 0.205-2.53 0.887-0.631 0.68-0.805 1.63-0.701 2.59 0.105 0.97 0.471 2 1.03 3.12 0.52 1.02 1.23  2.1 2.06 3.18-0.84 1.1-1.54 2.2-2.06 3.2-0.56 1.1-0.928 2.2-1.03 3.1-0.107 1 0.065 2 0.7 2.6 0.63 0.7 1.56 1 2.53 0.9 0.97 0 2.02-0.3 3.17-0.8 1.2-0.5 2.49-1.3 3.79-2.2 1.3 0.9 2.6 1.7 3.8 2.2s2.2 0.8 3.2 0.8c1 0.1 1.9-0.2 2.5-0.9 0.7-0.6 0.8-1.6 0.7-2.6-0.1-0.9-0.4-2-1-3.1-0.5-1-1.2-2.1-2.1-3.2 0.9-1.08 1.6-2.16 2.1-3.18 0.6-1.12 0.9-2.15 1-3.12 0.1-0.96 0-1.91-0.7-2.59-0.6-0.682-1.5-0.925-2.5-0.887-1 0.039-2 0.332-3.2 0.817-1.2 0.51-2.5 1.26-3.8 2.18-1.3-0.92-2.59-1.67-3.79-2.18-1.15-0.485-2.21-0.778-3.17-0.817zm-0.07 1.7c0.66 0.03 1.56 0.25 2.57 0.69 0.93 0.39 1.96 0.97 3.04 1.69-0.73 0.57-1.45 1.17-2.16 1.84-0.88 0.83-1.67 1.68-2.4 2.52-0.67-0.91-1.25-1.8-1.66-2.61-0.5-0.99-0.79-1.87-0.86-2.53s0.05-1.04 0.26-1.26c0.2-0.21 0.56-0.36 1.21-0.34zm14.1 0c0.6-0.02 1 0.13 1.2 0.34 0.2 0.22 0.3 0.6 0.2 1.26 0 0.66-0.3 1.54-0.8 2.53-0.4 0.81-1 1.7-1.7 2.61-0.7-0.84-1.5-1.69-2.4-2.52-0.7-0.67-1.4-1.27-2.1-1.84 1-0.72 2.1-1.3 3-1.69 1-0.44 1.9-0.66 2.6-0.69zm-7.1 3.42c0.8 0.62 1.7 1.28 2.5 2.04 0.9 0.87 1.7 1.76 2.4 2.62-0.7 0.9-1.5 1.8-2.4 2.7-0.8 0.7-1.7 1.4-2.5 2-0.8-0.6-1.61-1.3-2.42-2h-0.01c-0.92-0.9-1.73-1.8-2.47-2.7 0.74-0.86 1.55-1.75 2.48-2.62 0.81-0.76 1.62-1.42 2.42-2.04zm-1.47 2.86a0.46 0.46 0 0 0 -0.46 0.46v1.14h3.93v-0.1-1.09 0.02a0.46 0.46 0 0 0 -0.5 -0.43h-2.97zm-0.41 2v0.1h-0.05 0.05v1a0.46 0.46 0 0 0 0.46 0.5h3.02a0.46 0.46 0 0 0 0.4 -0.5v-1.1h-3.88zm-4.1 1.2c0.73 0.8 1.52 1.7 2.4 2.5a0.85 0.85 0 0 0 0.09 0.1c0.68 0.6 1.38 1.2 2.07 1.7-1.07 0.8-2.11 1.3-3.04 1.7-1.01 0.5-1.91 0.7-2.57 0.7s-1.01-0.1-1.22-0.3c-0.2-0.2-0.32-0.6-0.25-1.3 0.07-0.6 0.36-1.5 0.86-2.5 0.41-0.8 0.99-1.7 1.66-2.6zm12 0c0.7 0.9 1.3 1.8 1.7 2.6 0.5 1 0.8 1.9 0.8 2.5 0.1 0.7 0 1.1-0.2 1.3s-0.6 0.3-1.2 0.3c-0.7 0-1.6-0.2-2.6-0.7-0.9-0.4-2-0.9-3-1.7 0.7-0.5 1.3-1.1 2-1.7a0.85 0.85 0 0 0 0.1 -0.1c0.9-0.8 1.7-1.7 2.4-2.5z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="careers__list__item__title">Data Science</h3></div>
                                <ul className="careers__list__item__list careers__list__item__list--formacoes">
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-business-intelligence-data-warehouse-pentaho">
                                            BI e Data Warehouse com Pentaho </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-business-intelligence-data-warehouse">
                                            BI e Data Warehouse com SQL Server e Power BI </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-data-analysis-google-sheets">
                                            Data Analysis com Google Sheets </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-data-science">
                                            Data Science </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-datomic">
                                            Datomic </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-deep-learning-pytorch">
                                            Deep Learning com Pytorch </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-estatistica-python">
                                            Estatística com Python </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-estatistica-r">
                                            Estatística com R </a></li>
                                    <li className="careers__list__item__see-more">
                                        <a href="/cursos-online-data-science"
                                           className="careers__list__item__see-more__link">ver todas</a></li>
                                </ul>
                            </li>
                            <li className="careers__list__item --devops ">
                                <div className="careers__list__item__title-wrapper">
                                    <div className="categories__svg-wrapper">
                                        <svg className="pagina-categoria__svg svgFill-devops categories__svg">
                                            <path d="M11.19 18.67c-4.108 0-7.447-3.343-7.447-7.45 0-4.108 3.34-7.45 7.447-7.45 4.108 0 7.45 3.343 7.45 7.45 0 4.108-3.342 7.45-7.448 7.45h-.002zm10.934-9.018l-1.847-.343a9.231 9.231 0 0 0-1.308-3.178l1.093-1.573a.298.298 0 0 0 .004-.422l-1.793-1.795a.298.298 0 0 0-.42 0l-1.574 1.085a9.26 9.26 0 0 0-3.177-1.32L12.759.263C12.759.1 12.625 0 12.46 0H9.92c-.164 0-.298.1-.298.264L9.28 2.122a9.24 9.24 0 0 0-3.179 1.313L4.528 2.346a.298.298 0 0 0-.422-.003L2.311 4.138a.298.298 0 0 0 0 .42l1.086 1.573a9.258 9.258 0 0 0-1.32 3.178L.25 9.653c-.164 0-.25.134-.25.298v2.539c0 .164.086.298.25.298l1.85.343a9.237 9.237 0 0 0 1.31 3.178l-1.092 1.573a.298.298 0 0 0-.005.422l1.794 1.797a.298.298 0 0 0 .421 0l1.573-1.087a9.243 9.243 0 0 0 3.178 1.32l.343 1.805c0 .164.134.227.298.227h2.54c.164 0 .298-.063.298-.227l.343-1.84a9.227 9.227 0 0 0 3.178-1.303l1.573 1.096a.298.298 0 0 0 .422.003l1.795-1.793a.298.298 0 0 0 0-.421l-1.084-1.574a9.258 9.258 0 0 0 1.321-3.177l1.82-.344c.164 0 .24-.135.24-.299V9.95c0-.164-.076-.299-.24-.299l-.002.001zM11.19 7.842a3.382 3.382 0 0 0-3.377 3.378 3.382 3.382 0 0 0 3.377 3.377 3.38 3.38 0 0 0 3.377-3.377 3.38 3.38 0 0 0-3.377-3.377zm0 4.891a1.513 1.513 0 1 1 0-3.026 1.513 1.513 0 0 1 0 3.026z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="careers__list__item__title">DevOps</h3></div>
                                <ul className="careers__list__item__list careers__list__item__list--formacoes">
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-redes">
                                            Administrador de Redes </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-amazon-web-services">
                                            Amazon Web Services </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-kafka">
                                            Apache Kafka </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-aws-certified-cloud-practitioner">
                                            AWS Certified Cloud Practitioner </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-aws-certified-solutions-architect-associate">
                                            AWS Certified Solutions Architect - Associate </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-certificacao-az-900-microsoft-azure-fundamentals">
                                            Certificação AZ-900: Microsoft Azure Fundamentals </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-docker-dca">
                                            Certificação Docker DCA </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-certificacao-lpi-linux-essentials">
                                            Certificação LPI Linux Essentials </a></li>
                                    <li className="careers__list__item__see-more">
                                        <a href="/cursos-online-devops" className="careers__list__item__see-more__link">ver
                                            todas</a></li>
                                </ul>
                            </li>
                            <li className="careers__list__item --design-ux ">
                                <div className="careers__list__item__title-wrapper">
                                    <div className="categories__svg-wrapper">
                                        <svg className="pagina-categoria__svg svgFill-design-ux categories__svg">
                                            <path d="M23.783 8.582c-.047-.086-1.146-2.111-3.123-4.155C17.984 1.662 14.97.2 11.943.2S5.902 1.662 3.226 4.427C1.248 6.47.15 8.496.103 8.582a.865.865 0 0 0-.087.572.864.864 0 0 0 .087.573c.047.085 1.145 2.11 3.123 4.154 2.676 2.765 5.69 4.227 8.717 4.227 3.026 0 6.04-1.462 8.717-4.227 1.976-2.044 3.076-4.07 3.122-4.154a.87.87 0 0 0 .087-.573.865.865 0 0 0-.087-.574v.002zm-11.84 7.787c-5.552 0-9.39-5.918-10.166-7.216.773-1.3 4.598-7.215 10.165-7.215 5.552 0 9.39 5.916 10.164 7.215-.775 1.3-4.612 7.216-10.164 7.216zm1.36-7.288c0-.416.338-.868.757-.868h1.842c-.362-1.737-1.999-3.183-3.966-3.183-2.232 0-4.041 1.85-4.041 4.082 0 2.232 1.81 4.094 4.04 4.094 1.981 0 3.628-1.517 3.973-3.255H14.06c-.418 0-.755-.452-.755-.869l-.001-.001z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="careers__list__item__title">UX &amp; Design</h3></div>
                                <ul className="careers__list__item__list careers__list__item__list--formacoes">
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-ui-adobe-xd">
                                            Adobe XD </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-blender">
                                            Blender </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-desenhohumano-photoshop">
                                            Desenho básico </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-design-de-jogos">
                                            Design de Jogos </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-design-grafico">
                                            Design Gráfico </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-editor-video">
                                            Edição de vídeo </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-figma">
                                            Figma </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-fotografia">
                                            Fotografia </a></li>
                                    <li className="careers__list__item__see-more">
                                        <a href="/cursos-online-design-ux"
                                           className="careers__list__item__see-more__link">ver todas</a></li>
                                </ul>
                            </li>
                            <li className="careers__list__item --mobile ">
                                <div className="careers__list__item__title-wrapper">
                                    <div className="categories__svg-wrapper">
                                        <svg className="pagina-categoria__svg svgFill-mobile categories__svg">
                                            <path d="M12.451 20.014H2.548c-.272 0-.468-.206-.468-.514v-3.728h10.84V19.5c0 .308-.197.514-.469.514zM2.548 1.99h9.903c.272 0 .468.196.468.443V14.2H2.08V2.433c0-.247.197-.443.469-.443zM15 2.462C15 1.102 13.848 0 12.427 0H2.573C1.153 0 0 1.102 0 2.462v17.076C0 20.898 1.152 22 2.573 22h9.854a2.64 2.64 0 0 0 1.82-.721A2.41 2.41 0 0 0 15 19.538V2.462zm-7.338 14.45h-.124a1.18 1.18 0 0 0-1.175 1.185 1.18 1.18 0 0 0 1.175 1.183h.124c.65 0 1.175-.53 1.175-1.183a1.18 1.18 0 0 0-1.175-1.184z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="careers__list__item__title">Mobile</h3></div>
                                <ul className="careers__list__item__list careers__list__item__list--formacoes">
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-android">
                                            Android </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-arquiteto-android">
                                            Arquitetura Android </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link" href="/formacao-flutter">
                                            Flutter </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-testes-automatizados-android">
                                            Testes automatizados no Android </a></li>
                                    <li className="careers__list__item__see-more">
                                        <a href="/cursos-online-mobile" className="careers__list__item__see-more__link">ver
                                            todas</a></li>
                                </ul>
                            </li>
                            <li className="careers__list__item --inovacao-gestao ">
                                <div className="careers__list__item__title-wrapper">
                                    <div className="categories__svg-wrapper">
                                        <svg className="pagina-categoria__svg svgFill-inovacao-gestao categories__svg">
                                            <svg id="icon-categorias-inovacao-gestao" viewBox="0 0 45 45"><path d="M15.612 38.715h13.776a1.647 1.717 0 1 0 0-3.433H15.612a1.647 1.717 0 0 0 0 3.433zm8.535-1.717V13.66a1.647 1.717 0 0 0-3.294 0v23.337a1.647 1.717 0 0 0 3.294 0zm6.963-23.261h-1.722a8.535 8.899 0 0 0-8.535 8.899v3.59c0 .949.737 1.718 1.647 1.718h1.722a8.535 8.899 0 0 0 8.535-8.899v-3.59a1.647 1.717 0 0 0-1.647-1.718zm-1.646 5.308a5.24 5.464 0 0 1-5.242 5.464h-.075v-1.873a5.24 5.464 0 0 1 5.241-5.464h.076v1.873zm-15.5 15.486v7.853c0 .949.738 1.717 1.648 1.717h13.776a1.647 1.717 0 0 0 1.647-1.717V34.53a17.12 17.85 0 0 0 8.61-15.486C39.646 9.173 31.97 1.17 22.5 1.17S5.354 9.173 5.354 19.045a17.12 17.85 0 0 0 8.61 15.486zm3.295 6.137v-7.164a1.647 1.717 0 0 0-.913-1.537 13.836 14.425 0 0 1-7.699-12.922 13.853 14.442 0 1 1 27.706 0 13.836 14.425 0 0 1-7.699 12.922 1.647 1.717 0 0 0-.913 1.537v7.164H17.259z"></path></svg>
                                        </svg>
                                    </div>
                                    <h3 className="careers__list__item__title">Inovação &amp; Gestão</h3></div>
                                <ul className="careers__list__item__list careers__list__item__list--formacoes">
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-aprendizagem">
                                            Aprendizagem </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-business-agility">
                                            Business Agility </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-certificacao-cobit-5">
                                            Certificação Cobit 5 </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-certificacao-itil-foundation">
                                            Certificação da biblioteca de infraestrutura de tecnologia da informação -
                                            Fundamentos v3 </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-certificacao-itil-4-foundation">
                                            Certificação da biblioteca de infraestrutura de tecnologia da informação -
                                            Fundamentos v4 </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-certificacao-pmp-capm-pmi">
                                            Certificação PMP e CAPM do PMI </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-comunicacao">
                                            Comunicação </a></li>
                                    <li className="careers__list__item__list__item">
                                        <a className="careers__list__item__list__item__link"
                                           href="/formacao-comunicacao-lideres">
                                            Comunicação para líderes </a></li>
                                    <li className="careers__list__item__see-more">
                                        <a href="/cursos-online-inovacao-gestao"
                                           className="careers__list__item__see-more__link">ver todas</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
    )
}
export default Principal;