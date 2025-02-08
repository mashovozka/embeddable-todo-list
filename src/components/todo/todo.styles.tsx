import styled from "styled-components";
import { mainColor, shadowColor } from "@src/App.styles";

interface TodoContainerProps {
  done: boolean;
}

export const TodoContainer = styled.div<TodoContainerProps>`
  margin: 0.5rem auto;
  padding: 1.1rem;
  border-radius: 8px;
  width: 90%;
  border: 1px solid ${(props) => (props.done ? shadowColor : mainColor)};
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  color: ${(props) => (props.done ? shadowColor : mainColor)};
`;
