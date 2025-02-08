import styled from "styled-components";
import { errorColor } from "@src/utils/consts";

export const ErrorMessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${errorColor};
`;
