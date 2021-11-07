import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {UserContext} from "../../context/UserProvider";
import {MatriculaContext} from "../../context/MatriculaContext";
import {getAuthorization} from "../../context/AuthHandler";

const User = () => {
    const { name } = useParams();
    const {user,acharUsuarioPorNomeCompleto} = useContext(UserContext);
    const {matriculas,verificarSeEstouMatriculadoEmAlgumCursoById} = useContext(MatriculaContext);

    if(user===null) {
        acharUsuarioPorNomeCompleto(name);
    }

    if(user!==null){
        verificarSeEstouMatriculadoEmAlgumCursoById(user.id,getAuthorization());
    }

    function imagemAvatar() {
        if(user.avatar!==null) {
            return (
                <img
                    src={user.avatar}
                    alt={"Foto de "+user.nomeCompleto}
                    className="headline-profile-avatar headline-profile-avatar"/>
            )
        }
        else{
            return (
                <img
                    src="https://suap.ifsul.edu.br/static/comum/img/default.jpg"
                    alt={"Foto de "+user.nomeCompleto}
                    className="headline-profile-avatar headline-profile-avatar"/>
            )
        }
    }

    function header(){
        return (
            <section className="banner bootcamp-banner-background-theme">
                <div className="container">
                    <h1 className="banner-title">
                        Perfil de {name}
                    </h1>
                </div>
            </section>
        )
    }

    function main(){
        try{
            return (
                <main className="profile bootcamp-background-dark">
                    <section className="profile-header bootcamp-background-dark">
                        <div className="container">
                            <div className="profile-header-avatarAndEdit">
                                {imagemAvatar()}
                            </div>
                            <h2 className="profile-header-name">{user.nomeCompleto}</h2>
                            <div className="profile-header-bio bootcamp-text-color-gray">
                                {user.biografia}
                            </div>
                        </div>
                    </section>
                    <section className="profile-user-guides container">
                    </section>

                        {
                            matriculas===null?
                                <></>
                                :
                                <section className="profile-finishedCourses profile-finishedCourses--inactive profile-course-sorter">
                                <div className="container">
                                    <h3 className="profile-title">
                                        Curso concluído
                                    </h3>
                                    <ul className="card-list profile-finishedCourses-list profile-finishedCourses-list--inactive"
                                        id="">
                                        <li className="card-list__item"
                                            data-course-name="SOLID com Java: Princípios da programação orientada a objetos"
                                            data-started-at="09/25/2021" data-finished-at="09/26/2021">
                                            <div className="course-card   bootcamp-background-dark-section">
                                                {
                                                    matriculas.map((value, index)=>{
                                                        return (
                                                            <>
                                                                <a className="course-card__course-link " data-recommendationid="" data-courseid=""
                                                                   data-recommendationsource="" href={"/curso_detalhe="+value.uuid}></a>
                                                                <div className="course-card__content-wrapper">
                                                                    <div className="course-card__content">
                                                                        <img className="course-card__icon" aria-hidden="true" alt=""
                                                                             src={value.imagemIcon}/>
                                                                        <span className="course-card__name">{value.nome}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="course-card__other-links">
                                                                    <a className="course-card__certificate bootcamp-text-color"
                                                                       href={"/certificado="+value.uuid}>Certificado</a>
                                                                </div>
                                                            </>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </section>
                        }
                </main>
            )
        }
        catch (e) {
            console.log(e);
        }
    }

    return(
        <>
            {header()}
            {main()}
        </>
    );
}
export default User;