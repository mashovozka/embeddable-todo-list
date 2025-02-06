import styled from "styled-components";
import { mainColor, shadowColor } from "../../App.styles";

export const TodoContainer = styled.div`
  margin: 0.5rem auto;
  padding: 1.1rem;
  border-radius: 8px;
  width: 90%;
  border: 1px solid ${(props) => (props.isComplete ? shadowColor : mainColor)};
  text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
  color: ${(props) => (props.isComplete ? shadowColor : mainColor)};
`;
