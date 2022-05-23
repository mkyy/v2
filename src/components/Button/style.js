import styled from 'styled-components';

export const Container = styled.button`
  border: 1px solid var(--light);
  background-color: transparent;
  border-radius: 5px;
  padding: 20px 40px;
  color: var(--light);
  transition: ease 0.3s;
  font-family: 'Fira Code', monospace;

  &:hover {
    background-color: #133040;
    cursor: pointer;
  }
`;
