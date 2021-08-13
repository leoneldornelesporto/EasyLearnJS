import React from 'react';
import {MySection,Cabecalho,Texto,Titulo} from './styles';

function CardNota(props){
    return(
        <MySection>
            <Cabecalho>
                <Texto>{props.titulo}</Texto>
            </Cabecalho>
            <Titulo>{props.texto}</Titulo>
        </MySection>
    );
}
export default CardNota;