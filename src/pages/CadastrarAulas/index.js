import React, {useContext, useState} from 'react';
import {CategoriaContext} from "../../context/CategoriaProvider";
import {AulaContext} from "../../context/AulaProvider";

const CadastrarAula = () => {

    const {aula,retornarTodasAsAulas,saveAula,updateAula,deleteAula} = useContext(AulaContext);
    const {categoria,resposta,retornaTodasCategorias,saveCategoria,updateCategoria,excluirCategoria} = useContext(CategoriaContext);
    const [nome,setNome] = useState('');

    const [indice,setIndice] = useState(null);
    const [titulo,setTitulo] = useState(null);
    const [urlVideo,setUrlVideo] = useState(null);
    const [transcricao,setTranscricao] = useState(null);

    if (aula===null){
        retornarTodasAsAulas();
    }

    console.log(aula)

    function retornarAulas(){
        try{
            return(
                <>
                    {
                        aula.map((value, index)=>{
                            return (
                                <tr>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.indice}</td>
                                    <td>{value.titulo}</td>
                                    <td>{value.urlVideo}</td>
                                    <td>{value.transcricao}</td>
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
            retornaTodasCategorias();
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
                    <th scope="col">urlVideo</th>
                    <th scope="col">transcricao</th>
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

export default CadastrarAula;