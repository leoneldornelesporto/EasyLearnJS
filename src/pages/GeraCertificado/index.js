import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Cookies from "js-cookie";
import {CursoContext} from "../../context/CursoProvider";
import {AuthUserContext} from "../../context/AuthUserProvider";

const GeraCertificado = () => {

    const { uuid } = useParams();
    const {aluno,signInV1} = useContext(AuthUserContext);
    const {cursos,retornarCursosPorUuid} = useContext(CursoContext);

    if (aluno===''){
        signInV1(Cookies.get('email'),Cookies.get('pass'))
    }

    if (cursos===null){
        retornarCursosPorUuid(uuid);
    }

    function body(){
        try{
            return (
                <div align="center">
                    <a href={"/curso_detalhe="+uuid} className="buttonLink">
                        Acessar o curso
                    </a>
                    <a onClick="window.print();" className="buttonLink">
                        Imprimir
                    </a>
                    <div className="certificate-back">
                        <img className="image" src="https://uploaddeimagens.com.br/images/003/490/171/original/certificate-alura-pt_BR.jpg?1634576901"/>
                        <div className="off-fix ">
                            <h4 className="certificate-user-name  name">{aluno.nomeNoCertificado}</h4>
                            <span className="certificate-banner">
      Concluiu o curso online
      </span>
                            <h5 className="certificate-course">{cursos.nome}</h5>
                            <span className="certificate-hours">
      Com carga horária estimada em {cursos.cargaHoraria} horas
      </span>
                            <span className="certificate-date">
      com início em 06/10/2020 e concluído em 06/10/2020.
      </span>
                            <span className="exercises-done">
      60 de 60 atividades concluídas.
      </span>
                        </div>
                    </div>
                </div>
            )
        }
        catch (e) {
            return (<></>)
        }
    }

    return(
        body()
    );
}

export default GeraCertificado;