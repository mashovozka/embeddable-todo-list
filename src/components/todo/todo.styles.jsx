import styled from "styled-components";

export const TodoContainer = styled.label`
  display: flex;
  margin: 1rem auto;
  padding: 1.1rem 0;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
  text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
  position: relative;
`;

export const TodoCheckbox = styled.input`
  width: 10%;
`;

export const TodoValue = styled.span`
  width: 60%;
`;
