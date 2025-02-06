import styled from "styled-components";
import { mainColor } from "../../App.styles";

export const TodoContainer = styled.label`
  margin: 0.5rem auto;
  padding: 1.1rem;
  border: 1px solid ${mainColor};
  border-radius: 8px;
  width: 80%;
  text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
`;
