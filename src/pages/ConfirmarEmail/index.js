import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {EmailContext} from "../../context/EmailProvider";

const ConfirmarEmail = () => {

    const { id } = useParams();
    const {resposta,ativaOEmail} = useContext(EmailContext);


    if (resposta===null){
        ativaOEmail(id);
    }

    return(
        <>
            {resposta!==null?<h3>Usuário Ativo com Sucesso, clique <a href='/signin'>aqui</a> para fazer login</h3>:<h3>Usuário Inválido</h3>}
        </>
    );
}

export default ConfirmarEmail;