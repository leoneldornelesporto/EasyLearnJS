import React from 'react';
import CardNota from "../CardNota";
import {ListaNotas,ListaNotasItem} from './styles';

function FormularioCadastro(prop){
    console.log(prop.notas);
    return(
        <ListaNotas>
            {prop.notas.map((nota,index)=>{
                return(
                <ListaNotasItem key={index}>
                    <CardNota titulo={nota.titulo} texto={nota.nota}/>
                </ListaNotasItem>);
            })}
        </ListaNotas>
    );
}
export default FormularioCadastro;