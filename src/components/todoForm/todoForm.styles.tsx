import styled from "styled-components";
import { mainColor, secondaryColor } from "../../App.styles";

export const NewTodoForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem auto;
  width: 90%;
  color: ${mainColor};

  input {
    flex-grow: 1;
    border: 3px solid ${mainColor};
    background: ${secondaryColor};
    padding: 0.5rem 3rem;
    font-size: initial;
    outline: none;
    border-radius: 8px;
    height: 3rem;
  }

  button {
    background: ${mainColor};
    color: white;
    border: 3px solid black;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin-left: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
