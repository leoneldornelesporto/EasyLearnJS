import React, {useContext, useState} from 'react';
import {CategoriaContext} from "../../context/CategoriaProvider";
import {isLogged} from "../../context/AuthHandler";

const CadastrarCategoria = () => {

    const {categoria,resposta,retornaTodasCategorias,saveCategoria,updateCategoria,excluirCategoria} = useContext(CategoriaContext);
    const [nome,setNome] = useState('');

    if (categoria===null){
        retornaTodasCategorias();
    }

    function retornarCategoria(){
        try{
            return(
                <>
                    {
                        categoria.map((value, index)=>{
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

    function criarNovaCategoria(){

        function salvar(e){
            e.preventDefault();
            saveCategoria(nome);

            if (resposta!==null){
                alert("Salvo com Sucesso");
                retornaTodasCategorias();
            }
        }

        return(
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#Salvar">Criar Nova Categoria</button>

                <div className="modal fade" id="Salvar" tabIndex="-1" role="dialog"
                     aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalLongoExemplo">Criar Nova Categoria</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={salvar}>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Categoria" onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                    <button type="submit" className="btn btn-primary">Salvar mudan??as</button>
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
            updateCategoria(id,nome);

            if (resposta!==null){
                alert("Alterado com Sucesso");
                retornaTodasCategorias();
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
                                <h5 className="modal-title" id="TituloModalLongoExemplo">Alterar Categoria</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={alterar}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Insira a Categoria" onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                    <button type="submit" className="btn btn-primary">Salvar mudan??as</button>
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
            excluirCategoria(id);
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

    function body(){
        try{
            if(isLogged()){
                return(
                    <>
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Opera????es</th>
                            </tr>
                            </thead>
                            <tbody>
                            {retornarCategoria()}
                            </tbody>
                        </table>
                        {criarNovaCategoria()}
                    </>
                );
            }else{
                window.location.href = '/signin'; //manda para a rota home
            }
        }catch (e) {
            console.log(e);
        }
    }

    return(body());
}

export default CadastrarCategoria;