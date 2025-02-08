import styled, { keyframes } from "styled-components";
import { mainColor } from "@src/utils/consts";

const rotationAnimation = keyframes`
  0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LoaderSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${mainColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotationAnimation} 1s linear infinite;
`;
