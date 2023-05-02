import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

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
`;

const ButtonContainer = styled.div`
margin: 1rem 0 2rem 0;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`;
const LoginPage = () => (
  <LoginContainer>
    <LoginForm>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
      <Input type='text' placeholder={'Email'}/>
      <Input type='text' placeholder={'Password'}/>
      </InputContainer>
      <ButtonContainer>
        <Button>Login</Button>
      </ButtonContainer>
    </LoginForm>
  </LoginContainer>
);

export default LoginPage;
