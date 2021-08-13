import styled from 'styled-components';

export const Formulario = styled.form`
  flex-grow: 2;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 12px 40px;
`;

export const Entrada = styled.input`
  margin-top: 8px;
  padding: 4px;
  border: none;
  background-color: var(--fundo-detalhes);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
`;

export const TextoArea = styled.textarea`
  align-self: flex-end;
  width: 30%;
  background-color: var(--secundaria);
  color: black;
  font-weight: 400;
`;

export const Botao = styled.button`
  margin-top: 8px;
  padding: 4px;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  align-self: flex-end;
  width: 30%;
  background-color: #3bacd3;
  color: white;
`;