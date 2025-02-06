import styled, { keyframes } from "styled-components";
import { mainColor } from "../../App.styles";

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
  margin: 2rem auto;
`;

export const LoaderSpinner = styled.div`
  margin: 0 auto;
  width: 48px;
  height: 48px;
  border: 5px solid ${mainColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotationAnimation} 1s linear infinite;
`;
