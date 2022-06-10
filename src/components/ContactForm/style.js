import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  margin-inline: auto;

  @media (max-width: 425px) {
    width: 100%;
    align-items: center;
  }

  input,
  textarea {
    background-color: transparent;
    border: 1px solid var(--principal-text);
    color: var(--light);
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;

    &:focus {
      outline: inset rgba(204, 214, 246, 0.7);
    }
  }

  button {
    background-color: #112240;
    border: 1px solid var(--principal-text);
    padding: 10px;
    color: var(--principal-text);
    font-family: 'Fira Code', monospace;
    transition: 0.2s ease;
    align-self: center;
    &:hover {
      color: var(--light);
      border: 1px solid var(--light);
      background-color: transparent;
      cursor: pointer;
    }
  }

  .sucess-box {
    background-color: red;

    h2 {
      text-align: center;
    }
  }

  .div-btn {
    align-self: center;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
