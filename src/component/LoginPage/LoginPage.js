import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Buttons from "./SingUpButton";
import Icon from "./Icon";
import { auth } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Hook/firebaseConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
  height: 90vh;
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
  gap: 20px;
`;
const From = styled.form``;
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
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 10px;
    color: red;
  }
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

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;
const ButtonLogin = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
const FacebookBackground =
  "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground =
  "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
const LoginPage = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.preventDefault.value);
  };
  const handlePassword = (e) => {
    setPassword(e.preventDefault.value);
  };
  const handleEvent = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userInfo = userCredential.user;
        console.log(userInfo);
        setUser(userInfo);
        Swal.fire("login succuss");
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <LoginContainer>
      <LoginForm>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <From onSubmit={handleEvent}>
            <StyledInput
              onClick={handleEmail}
              type="text"
              placeholder={"Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledInput
              onClick={handlePassword}
              type="text"
              placeholder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </From>
        </InputContainer>
        <ButtonContainer>
          <ButtonLogin onClick={handleEvent}>Login</ButtonLogin>
        </ButtonContainer>
        <LoginWith>
          <span>Wrong email or Password</span>
          OR LOGIN WITH
        </LoginWith>
        <HorizontalRule />
        <IconsContainer>
          <Icon color={FacebookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={InstagramBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
        </IconsContainer>
        <ButtonContainer>
          <Buttons>Sing Up</Buttons>
        </ButtonContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
