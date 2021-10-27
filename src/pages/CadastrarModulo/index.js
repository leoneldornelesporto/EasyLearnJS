import React, {useContext, useState} from 'react';
import {ModuloContext} from "../../context/ModuloContext";
import {CursoContext} from "../../context/CursoProvider";

const CadastrarModulo = () => {

    const {cursos,retornarTodosOsCursos} = useContext(CursoContext);
    const {modulo,salvarModulo,alterarModulo,deletarModulo,retornaTodosOsModulos} = useContext(ModuloContext);
    const [indice,setIndice] = useState(null);
    const [titulo,setTitulo] = useState(null);
    const [tituloSecundario,setTituloSecundario] = useState(null);
    const [cursoId,setCursoId] = useState(null);
    const [cursoSelected,setCategoriaSelected] = useState(null);

    if (modulo===null){
        retornaTodosOsModulos();
    }

    if (cursos===null){
        retornarTodosOsCursos();
    }

    function retornaCursos(){
        try{
            return(
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        {cursoSelected===null?"Escolha o Curso":cursoSelected}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            cursos.map((value, index)=>{
                                return (
                                    <a onClick={e => setCursoId(value.id)}>
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

    function retornarModulos(){
        try{
            return(
                <>
                    {
                        modulo.map((value, index)=>{
                            return (
                                <tr>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.indice}</td>
                                    <td>{value.titulo}</td>
                                    <td>{value.tituloSecundario}</td>
                                    <td>{value.nomeCurso}</td>
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

    function criarNovoModulo(){
        function salvar(){
            salvarModulo(indice,titulo,tituloSecundario,cursoId);

            if (modulo!==null){
                alert("Salvo com Sucesso");
                retornarModulos();
            }
        }

        return(
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#Salvar">Criar Novo Modulo</button>

                <div className="modal fade" id="Salvar" tabIndex="-1" role="dialog"
                     aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalLongoExemplo">Criar Novo Modulo</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={salvar}>
                                <div className="form-group">
                                    <h5>Escolha o Curso</h5>
                                    {retornaCursos()}
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Indice" onChange={e => setIndice(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Titulo" onChange={e => setTitulo(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Titulo Secundário" onChange={e => setTituloSecundario(e.target.value)}/>
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
            alterarModulo(id,indice,titulo,tituloSecundario,cursoId);

            if (modulo!==null){
                alert("Alterado com Sucesso");
                retornarModulos();
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
                                    <h5>Escolha o Curso</h5>
                                    {retornaCursos()}
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Indice" onChange={e => setIndice(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Titulo" onChange={e => setTitulo(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Titulo Secundário" onChange={e => setTituloSecundario(e.target.value)}/>
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
            deletarModulo(id);
            retornarModulos();
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
                    <th scope="col">Indice</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Titulo Secundario</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Operações</th>
                </tr>
                </thead>
                <tbody>
                {retornarModulos()}
                </tbody>
            </table>
            {criarNovoModulo()}
        </>
    );
}

export default CadastrarModulo;