import styled from "styled-components";
import { mainColor, shadowColor } from "@src/App.styles";

interface TodoContainerProps {
  done: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const TodoContainer = styled(
  ({ done, children, ...rest }: TodoContainerProps) => (
    <div {...rest}>{children}</div>
  )
)`
  margin: 0.5rem auto;
  padding: 1.1rem;
  border-radius: 8px;
  width: 90%;
  border: 1px solid ${({ done }) => (done ? shadowColor : mainColor)};
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  color: ${({ done }) => (done ? shadowColor : mainColor)};
`;
