import React, {useEffect, useState} from 'react';
import {putAluno, signUp, v1SignUp} from "../../helpers/EasyLearnApi";
import Cookies from "js-cookie";
import {doLogin, getAuthorization} from "../../helpers/AuthHandler";

const Perfil = () => {

    const [authorize, setAuthorize] = useState('');
    const [avatar, setAvatar] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nomeNosCertificados, setNomeNosCertificados] = useState('');
    const [cpf, setCpf] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [usuarioNaUrl, setUsuarioNaUrl] = useState('');
    const [biografia, setBiografia] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [ocupacao, setOcupacao] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [twitter, setTwitter] = useState('');
    const [github, setGithub] = useState('');
    const [linkPersonalizado, setLinkPersonalizado] = useState('');
    const [privacidade, setPrivacidade] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [cargo, setCargo] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [curso, setCurso] = useState('');
    const [usuario, setUsuario] = useState('');
    const [result,setResult]= useState('');

    console.log(Cookies.get("email"))
    console.log(Cookies.get("senha"))

    useEffect(()=>{
        v1SignUp(Cookies.get("email"),Cookies.get("senha")).then(function(result) {
            return setUsuario(result)
        })
    },[])

    function privacidadeDoPerfil(){
            return (
                <div className="form-privacy-wrapper">
                    <label className="form-label-checkbox form-radio">
                        <input id="publicProfile1" name="publicProfile"
                               className="privacy__select" type="radio" value="true"
                               onChange={e=>setPrivacidade(e.target.value)}

                        />
                        Público
                    </label>
                    <label className="form-label-checkbox form-radio">
                        <input id="publicProfile2" name="publicProfile"
                               className="privacy__select" type="radio" value="false"
                               onChange={e=>setPrivacidade(e.target.value)}

                        />
                        Privado
                    </label>
                </div>
            )
    }



    console.log(usuario);

    async function salvarPerfil(e) {
        e.preventDefault()

        console.log(getAuthorization())
        console.log(authorize)
        console.log(usuario.id)
        console.log(nomeCompleto)
        console.log(nomeNosCertificados)
        console.log(cpf)
        console.log(usuarioNaUrl)
        console.log(dia+'/'+mes+'/'+ano)
        setDataNascimento(dia+'/'+mes+'/'+ano)
        console.log(ocupacao)
        console.log(linkedin)
        console.log(github)
        console.log(twitter)
        console.log(linkPersonalizado)
        console.log(privacidade)
        console.log(empresa)
        console.log(cargo)
        console.log(instituicao)
        console.log(curso)
        console.log(biografia)
        console.log(avatar)

        try{
            signUp(Cookies.get("email"),Cookies.get("senha")).then(function(result) {
                return setAuthorize(result);
            })

            await doLogin(authorize.authorizationCode);

            putAluno(usuario.id,getAuthorization(),avatar,nomeCompleto,nomeNosCertificados,usuarioNaUrl,cpf,biografia,dataNascimento,ocupacao,linkedin,twitter,github,linkPersonalizado,empresa,cargo,instituicao,curso,privacidade).then(function(result) {
                setResult(result)
            })

            if(result.status !== 401){
                alert("Perfil editado com Sucesso")
            }
        }
        catch (e) {
            console.log(e)
            window.location.href = '/my_profile'; //manda para a rota home
        }

    }

    console.log("result")
    console.log(result.status)


    function dataDeNascimento() {
        if(usuario.dataDeNascimento !== undefined && usuario.dataDeNascimento !== null){
            return (
                <>
                    <input id="birthDateDay" name="birthDateDay" placeholder="DD" type="number"
                           className="form-input birth-date form-2-digits checklist-field"
                           defaultValue={usuario.dataDeNascimento.substring(0,2)} size="2" maxLength="2" onChange={e=>setDia(e.target.value)}/>
                    <span className="birth-date-slash">/</span>
                    <input id="birthDateMonth" name="birthDateMonth" placeholder="MM"
                           type="number" className="form-input birth-date form-2-digits"
                           defaultValue={usuario.dataDeNascimento.substring(3,5)} onChange={e=>setMes(e.target.value)} size="2" maxLength="2"/>
                    <span className="birth-date-slash">/</span>
                    <input id="birthDateYear" name="birthDateYear" placeholder="AAAA"
                           type="number" className="form-input birth-date form-4-digits"
                           defaultValue={usuario.dataDeNascimento.substring(6,10)} onChange={e=>setAno(e.target.value)} size="4" maxLength="4"/>
                </>
            )
        }
        else{
            return (
                <>
                    <input id="birthDateDay" name="birthDateDay" placeholder="DD" type="number"
                           className="form-input birth-date form-2-digits checklist-field"
                           value="DD" size="2" maxLength="2"/>
                    <span className="birth-date-slash">/</span>
                    <input id="birthDateMonth" name="birthDateMonth" placeholder="MM"
                           type="number" className="form-input birth-date form-2-digits"
                           value="MM" size="2" maxLength="2"/>
                    <span className="birth-date-slash">/</span>
                    <input id="birthDateYear" name="birthDateYear" placeholder="AAAA"
                           type="number" className="form-input birth-date form-4-digits"
                           value="YYYY" size="4" maxLength="4"/>
                </>
            )
        }
    }

    return(
        <section className="editProfile">
            <section className="banner bootcamp-banner-background-theme">
                <div className="container">
                    <h1 className="banner-title">
                        Seu Perfil
                    </h1>
                </div>
            </section>

            <div className="container">
                <form id="userProfileInformationForm" onSubmit={salvarPerfil} method="post">
                    <div className="form-wrapper">
                        <div className="edit-form form">
                            <section id="editProfile-userInfo" className="editProfile-profileInfo">
                                <div className="form-group-header">
                                    <input type="hidden" value="AVATAR" name="extraInfosForm[0].type"/>
                                        <input id="avatar-value" type="hidden" value="" name="extraInfosForm[0].value"/>
                                            <h3 className="form-group-header-title bootcamp-text-color">Dados
                                                gerais</h3>
                                </div>
                                <div className="form-line">
                                    <div className="form-line-field">
                                        <label className="form-label bootcamp-text-color"
                                               htmlFor="userProfileInformationForm-name">Nome completo</label>
                                        <input id="userProfileInformationForm-name" name="name"
                                               className="form-input checklist-field" required="required" type="text" onChange={e=>setNomeCompleto(e.target.value)}
                                               placeholder={usuario.nomeCompleto}/>
                                    </div>
                                    <div className="form-line-field">
                                        <label htmlFor="userProfileInformationForm-nameForCertificate"
                                               className="form-label bootcamp-text-color">Nome nos certificados
                                            <span
                                                className="form-warning bootcamp-text-color">(alteração somente 1 vez)</span>
                                        </label>
                                        <input id="userProfileInformationForm-nameForCertificate"
                                               name="nameForCertificate" className="form-input checklist-field"
                                               required="required" type="text" placeholder={usuario.nomeNoCertificado} onChange={e=>setNomeNosCertificados(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-line">
                                    <div className="form-line-field">
                                        <label htmlFor="userProfileInformationForm-username"
                                               className="form-label bootcamp-text-color">Usuário na URL
                                            <span className="form-warning bootcamp-text-color">(só minúsculas, min 6 caracteres)</span>
                                        </label>
                                        <div className="urlName">
                                            <input className="form-input editProfile-form-input-urlHost" type="text"
                                                   disabled="" value="http://localhost:3000/user/"/>
                                                <input id="userProfileInformationForm-username" name="username"
                                                       className="form-input editProfile-form-input-urlUsername checklist-field"
                                                       required="required" type="text" placeholder={usuario.usuarioNaUrl}
                                                       autoComplete="false" onChange={e=>setUsuarioNaUrl(e.target.value)}/>
                                        </div>
                                        <div className="form-line-field">
                                            <label className="form-label bootcamp-text-color"
                                                   htmlFor="userProfileInformationForm-name">Cpf</label>
                                            <input id="userProfileInformationForm-name" name="cpf"
                                                   className="form-input checklist-field" required="required" type="text" onChange={e=>setCpf(e.target.value)}
                                                   placeholder={usuario.cpf}/>
                                        </div>

                                        <div className="form-line-field">
                                            <label className="form-label bootcamp-text-color"
                                                   htmlFor="userProfileInformationForm-name">Selecione a foto</label>
                                            <input id="userProfileInformationForm-name" name="cpf"
                                                   className="form-input checklist-field" required="required" type="text" onChange={e=>setAvatar(e.target.value)}
                                                   placeholder={usuario.avatar}/>
                                        </div>
                                    </div>
                                    <div className="form-line-field">
                                        <label htmlFor="email" className="form-label bootcamp-text-color">E-mail</label>
                                        <input id="email" className="form-input" type="text" disabled=""
                                               value={usuario.email}/>
                                    </div>
                                </div>
                                <div className="form-line changePassword-wrapper">
                                    <a className="profile-changePassword" href="#changePassword-form gravatar">Alterar
                                        senha</a>
                                </div>
                                <div className="form-group-header">
                                    <h3 className="form-group-header-title bootcamp-text-color">Sobre você</h3>
                                </div>
                                <label htmlFor="userProfileInformationForm-biography.bio"
                                       className="form-label bootcamp-text-color">Biografia</label>
                                <textarea id="userProfileInformationForm-biography.bio" name="biography.bio"
                                          className="form-input form-textarea checklist-field" placeholder={usuario.biografia} onChange={e=>setBiografia(e.target.value)}></textarea>
                                <div className="form-birth-date">
                                    <div>


                                        <div className="birth-date-label-group">
                                            <label htmlFor="birthDateDay" className="form-label bootcamp-text-color">Data
                                                de nascimento</label>
                                            <div className="moreInfo__description moreInfo__birth-date">
                                                <p className="moreInfo__birth-date-description-label">Coletamos essa
                                                    informação para conhecermos melhor o perfil de estudantes da Alura.
                                                    Sua data de nascimento não será exibida no seu perfil público.</p>
                                                <p className="moreInfo-question-icon"></p>
                                            </div>
                                        </div>
                                        {dataDeNascimento()}
                                    </div>
                                    <span className="form-warning bootcamp-text-color">Exemplo: 08 / 07 / 1997</span>
                                </div>
                                <div className="form-line">
                                    <div className="select-occupation form-line-field">
                                        <label htmlFor="userProfileInformationForm-occupation"
                                               className="form-label bootcamp-text-color">Ocupação</label>
                                        <select id="userProfileInformationForm-occupation"
                                                className="form-input checklist-field OCCUPATION"
                                                name="extraInfosForm[1].value" onChange={e=>setOcupacao(e.target.value)}>
                                            <option value="">Selecione uma opção</option>
                                            <option value="WORKING">Trabalhando</option>
                                            <option value="STUDYING">Estudando</option>
                                            <option value="WORKING_STUDYING">Trabalhando e estudando</option>
                                        </select>
                                        <input type="hidden" value="OCCUPATION" name="extraInfosForm[1].type"/>
                                    </div>
                                    <div className="form-line-field wrapper-occupation-field display-none" >
                                        <label htmlFor="userProfileInformationForm-COMPANY"
                                               className="form-label bootcamp-text-color">
                                            Empresa
                                        </label>
                                        <input type="hidden" value="COMPANY" name="extraInfosForm[2].type"/>
                                            <input id="userProfileInformationForm-COMPANY"
                                                   className="form-input checklist-field COMPANY WORKING WORKING_STUDYING occupation-field"
                                                   onChange={e=>setEmpresa(e.target.value)} placeholder={usuario.empresa} name="extraInfosForm[2].value"/>
                                    </div>
                                    <div className="form-line-field wrapper-occupation-field display-none" >
                                        <label htmlFor="userProfileInformationForm-POSITION"
                                               className="form-label bootcamp-text-color">
                                            Cargo
                                        </label>
                                        <input type="hidden" value="POSITION" name="extraInfosForm[3].type"/>
                                            <input id="userProfileInformationForm-POSITION"
                                                   className="form-input checklist-field POSITION WORKING WORKING_STUDYING occupation-field"
                                                   onChange={e=>setCargo(e.target.value)}placeholder={usuario.cargo} name="extraInfosForm[3].value"/>
                                    </div>
                                    <div className="form-line-field wrapper-occupation-field display-none">
                                        <label htmlFor="userProfileInformationForm-INSTITUTION"
                                               className="form-label bootcamp-text-color">
                                            Instituição
                                        </label>
                                        <input type="hidden" value="INSTITUTION" name="extraInfosForm[4].type"/>
                                            <input id="userProfileInformationForm-INSTITUTION"
                                                   className="form-input checklist-field INSTITUTION STUDYING WORKING_STUDYING occupation-field"
                                                   onChange={e=>setInstituicao(e.target.value)} placeholder={usuario.instituicao} name="extraInfosForm[4].value"/>
                                    </div>
                                    <div className="form-line-field wrapper-occupation-field display-none">
                                        <label htmlFor="userProfileInformationForm-COURSE"
                                               className="form-label bootcamp-text-color">
                                            Curso
                                        </label>
                                        <input type="hidden" value="COURSE" name="extraInfosForm[5].type"/>
                                            <input id="userProfileInformationForm-COURSE"
                                                   className="form-input checklist-field COURSE STUDYING WORKING_STUDYING occupation-field"
                                                   onChange={e=>setCurso(e.target.value)} placeholder={usuario.curso} name="extraInfosForm[5].value"/>
                                    </div>
                                </div>
                                <div className="form-group-header">
                                    <h3 className="form-group-header-title bootcamp-text-color">Suas redes</h3>
                                </div>
                                <div className="form-line">
                                    <div className="form-line-field ">
                                        <label htmlFor="userProfileInformationForm-LINKEDIN"
                                               className="form-label bootcamp-text-color">
                                            Linkedin
                                            <span className="form-warning bootcamp-text-color">
                        (link completo)
                        </span>
                                        </label>
                                        <input type="hidden" value="LINKEDIN" name="extraInfosForm[6].type"/>
                                            <input id="userProfileInformationForm-LINKEDIN"
                                                   className="form-input checklist-field LINKEDIN" placeholder={usuario.linkedin}
                                                   onChange={e=>setLinkedin(e.target.value)}
                                                   name="extraInfosForm[6].value"/>
                                    </div>
                                    <div className="form-line-field ">
                                        <label htmlFor="userProfileInformationForm-TWITTER"
                                               className="form-label bootcamp-text-color">
                                            Twitter
                                            <span className="form-warning bootcamp-text-color">
                        (link completo)
                        </span>
                                        </label>
                                        <input type="hidden" value="TWITTER" name="extraInfosForm[7].type"/>
                                            <input id="userProfileInformationForm-TWITTER"
                                                   className="form-input checklist-field TWITTER  " placeholder={usuario.twitter}
                                                   onChange={e=>setTwitter(e.target.value)}
                                                   name="extraInfosForm[7].value"/>
                                    </div>
                                </div>
                                <div className="form-group-header">
                                    <h3 className="form-group-header-title bootcamp-text-color">Seus projetos na
                                        web</h3>
                                </div>
                                <div className="form-line">
                                    <div className="form-line-field ">
                                        <label htmlFor="userProfileInformationForm-GITHUB"
                                               className="form-label bootcamp-text-color">
                                            Github
                                            <span className="form-warning bootcamp-text-color">
                        (link completo)
                        </span>
                                        </label>
                                        <input type="hidden" value="GITHUB" name="extraInfosForm[8].type"/>
                                            <input id="userProfileInformationForm-GITHUB"
                                                   className="form-input checklist-field GITHUB  " placeholder={usuario.github}
                                                   onChange={e=>setGithub(e.target.value)}
                                                   placeholder={usuario.github} name="extraInfosForm[8].value"/>
                                    </div>
                                    <div className="form-line-field ">
                                        <div className="portfolio-label-wrapper">
                           <span>
                              <label htmlFor="userProfileInformationForm-PORTFOLIO"
                                     className="form-label bootcamp-text-color">Link personalizado</label>
                              <div className="moreInfo__description moreInfo__portfolio">
                                 <p className="moreInfo__portfolio-description-label">Aqui você pode divulgar seu portfólio, canal no YouTube, site pessoal, blog etc. O botão de acesso aparecerá no seu perfil e terá visibilidade <span
                                     className="strong">para toda comunidade Alura</span>, como também em mecanismos de busca, se seu perfil for público.</p>
                                 <p className="moreInfo-question-icon"></p>
                              </div>
                           </span>
                                            <span className="form-warning bootcamp-text-color">
                           (link completo)
                           </span>
                                        </div>
                                        <input type="hidden" value="PORTFOLIO" name="extraInfosForm[9].type"/>
                                            <input id="userProfileInformationForm-PORTFOLIO"
                                                   className="form-input checklist-field PORTFOLIO  "
                                                   onChange={e=>setLinkPersonalizado(e.target.value)}
                                                   placeholder={usuario.linkPersonalizado} name="extraInfosForm[9].value"/>
                                    </div>
                                </div>
                                <div className="form-group-header">
                                </div>
                                <div className="form-group-header">
                                    <h3 className="form-group-header-title bootcamp-text-color">Privacidade do
                                        perfil</h3>
                                </div>
                                <div className="form-line">
                                    <div className="form-line-field form-privacy-container">
                                        {privacidadeDoPerfil()}
                                        <span className="form-warning bootcamp-text-color">É necessário aguardar alguns dias para que suas informações sumam das ferramentas de busca (Google, Bing, etc), pois é necessário que elas façam a reindexação das páginas. Lembre-se também de clicar em "Salvar" logo abaixo para que a mudança de privacidade seja feita.</span>
                                    </div>
                                </div>
                                <div className="form-submit">
                                    <input type="submit" id="form-submit-user-profile"
                                           className="form-submit-button button buttonAction" value="Salvar"/>
                                </div>
                            </section>
                        </div>
                        <div className="checklist-wrapper">
                            <div id="profile_checklist-box" className="profile_checklist">
                            </div>
                        </div>
                    </div>
                </form>
                <section id="avatar-modal" className="avatar__modal">
                    <div className="avatar__form">
                        <div className="form-header">
                            <h3 className="form-header-title">Foto do perfil</h3>
                        </div>
                        <input id="avatar-upload-file" type="file" accept="image/png, image/jpeg"/>
                            <a id="avatar-close-modal" className="editProfile-closeModal" href="#">X</a>
                            <div className="headline-profile-avatar-container">
                                <img
                                    src="https://www.gravatar.com/avatar/6030f04345752f96aaf23f5a0095db29.png?r=PG&amp;size=60x60&amp;date=2021-09-26&amp;d=https%3A%2F%2Fcursos.alura.com.br%2Fassets%2Fimages%2Fforum%2Favatar_l.png"
                                    alt="Foto de Leonel Dorneles Porto" className="headline-profile-avatar"
                                    onError="avatarSourceUrl.changeSourcePhoto();"/>
               <span className="provider-icon">
               <img id="image-source-icon-url" src="/assets/images/profile/icon-gravatar.svg"
                    alt="Icone do provedor da foto: Gravatar"/>
               </span>
                            </div>
                            <div className="img-upload-progress-wrapper">
                                <div className="img-upload-progress">
                                    <span className="display-none"></span>
                                    <p className="img-upload-progress-text"></p>
                                </div>
                            </div>
                            <div className="alert" data-category="alert" role="alert">
                                <img alt="" className="alert-icon" src="/assets/images/gnarus/alert/alert.svg"/>
                                    <p className="alert-message"></p>
                            </div>
                            <div className="avatar__form__description">
                                <p>
                                    Caso você não suba nenhum arquivo, utilizamos o
                                    Github ou
                                    <a className="gravatar__link" href="https://br.gravatar.com/"
                                       target="_blank">Gravatar</a> (usando o <strong>mesmo e-mail</strong> de acesso da
                                    Alura).
                                </p>
                            </div>
                            <div className="form-submit">
                                <button id="avatar-remove"
                                        className="form-submit-button button buttonCancel --disabled">Remover foto
                                </button>
                                <button id="avatar-upload" className="form-submit-button button buttonAction">Enviar
                                    foto
                                </button>
                            </div>
                    </div>
                </section>
                <section id="changePassword-form" className="editProfile-passwordInfo display-none">
                    <div className="editProfile-passwordInfo-changePassword">
                        <a className="editProfile-closeModal" href="#">X</a>
                        <div className="form-header">
                            <h3 className="form-header-title">Alterar senha</h3>
                        </div>
                        <form id="changePasswordForm" className="edit-profile-form" action="/my_profile/password"
                              method="post">
                            <label htmlFor="changePasswordForm-oldPassword" className="form-label">Senha atual</label>
                            <input id="changePasswordForm-oldPassword" name="oldPassword" type="password"
                                   className="form-input" required="required" value=""/>
                                <label htmlFor="changePasswordForm-newPassword" className="form-label">Nova
                                    senha</label>
                                <input id="changePasswordForm-newPassword" name="newPassword" pattern=".{6,}"
                                       type="password" className="form-input" required="required" value=""/>
                                    <label htmlFor="changePasswordForm-newPasswordConfirmation" className="form-label">Confirme
                                        a nova senha</label>
                                    <input id="changePasswordForm-newPasswordConfirmation"
                                           name="newPasswordConfirmation" pattern=".{6,}" type="password"
                                           className="form-input" required="required" value=""/>
                                        <div className="form-submit">
                                            <input type="submit" className="form-submit-button button buttonAction"
                                                   value="Salvar"/>
                                        </div>
                        </form>
                    </div>
                </section>
            </div>
        </section>
    );
}
export default Perfil;