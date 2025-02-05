import styled from "styled-components";

export const TodoListContainer = styled.div`
  margin: 4rem auto;
  max-width: 500px;
  background: white;
  border: 2px solid #6c5945;
  border-radius: 20px;
  color: #6c5945;

  h1 {
    display: flex;
    justify-content: center;
    font-weight: normal;
    font-size: 2.6rem;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export const TodoItemsContainer = styled.div`
  margin: auto;
  width: 90%;
`;
