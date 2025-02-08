import styled from "styled-components";

import { mainColor } from "@src/utils/consts";

export const TodoListContainer = styled.div`
  padding: 16px;
  margin: 4rem auto;
  max-width: 500px;
  border: 2px solid ${mainColor};
  border-radius: 20px;
  color: ${mainColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h1 {
    display: flex;
    justify-content: center;
    font-weight: normal;
    font-size: 2.6rem;
    letter-spacing: 0.05rem;
  }
`;

export const TodoItemsContainer = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
