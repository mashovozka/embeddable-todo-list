import styled from "styled-components";
import { mainColor, secondaryColor, buttonColor } from "@src/utils/consts";

export const NewTodoForm = styled.form`
  height: 4rem;

  display: flex;
  width: 100%;
  gap: 1em;
  color: ${mainColor};

  input {
    border: 3px solid ${mainColor};
    background: ${secondaryColor};
    padding-left: 2rem;
    font-size: initial;
    outline: none;
    border-radius: 8px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  button {
    background: ${mainColor};
    color: ${buttonColor};
    padding: 0.5rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
