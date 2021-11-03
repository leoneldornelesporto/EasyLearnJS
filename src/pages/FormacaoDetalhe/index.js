import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {FormacaoContext} from "../../context/FormacaoProvider";
import {MatriculaContext} from "../../context/MatriculaContext";
import Cookies from "js-cookie";
import {isLogged} from "../../context/AuthHandler";

const FormacaoDetalhe = () => {

    const { id } = useParams();
    const {cursosDetalhe,formacao,retornaFormacaoById,retornarFormacaoPorId} = useContext(FormacaoContext);
    const {retornaDadosDoCursoMatriculado,porcentagemCurso} = useContext(MatriculaContext);

    if(cursosDetalhe===null){
        retornaFormacaoById(id);
    }

    if(formacao===null){
        retornarFormacaoPorId(id);
    }

    console.log(formacao);
    console.log(cursosDetalhe);

    function headerFormacao(){
        try{
            if(formacao[0].categoria==="Programação"){
                return(
                    <section className="formacao__background-color--programacao formacoes_programacao">
                        <div className="container">
                            <img className="formacoes__icon"
                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/branco/programacao.svg" alt=""/>
                            <div className="formacao-header-headline">
                                <h1 className="formacao-headline-titulo">{formacao[0].titulo}</h1>
                                <h2 className="formacao-headline-subtitulo">{formacao[0].descricao}</h2>
                            </div>
                        </div>
                    </section>
                )
            }

            if(formacao[0].categoria==="Front-end"){
                return(
                    <section className="formacao__background-color--programacao formacoes_front_end">
                        <div className="container">
                            <img className="formacoes__icon"
                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/branco/front-end.svg" alt=""/>
                            <div className="formacao-header-headline">
                                <h1 className="formacao-headline-titulo">{formacao[0].titulo}</h1>
                                <h2 className="formacao-headline-subtitulo">{formacao[0].descricao}</h2>
                            </div>
                        </div>
                    </section>
                )
            }

            if(formacao[0].categoria==="DevOps"){
                return(
                    <section className="formacao__background-color--programacao formacoes_devops">
                        <div className="container">
                            <img className="formacoes__icon"
                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/branco/devops.svg" alt=""/>
                            <div className="formacao-header-headline">
                                <h1 className="formacao-headline-titulo">{formacao[0].titulo}</h1>
                                <h2 className="formacao-headline-subtitulo">{formacao[0].descricao}</h2>
                            </div>
                        </div>
                    </section>
                )
            }

            if(formacao[0].categoria==="Data Science"){
                return(
                    <section className="formacao__background-color--programacao formacoes_data_science">
                        <div className="container">
                            <img className="formacoes__icon"
                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/branco/data-science.svg" alt=""/>
                            <div className="formacao-header-headline">
                                <h1 className="formacao-headline-titulo">{formacao[0].titulo}</h1>
                                <h2 className="formacao-headline-subtitulo">{formacao[0].descricao}</h2>
                            </div>
                        </div>
                    </section>
                )
            }

            if(formacao[0].categoria==="Ux & Design"){
                return(
                    <section className="formacao__background-color--programacao formacoes_ux_design">
                        <div className="container">
                            <img className="formacoes__icon"
                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/branco/design-ux.svg" alt=""/>
                            <div className="formacao-header-headline">
                                <h1 className="formacao-headline-titulo">{formacao[0].titulo}</h1>
                                <h2 className="formacao-headline-subtitulo">{formacao[0].descricao}</h2>
                            </div>
                        </div>
                    </section>
                )
            }

            if(formacao[0].categoria==="Mobile"){
                return(
                    <section className="formacao__background-color--programacao formacoes_mobile">
                        <div className="container">
                            <img className="formacoes__icon"
                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/branco/mobile.svg" alt=""/>
                            <div className="formacao-header-headline">
                                <h1 className="formacao-headline-titulo">{formacao[0].titulo}</h1>
                                <h2 className="formacao-headline-subtitulo">{formacao[0].descricao}</h2>
                            </div>
                        </div>
                    </section>
                )
            }

            if(formacao[0].categoria==="Inovação & Gestão"){
                return(
                    <section className="formacao__background-color--programacao formacoes_gestao">
                        <div className="container">
                            <img className="formacoes__icon"
                                 src="https://www.alura.com.br/assets/api/formacoes/categorias/branco/inovacao-gestao.svg" alt=""/>
                            <div className="formacao-header-headline">
                                <h1 className="formacao-headline-titulo">{formacao[0].titulo}</h1>
                                <h2 className="formacao-headline-subtitulo">{formacao[0].descricao}</h2>
                            </div>
                        </div>
                    </section>
                )
            }
        }catch (e) {
            console.log(e);
        }


    }

    function professor(){
        try{
            for(let i=0; i<cursosDetalhe.length; i++) {
                return (
                    <li className="formacao-instrutores-instrutor">
                        {imagemAvatar(cursosDetalhe,i)}
                    </li>
                )
            }
        }
        catch (e) {
            return(<></>)
        }
    }

    function horasTotais(){
        try{
            var sum=0;
            for(let i=0; i<cursosDetalhe.length; i++) {
                sum+=cursosDetalhe[i].cargaHoraria;
            }
            return sum;
        }
        catch (e) {
            return(<></>)
        }
    }

    function quantidadeTotalCursos(){
        return cursosDetalhe.length;
    }

    function imagemAvatar(cursosDetalhe,i) {
        if(cursosDetalhe[i].avatar!==null) {
            return (
                <a href={"/user="+cursosDetalhe[i].nomeProfessor} className="formacao-instrutor-link">
                    <img className="formacao-instrutor-avatar"
                         src={cursosDetalhe[i].avatar}/>
                    <p className="formacao-instrutor-nome">{cursosDetalhe[i].nomeProfessor}</p>
                </a>
            )
        }
        else{
            return (
                <a href={"/user="+cursosDetalhe[i].nomeProfessor} className="formacao-instrutor-link">
                    <img
                        src="https://suap.ifsul.edu.br/static/comum/img/default.jpg"
                        alt={"Foto de "+cursosDetalhe[i].nomeProfessor}
                        className="headline-profile-avatar headline-profile-avatar"/>
                    <p className="formacao-instrutor-nome">{cursosDetalhe[i].nomeProfessor}</p>
                </a>
            )
        }
    }

    function body(){
        if (isLogged()){
            try{
                return(
                    <main className="formacao">
                        {headerFormacao()}
                        <section className="formacao__info">
                            <div className="container">
                                <div className="formacao__info-categoria">
                                    Esta formação faz parte da categoria <a href="" className="formacao__info-categoria-link">{cursosDetalhe[0].categoria}</a>
                                </div>
                                <div className="formacao__info-conclusao">
                                    <div className="formacao__info-icon formacao__info-icon-conclusao"></div>
                                    <div className="formacao__info-content">
                                        <div className="formacao__info-destaque">{horasTotais()}h</div>
                                        <p>Para conclusão</p>
                                    </div>
                                </div>
                                <div className="formacao__info-cursos">
                                    <div className="formacao__info-icon formacao__info-icon-cursos"></div>
                                    <div className="formacao__info-content">
                                        <div className="formacao__info-destaque">{quantidadeTotalCursos()}</div>
                                        <p>Cursos</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="formacao-sobre formacao-sobre--logado ">
                            <div className="container">
                                <div id="sobre" className="formacao-sobre-mercado container-author-summary-wrapper">
                                    <h4 className="formacao-mercado-titulo formacao__text-color--programacao">{formacao[0].subtitulo}</h4>
                                    <div className="formacao-prerequisitos-texto">
                                        <p>{formacao[0].descricaoSubtitulo}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="instrutores" className="formacao-instrutores">
                            <div className="container">
                                <h3 className="formacao-instrutores-titulo formacao__text-color--programacao">Com quem você irá
                                    aprender</h3>
                                <ul className="formacao-instrutores-lista">
                                    {professor()}
                                </ul>
                            </div>
                        </section>
                        <section id="passo-a-passo" className="formacao-passos">
                            <div className="container">
                                <div className="formacao-passos-fundo">
                                    <h3 className="formacao-passos-titulo" >Passo a passo</h3>
                                    <ol className="formacao-passos-lista">
                                        <li id="unity-e-programacao" className="formacao-passos-passo">
                                            <div className="formacao-passo-conteudo formacao-passo-conteudo--expanded">
                                                <ul className="learning-content ">
                                                    {
                                                        cursosDetalhe.map((value, index)=>{
                                                            return (
                                                                <li className="learning-content__item learning-content__item--kind-course"
                                                                >
                                                                    <a className="learning-content__link  "
                                                                       href={"curso_detalhe="+value.uuid} target="_blank">
                                                                        <img className="learning-content__icon"
                                                                             src={value.imagemIcon}/>
                                                                        <div className="learning-content__info">
                                                                            <span className="learning-content__kind" >Curso
                              </span>
                                                                            <span className="learning-content__name">{value.nome}</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </section>
                    </main>
                )
            }
            catch (e) {
                return(<></>)
            }
        }else{
            window.location.href = '/signin'; //manda para a rota home
        }

    }

    return(
        body()
    );
}

export default FormacaoDetalhe;