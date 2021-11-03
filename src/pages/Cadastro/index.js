import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AlunoContext} from "../../context/AlunoProvider";
import {ProfessorContext} from "../../context/ProfessorProvider";
import {TutorContext} from "../../context/TutorProvider";

const Cadastro = () => {

    const [cpf, setCpf] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [email, setEmail] = useState('');

    const {result,salvarAluno} = useContext(AlunoContext);
    const {resultado,salvarProfessor} = useContext(ProfessorContext);
    const {re,salvarTutor} = useContext(TutorContext);
    const [categoriaSelected,setCategoriaSelected] = useState(null);

    async function cadastro(e){
        e.preventDefault();

        if (password === passwordRepeat){

            if (categoriaSelected==="Aluno"){
                salvarAluno(email,password,username,cpf);
            }
            else{
                if (categoriaSelected==="Professor"){
                    salvarProfessor(username,cpf,email,password);
                }
                else {
                    salvarTutor(username,cpf,email,password);
                }
            }

            try{
                if(result.status===400 || resultado.status===400 || re.status===400){
                    alert("Usuário já Cadastrado =(");
                }else{
                    if(result.id !== undefined || resultado.id !== undefined || re.id !== undefined ) {
                        alert("Cadastro realizado com sucesso =)");
                        window.location.href = "/signin";
                    }else{
                        alert("Erro Interno, favor entrar em contato com a EasyLearn");
                    }
                }
            }catch (e) {
                alert("Usuário já Cadastrado =(");
            }

        }else{
            alert("Senha Incorreta");
        }
    }

    function body(){
        try{
            return(
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                        <label htmlFor="tab-1" className="tab">Cadastre-se</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2"
                                                                                              className="tab"></label>
                        <div className="login-form">
                            <form onSubmit={cadastro}>
                                <div className="sign-in-htm">
                                    <div className="group">
                                        <label htmlFor="user" className="label">Nome</label>
                                        <input type="text" className="input"
                                               onChange={e => setUsername(e.target.value)}/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Cpf</label>
                                        <input type="number" placeholder="000111222333" className="input"
                                               onChange={e => setCpf(e.target.value)}/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Senha</label>
                                        <input id="pass" type="password" className="input" data-type="password"
                                               onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Senha Novamente</label>
                                        <input id="pass" type="password" className="input" data-type="password"
                                               onChange={e => setPasswordRepeat(e.target.value)}/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Email</label>
                                        <input id="pass" type="text" className="input"
                                               onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="group">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                {categoriaSelected === null ? "Escolha o Papel" : categoriaSelected}
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a>
                                                    <a className="dropdown-item"
                                                       onClick={e => setCategoriaSelected("Aluno")}>Aluno</a>
                                                </a>
                                                <a>
                                                    <a className="dropdown-item"
                                                       onClick={e => setCategoriaSelected("Professor")}>Professor</a>
                                                </a>
                                                <a>
                                                    <a className="dropdown-item"
                                                       onClick={e => setCategoriaSelected("Tutor")}>Tutor</a>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <input type="submit" className="button" value="Cadastrar"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="foot-lnk">
                                        <Link for="tab-1" to="/signin">Já é membro?</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }catch (e) {
            console.log(e);
        }
    }

    return(body());
}
export default Cadastro;