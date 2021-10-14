import React, {useContext, useState} from 'react';
import {AulaContext} from "../../context/AulaProvider";
import {ModuloContext} from "../../context/ModuloContext";

const CadastrarModulo = () => {

    const {aula,retornarTodasAsAulas,saveAula,updateAula,deleteAula} = useContext(AulaContext);
    const {modulo,retornaTodosOsModulos} = useContext(ModuloContext);
    const [indice,setIndice] = useState(null);
    const [titulo,setTitulo] = useState(null);
    const [tituloSecundario,setTituloSecundario] = useState(null);
    const [idCurso,setIdCurso] = useState(null);
    const [idAula,setIdAula] = useState([]);
    const [aulaSelected,setAulaSelected] = useState(null);
    const [subititulo,setSubititulo] = useState([]);
    const [urlVideo,setUrlVideo] = useState(null);
    const [transcricao,setTranscricao] = useState(null);
    const arrayDeIds = [];

    if (modulo===null){
        retornaTodosOsModulos();
    }

    if (aula===null){
        retornarTodasAsAulas();
    }

    function retornaAula(){
        try{
            return(
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        {aulaSelected===null?"Escolha a Aula":aulaSelected}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            aula.map((value, index)=>{
                                return (
                                    <div>
                                    <a onClick={e => setIdAula(value.id)}>
                                        <a className="dropdown-item"  onClick={e => setAulaSelected(value.titulo)}>{value.titulo}</a>
                                    </a>
                                    </div>
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

    function retornarAulas(){
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

    function criarNovaAula(){
        function salvar(){
            saveAula(indice,titulo,urlVideo,transcricao);

            if (aula!==null){
                alert("Salvo com Sucesso");
                retornarAulas();
            }
        }

        return(
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#Salvar">Criar Nova Aula</button>

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
                                    <h5>Escolha a Aula</h5>
                                    {retornaAula()}
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Indice" onChange={e => setIndice(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Titulo" onChange={e => setTitulo(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a url do video" onChange={e => setUrlVideo(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Transcricao" onChange={e => setTranscricao(e.target.value)}/>
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
            updateAula(id,indice,titulo,urlVideo,transcricao);

            if (aula!==null){
                alert("Alterado com Sucesso");
                retornarAulas();
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
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Indice" onChange={e => setIndice(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira o Titulo" onChange={e => setTitulo(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a url do video" onChange={e => setUrlVideo(e.target.value)}/>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Transcricao" onChange={e => setTranscricao(e.target.value)}/>
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
            deleteAula(id);
            retornarAulas();
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
                    <th scope="col">tituloSecundario</th>
                    <th scope="col">Operações</th>
                </tr>
                </thead>
                <tbody>
                {retornarAulas()}
                </tbody>
            </table>
            {criarNovaAula()}
        </>
    );
}

export default CadastrarModulo;