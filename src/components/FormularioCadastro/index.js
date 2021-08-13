import React, {useState} from 'react';
import {Formulario,Entrada,TextoArea,Botao} from './styles';

const FormularioCadastro = (props) => {
    const [titulo, setTitulo] = useState('');
    const [nota, setNota] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmit(titulo,nota);
    }

    return(
        <Formulario onSubmit={handleSubmit}>
            <Entrada
                type="text"
                placeholder="Título"
                onChange={e=>setTitulo(e.target.value)}
            />
            <TextoArea
                rows={15}
                placeholder="Escreva sua nota..."
                onChange={e=>setNota(e.target.value)}
            />
            <Botao>
                Criar Nota
            </Botao>
        </Formulario>
    );
}
export default FormularioCadastro;