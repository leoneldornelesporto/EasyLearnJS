import React, {useContext, useEffect, useState} from 'react';
import {CategoriaContext} from "../../context/CategoriaProvider";
import {CursoContext} from "../../context/CursoProvider";
import {AuthUserContext} from "../../context/AuthUserProvider";
import Cookies from "js-cookie";
import {FormacaoContext} from "../../context/FormacaoProvider";

const CadastrarCurso = () => {

    const {aluno,signInV1} = useContext(AuthUserContext);
    const {categoria,retornaTodasCategorias} = useContext(CategoriaContext);
    const {formacao,retornaTodasFormacoesPorCategoriaId} = useContext(FormacaoContext);
    const {cursos,retornarTodosOsCursos,saveCurso,alterarCurso,deletarCurso} = useContext(CursoContext);
    const [nomeCurso,setNomeCurso] = useState(null);
    const [descricao,setDescricao] = useState(null);
    const [cargaHoraria,setCargaHoraria] = useState(null);
    const [imagemIcon,setImagemIcon] = useState(null);
    const [ativo,setAtivo] = useState(false);
    const [transcricao,setTranscricao] = useState(null);
    const [valorCurso,setValorCurso] = useState(null);
    const [categoriaId,setCategoriaId] = useState(null);
    const [categoriaSelected,setCategoriaSelected] = useState(null);
    const [formacaoId,setFormacaoId] = useState(null);
    const [formacaoSelected,setFormacaoSelected] = useState(null);

    if (aluno===''){
        signInV1(Cookies.get('email'),Cookies.get('pass'))
    }

    if (cursos===null){
        retornarTodosOsCursos();
    }

    if (categoria===null){
        retornaTodasCategorias();
    }

    console.log(nomeCurso)
    console.log(categoriaId)
    console.log(descricao)
    console.log(cargaHoraria)
    console.log(imagemIcon)
    console.log(categoriaId)
    console.log(formacaoId)
    console.log(formacaoSelected)

    if(formacao===null){
        retornaTodasFormacoesPorCategoriaId(categoriaId===null?0:categoriaId);
    }


    console.log(formacao)

    function retornaCategoria(){
        try{
            return(
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        {categoriaSelected===null?"Escolha a categoria":categoriaSelected}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {
                        categoria.map((value, index)=>{
                            return (
                                <a onClick={e => setCategoriaId(value.id)}>
                                <a className="dropdown-item"  onClick={e => setCategoriaSelected(value.nome)}>{value.nome}</a>
                                </a>
                            );
                        })
                    }
                    </div>
                </div>
            );
        }
        catch (e) {
            return(<></>);
        }
    }

    function retornaCursos(){
        try{
            return(
                <>
                    {
                        cursos.map((value, index)=>{
                            return (
                                <tr>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.nome}</td>
                                    <td>{value.descricao}</td>
                                    <td>{value.cargaHoraria}</td>
                                    <td>{value.categoria}</td>
                                    <td>{value.nomeProfessor}</td>
                                    <td>{value.biografia}</td>
                                    <td>{value.linkedin}</td>
                                    <td>{value.ativo?"Ativo":"Desativado"}</td>
                                    <td>{value.transcricao}</td>
                                    <td>{value.valorCurso}</td>
                                    <td>
                                        <td>{editar(value.id)}</td>
                                        <td>{excluir(value.id)}</td>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </>
            );
        }
        catch (e) {
            return(<></>);
        }
    }

    function retornaTodasFormacoes() {
        try{
            return(
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        {formacaoSelected===null?"Escolha a Formação":formacaoSelected}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            formacao.map((value, index)=>{
                                return (
                                    <a onClick={e => setFormacaoId(value.id)}>
                                        <a className="dropdown-item"  onClick={e => setFormacaoSelected(value.titulo)}>{value.titulo}</a>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            );
        }
        catch (e) {
            return(<></>);
        }
    }

    function criarNovoCurso(){
        function salvar(){
            saveCurso(aluno.id,nomeCurso,descricao,cargaHoraria,categoriaId,imagemIcon,ativo,transcricao,valorCurso,formacaoId);

            if (cursos!==null){
                alert("Salvo com Sucesso");
                retornarTodosOsCursos();
            }
        }

        return(
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#Salvar">Criar Novo Curso</button>

                <div className="modal fade" id="Salvar" tabIndex="-1" role="dialog"
                     aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalLongoExemplo">Salvar Curso</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={salvar}>
                                <div className="form-group">
                                    <h5>Escolha a categoria</h5>
                                    {retornaCategoria()}
                                    <h5>Escolha a formacao</h5>
                                    {retornaTodasFormacoes()}
                                    <h5>Nome do Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Nome do Curso" onChange={e => setNomeCurso(e.target.value)}/>
                                    <h5>Descrição</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Descrição" onChange={e => setDescricao(e.target.value)}/>
                                    <h5>Carga Horária</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Carga Horária" onChange={e => setCargaHoraria(e.target.value)}/>
                                    <h5>Icone do Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Link do Icone do Curso" onChange={e => setImagemIcon(e.target.value)}/>
                                    <h5>Porcentagem da Descrição do Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Porcentagem da Transcrição do curso" onChange={e => setTranscricao(e.target.value)}/>
                                    <h5>Valor Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Valor do Curso" onChange={e => setValorCurso(e.target.value)}/>
                                    <h5>Ativo</h5>
                                    <input type="checkbox" id="exampleInputEmail1" onClick={e => setAtivo(true)}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                    <button type="submit" className="btn btn-primary">Salvar mudanças</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function editar(id){

        function alterar(){

            alterarCurso(id,nomeCurso,descricao,cargaHoraria,categoriaId,imagemIcon,ativo,transcricao,valorCurso,formacaoId);

            if (cursos!==null){
                alert("Alterado com Sucesso");
                retornarTodosOsCursos();
            }
        }

        return(
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#Editar-".concat(id)}>
                    Editar
                </button>

                <div className="modal fade" id={"Editar-".concat(id)} tabIndex="-1" role="dialog"
                     aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalLongoExemplo">Alterar Curso</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={alterar}>
                                <div className="form-group">
                                    <h5>Escolha a categoria</h5>
                                    {retornaCategoria()}
                                    <h5>Escolha a formacao</h5>
                                    {retornaTodasFormacoes()}
                                    <h5>Nome do Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Nome do Curso" onChange={e => setNomeCurso(e.target.value)}/>
                                    <h5>Descrição</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Descrição" onChange={e => setDescricao(e.target.value)}/>
                                    <h5>Carga Horária</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Carga Horária" onChange={e => setCargaHoraria(e.target.value)}/>
                                    <h5>Icone do Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Link do Icone do Curso" onChange={e => setImagemIcon(e.target.value)}/>
                                    <h5>Porcentagem da Descrição do Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Porcentagem da Transcrição do curso" onChange={e => setTranscricao(e.target.value)}/>
                                    <h5>Valor Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Valor do Curso" onChange={e => setValorCurso(e.target.value)}/>
                                    <h5>Ativo</h5>
                                    <input type="checkbox" id="exampleInputEmail1" onClick={e => setAtivo(true)}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                    <button type="submit" className="btn btn-primary">Salvar mudanças</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function excluir(id){

        function deletar(){
            deletarCurso(id);
            retornarTodosOsCursos();
        }

        return(
            <div>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target={"#Excluir-".concat(id)}>
                    Excluir
                </button>

                <div className="modal fade" id={"Excluir-".concat(id)} tabIndex="-1" role="dialog"
                     aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalLongoExemplo">Tem certeza que deseja excluir?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={deletar}>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                    <button type="submit" className="btn btn-primary">Sim</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Carga Horaria</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Nome do Professor</th>
                    <th scope="col">Biografia</th>
                    <th scope="col">Linkedin</th>
                    <th scope="col">Ativo</th>
                    <th scope="col">Transcricao</th>
                    <th scope="col">Valor Curso</th>
                    <th scope="col">Operações</th>
                </tr>
                </thead>
                <tbody>
                {retornaCursos()}
                </tbody>
            </table>
            {criarNovoCurso()}
        </>
    );
}

export default CadastrarCurso;