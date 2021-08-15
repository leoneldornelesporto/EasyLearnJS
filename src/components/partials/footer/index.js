import React from 'react';
import {Link} from 'react-router-dom';
import {FooterArea} from './styles';

function Footer(){
    return(
        <FooterArea>
            <div className="footer container">
                <a data-savepage-href="/dashboard" href="https://cursos.alura.com.br/dashboard" className="footer-logo">

                </a>
                <ul className="footer-menu">
                    <li className="footer-menu-item">
                        <Link className="footer-menu-item-link" to="/sobre">
                        Sobre o EasyLearn
                    </Link>
                    </li>
                    <li className="footer-menu-item">
                        <Link className="footer-menu-item-link" to="/suporte" target="_blank">
                            Dúvidas frequentes
                        </Link>
                    </li>
                    <li className="footer-menu-item">
                        <a className="footer-menu-item-link" href="https://docs.google.com/forms/d/e/1FAIpQLScwKyaSvuFXK9SmMJoLPuYAS2qD_XAAnZPxMZij9qVeflbhBg/viewform" target="_blank">
                            Sugira um curso
                        </a>
                    </li>
                    <li className="footer-menu-item">
                        <a className="footer-menu-item-link" href="https://github.com/leoneldornelesporto/EasyLearn" target="_blank">
                            Sugira uma funcionalidade
                        </a>
                    </li>
                    <li className="footer-menu-item">
                        <a className="footer-menu-item-link" href="https://www.easylearn.com.br/artigos" target="_blank">
                            Blog do EasyLearn
                        </a>
                    </li>
                </ul>
                <section role="presentation" className="footer-footerGroup">
                    <div className="footer-links">
                        <h2 className="footer-links-title">Acompanhe-nos</h2>
                        <ul role="presentation" className="footer-socialMedia">
                            <li className="footer-socialMedia-item">
                                <a className="footer-socialMedia-item-link"
                                   href="https://www.youtube.com/user/easylearn" target="_blank"
                                   title="Youtube da Alura">
                                    <svg id="icon-footer-youtube" viewBox="0 0 40 40">

                                        <g fill="none" fill-rule="evenodd">
                                            <path fill="#8696A0" d="M16.356 24.383l8.979-4.655-8.98-4.684v9.34z"></path>
                                            <g>
                                                <path fill="#8696A0" d="M33.627 26.676c-.346 1.502-1.575 2.609-3.053 2.774-3.502.392-7.046.394-10.575.392-3.529.002-7.074 0-10.577-.392-1.478-.165-2.706-1.272-3.05-2.774-.493-2.14-.493-4.474-.493-6.676s.006-4.537.498-6.676c.345-1.502 1.573-2.61 3.051-2.775 3.503-.391 7.047-.393 10.577-.391 3.528-.002 7.073 0 10.574.39 1.48.167 2.708 1.274 3.053 2.776.493 2.139.488 4.474.488 6.676s0 4.537-.493 6.676M20 0C8.955 0 0 8.954 0 20s8.955 20 20 20 20-8.954 20-20S31.045 0 20 0" mask="url(#b)"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer-socialMedia-item">
                                <a className="footer-socialMedia-item-link"
                                   href="https://www.facebook.com/easylearn/" target="_blank"
                                   title="Facebook da Alura">
                                    <svg className="footer-socialMedia-item-icon footer-socialMedia-list-item-facebook">
                                        <g fill="none" fill-rule="evenodd">

                                            <path fill="#8696A0" d="M24.169 20.704H21.02V32.3h-4.667V20.704h-2.218v-4.099h2.218v-2.65c0-1.9.874-4.867 4.71-4.867l3.457.013v3.98h-2.51c-.408 0-.988.21-.988 1.116v2.41h3.554l-.407 4.097zM19.356 0C8.683 0 0 8.972 0 20s8.682 20 19.355 20c10.67 0 19.355-8.972 19.355-20S30.028 0 19.356 0z" mask="url(#b)"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer-socialMedia-item">
                                <a className="footer-socialMedia-item-link" href="https://twitter.com/easylearn"
                                   target="_blank" title="Twitter da Alura">
                                    <svg className="footer-socialMedia-item-icon footer-socialMedia-list-item-twitter">
                                        <g fill="none" fill-rule="evenodd">
                                            <path fill="#8696A0" d="M27.989 15.423c.01.197.013.397.013.597 0 6.084-4.479 13.096-12.675 13.096-2.516 0-4.858-.76-6.828-2.067a8.758 8.758 0 0 0 6.595-1.907c-1.949-.035-3.595-1.367-4.162-3.197a4.31 4.31 0 0 0 2.01-.077c-2.037-.421-3.572-2.281-3.572-4.513l.001-.059c.6.344 1.288.552 2.017.576a4.641 4.641 0 0 1-1.98-3.83c0-.845.218-1.637.602-2.317 2.196 2.786 5.48 4.618 9.182 4.811a4.75 4.75 0 0 1-.115-1.05c0-2.54 1.993-4.602 4.454-4.602 1.281 0 2.437.559 3.252 1.453a8.732 8.732 0 0 0 2.83-1.117 4.597 4.597 0 0 1-1.962 2.547 8.618 8.618 0 0 0 2.559-.724 9.124 9.124 0 0 1-2.221 2.38M19.355 0C8.683 0 .001 8.972.001 20s8.682 20 19.354 20c10.671 0 19.355-8.972 19.355-20S30.028 0 19.355 0" mask="url(#b)"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer-socialMedia-item">
                                <a className="footer-socialMedia-item-link" href="http://easylearn.hipsters.tech/" target="_blank"
                                   title="Podcast Hipsters Ponto Tech">
                                    <svg className="footer-socialMedia-item-icon footer-socialMedia-list-item-hipsters">
                                        <g>
                                            <path fill="#8696A0" d="M31.818 27.273c0 2.545-2 4.545-4.545 4.545s-4.545-2-4.545-4.545v-1.819A4.501 4.501 0 0 1 26 21.09c.18-.09.364-.272.364-.454v-2.454A6.324 6.324 0 0 0 20 11.818a6.323 6.323 0 0 0-6.363 6.364v2.454c0 .182.09.364.363.454a4.5 4.5 0 0 1 3.273 4.364v1.819c0 2.545-2 4.545-4.545 4.545-2.547 0-4.547-2-4.547-4.545v-1.819c0-1.364.637-2.636 1.637-3.454.09-.091.182-.182.182-.364v-3.454a9.97 9.97 0 0 1 10-10 9.97 9.97 0 0 1 10 10v3.454c0 .092.092.273.18.364 1 .818 1.638 2.09 1.638 3.454v1.819zM20 0C8.909 0 0 8.909 0 20c0 11.09 8.909 20 20 20 11.092 0 20-8.91 20-20C40 8.909 31.092 0 20 0z" mask="url(#b)"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer-socialMedia-item">
                                <a className="footer-socialMedia-item-link" href="https://instagram.com/easylearn"
                                   target="_blank" title="Instagram da Alura">
                                    <svg
                                        className="footer-socialMedia-item-icon footer-socialMedia-list-item-instagram">
                                        <svg id="icon-footer-instagram" viewBox="0 0 24 24">
                                            <path fill="#8696A0" d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zM12 15.595a3.595 3.595 0 1 1 0-7.19 3.595 3.595 0 0 1 0 7.19zm3.737-6.491a.84.84 0 1 1 0-1.68.84.84 0 0 1 0 1.68zM14.333 12a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072C5.008 14.14 5 13.901 5 12c0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071C9.861 5.008 10.099 5 12 5s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"></path>
                                        </svg>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h2 className="footer-links-title">Apps</h2>
                        <ul className="footer-hotLinks-menu footer-hotLinks-mobile">
                            <li className="footer-hotLinks-item">
                                <a className="footer-hotLinks-item-link"
                                   href="https://play.google.com/store/apps/details?id=br.com.easylearn.mobi&hl=pt_BR"
                                   target="_blank" title="Google Play Store">
                                    <svg className="footer-hotLinks-item-icon footer-hotLinks-menu-item-mobile">
                                        <g>
                                            <path fill="#8696A0" d="M32.043 22.774L15.96 31.966a3.19 3.19 0 0 1-3.188-.011 3.205 3.205 0 0 1-1.592-2.763V10.808c0-1.136.611-2.194 1.592-2.764a3.19 3.19 0 0 1 3.188-.01l16.082 9.192A3.202 3.202 0 0 1 33.652 20a3.204 3.204 0 0 1-1.61 2.774M20 0C8.955 0 0 8.955 0 20c0 11.046 8.955 20 20 20s20-8.954 20-20C40 8.955 31.045 0 20 0" mask="url(#b)"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer-hotLinks-item">
                                <a className="footer-hotLinks-item-link"
                                   href="https://itunes.apple.com/br/app/easylearn-cursos-online/id1225776635"
                                   target="_blank" title="Apple App Store">
                                    <svg className="footer-hotLinks-item-icon footer-hotLinks-menu-item-mobile">
                                        <g fill="none" fill-rule="evenodd">
                                            <path fill="#8696A0" d="M30.458 24.279c-.179.573-.71 2.072-1.765 3.614-1.012 1.48-2.16 3.156-4.028 3.191-.874.016-1.466-.241-2.04-.49-.582-.251-1.184-.511-2.128-.511-.99 0-1.624.27-2.235.53-.545.231-1.11.471-1.888.502l-.095.002c-1.658 0-2.87-1.553-4.066-3.284-2.398-3.46-3.775-9.168-1.608-12.93 1.14-1.983 3.208-3.234 5.396-3.266h.066c.942 0 1.83.352 2.614.663.586.232 1.093.433 1.484.433.348 0 .85-.198 1.433-.428.845-.333 1.896-.748 2.995-.748.14 0 .28.007.416.022.933.04 3.254.373 4.77 2.59a.213.213 0 0 1-.06.295l-.02.012c-.44.272-2.636 1.775-2.608 4.61.031 3.491 2.918 4.771 3.247 4.906l.015.007a.208.208 0 0 1 .112.257l-.007.023zM21.146 7.46c.95-1.113 2.539-1.929 3.864-1.982a.211.211 0 0 1 .217.188c.154 1.4-.353 2.964-1.358 4.182-.955 1.154-2.352 1.871-3.648 1.871-.09 0-.182-.003-.272-.01a.21.21 0 0 1-.192-.182c-.208-1.572.581-3.132 1.39-4.067zM20 .001C8.954 0 0 8.954 0 20c0 11.044 8.955 20 20 20 11.047 0 20-8.956 20-20C40 8.954 31.046 0 20 0z"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </FooterArea>
    );
}
export default Footer;