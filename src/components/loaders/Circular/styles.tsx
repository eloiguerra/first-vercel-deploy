import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const CircularWrapper = styled.div`
  position: relative;
  height: 120px;
  overflow: hidden;
`;

export const CustomCircularLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid #808080;
  border-left-color: #ffffff;
  border-radius: 50%;
  width: 55.41px;
  height: 55.41px;
  animation: ${spin} 1s linear infinite;
`;
