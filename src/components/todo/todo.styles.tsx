import styled from "styled-components";
import { whiteColor, mainColor, shadowColor } from "@src/utils/consts";

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
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  border: 1px solid ${({ done }) => (done ? shadowColor : mainColor)};
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  color: ${({ done }) => (done ? shadowColor : mainColor)};
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${({ done }) => (done ? shadowColor : mainColor)};
    color: ${whiteColor};
  }
`;
