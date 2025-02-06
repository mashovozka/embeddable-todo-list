import styled from "styled-components";

import { mainColor } from "../../App.styles";

export const TodoListContainer = styled.div`
  margin: 4rem auto;
  max-width: 500px;
  border: 2px solid ${mainColor};
  border-radius: 20px;
  color: ${mainColor};

  h1 {
    display: flex;
    justify-content: center;
    font-weight: normal;
    font-size: 2.6rem;
    letter-spacing: 0.05em;
  }
`;

export const TodoItemsContainer = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
