import styled from "styled-components";
import {
  mainColor,
  secondaryColor,
  whiteColor,
  focusColor,
} from "@src/utils/consts";

export const NewTodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1em;
  width: 100%;
  gap: 1em;
  color: ${mainColor};

  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  input {
    border: 3px solid ${mainColor};
    background: ${secondaryColor};
    padding-left: 2rem;
    font-size: initial;
    outline: none;
    border-radius: 8px;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;

    &:focus {
      border-color: ${focusColor};
    }
  }

  button {
    background: ${mainColor};
    color: ${whiteColor};
    padding: 0.8125rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s;
    border: 3px solid ${mainColor};
    line-height: 1;

    &:hover {
      background: transparent;  
      color: ${mainColor};
  }
`;
