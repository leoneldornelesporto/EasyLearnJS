import styled from "styled-components";

export const ListaNotas = styled.ul`
  background-color: var(--fundo);
  flex-grow: 3;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  list-style-type: none;
  padding-left: 24px;
  padding-top: 24px;
`;

export const ListaNotasItem = styled.ul`
  margin: 12px;
  max-width: 240px;
  max-height: 400px;
  display: inline;
`;