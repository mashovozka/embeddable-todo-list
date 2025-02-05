import styled from "styled-components";

export const NewTodoForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem auto;
  width: 90%;

  label {
    min-width: 100%;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  input {
    flex-grow: 1;
    border: none;
    background: #f7f1f1;
    padding: 0.5rem 3rem;
    font-size: initial;
    outline: none;
    border-radius: 8px;
    font-family: "Quicksand", sans-serif;
    height: 3rem;
  }
`;
