import React, {useContext, useState} from 'react';
import {CategoriaContext} from "../../context/CategoriaProvider";
import {CursoContext} from "../../context/CursoProvider";
import {AuthUserContext} from "../../context/AuthUserProvider";
import Cookies from "js-cookie";

const CadastrarCurso = () => {

    const {aluno,signInV1} = useContext(AuthUserContext);
    const {categoria,retornaTodasCategorias} = useContext(CategoriaContext);
    const {cursos,retornarTodosOsCursos,saveCurso,deletarCurso} = useContext(CursoContext);
    const [nomeCurso,setNomeCurso] = useState(null);
    const [descricao,setDescricao] = useState(null);
    const [cargaHoraria,setCargaHoraria] = useState(null);
    const [imagemIcon,setImagemIcon] = useState(null);
    const [ativo,setAtivo] = useState(false);
    const [categoriaId,setCategoriaId] = useState(null);
    const [categoriaSelected,setCategoriaSelected] = useState(null);

    if (aluno===''){
        signInV1(Cookies.get('email'),Cookies.get('pass'))
    }

    if (cursos===null){
        retornarTodosOsCursos();
    }

    if (categoria===null){
        retornaTodasCategorias();
    }

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

    function criarNovoCurso(){

        function salvar(){
            saveCurso(aluno.id,nomeCurso,descricao,cargaHoraria,categoriaId,imagemIcon,ativo);

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
                                <h5 className="modal-title" id="TituloModalLongoExemplo">Título do modal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={salvar}>
                                <div className="form-group">
                                    <h5>Escolha a categoria</h5>
                                    {retornaCategoria()}
                                    <h5>Nome do Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Categoria" onChange={e => setNomeCurso(e.target.value)}/>
                                    <h5>Descrição</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Categoria" onChange={e => setDescricao(e.target.value)}/>
                                    <h5>Carga Horária</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Categoria" onChange={e => setCargaHoraria(e.target.value)}/>
                                    <h5>Icone do Curso</h5>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Categoria" onChange={e => setImagemIcon(e.target.value)}/>
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

        function alterar(e){
            e.preventDefault();
            //updateCategoria(id,categoriaSelected);

            if (cursos!==null){
                alert("Alterado com Sucesso");
                retornarTodosOsCursos();
            }
        }

        return(
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#Salvar-".concat(id)}>
                    Editar
                </button>

                <div className="modal fade" id={"Salvar-".concat(id)} tabIndex="-1" role="dialog"
                     aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalLongoExemplo">Título do modal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={alterar}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Categoria" onChange={e => setCategoriaSelected(e.target.value)}/>
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