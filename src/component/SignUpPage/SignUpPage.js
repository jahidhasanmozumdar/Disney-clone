import React from "react";
import styled from "styled-components";
import Input from "../LoginPage/Input";
import LogButton from "./Button";
import Buttons from "../LoginPage/SingUpButton";
import Icon from "../LoginPage/Icon";

const LoginContainer = styled.div`
  height: 100vh;
  background-image: url("https://www.tetratech.com/en/images/cybersecurity-transformation-pd20-018-960.jpg?blobheader=image/jpeg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  box-shadow: 0px 8px 32px 0px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const SingUpPage = () => (
  <LoginContainer>
    <LoginForm>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder={"Name"} />
        <Input type="text" placeholder={"Email"} />
        <Input type="text" placeholder={"Password"} />
      </InputContainer>
      <ButtonContainer>
        <Buttons>Sing Up</Buttons>
      </ButtonContainer>
      <HorizontalRule />
      <LoginWith>ALREADY A MEMBER?</LoginWith>
      <ButtonContainer>
        <LogButton>Login</LogButton>
      </ButtonContainer>
    </LoginForm>
  </LoginContainer>
);

export default SingUpPage;
