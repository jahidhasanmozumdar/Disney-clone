import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: auto;
  /* width: 32px;
  height: 32px; */
`;

const SpinnerCircle = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  margin: 4px;
  border: 3px solid #333;
  border-radius: 50%;
  animation: ${spin} 0.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: orange transparent transparent transparent;
`;

const Spinner = () => (
  <SpinnerContainer>
    <SpinnerCircle />
  </SpinnerContainer>
);

export default Spinner;
