import styled from "styled-components";

export const mainColor = "#002244";
export const secondaryColor = "#f7f1f1";

export const TodoListContainer = styled.div`
  margin: 4rem auto;
  max-width: 500px;
  background: white;
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
`;
