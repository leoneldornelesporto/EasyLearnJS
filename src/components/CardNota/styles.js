import styled from 'styled-components';

export const MySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-color: var(--fundo-detalhes);
  border-radius: 4px;
  flex-wrap: wrap;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  padding: 16px;
`;

export const Cabecalho = styled.header`
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Texto = styled.h3`
  margin-top: 8px;
  font-size: 1em;
`;

export const Titulo = styled.p`
  font-size: 1.2em;
  margin-right: 12px;
`;