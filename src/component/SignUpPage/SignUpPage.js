import React, { useState } from "react";
import styled from "styled-components";
import Input from "../LoginPage/Input";
import LogButton from "./Button";
import{getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification} from 'firebase/auth';
import app from './../../Hook/firebaseConfig'
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
const InputSing = styled.input`
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
const ButtonsSing = styled.button`
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

const SingUpPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app)
  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    const values = /^\S+@\S+\.\S+$/.test(e.target.value);
    if (!values) {
      console.log("");
      return;
    }
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleRegister = (e) =>{
    e.preventDefault();
    if(name,email,password){
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        const user = userCredential.user;
        updateName();
        verify();
        console.log(user)
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
    }else{
      alert('Fill up the box')
      return
    }
  };
  const updateName = () =>{
    updateProfile(auth.currentUser,{
      displayName: name,
    })
    .then(()=>{

    })
    .catch(()=>{

    })
  };
  const verify = () =>{
    sendEmailVerification(auth.currentUser)
    .then(() =>{
      
    })
  }
  return (
    <LoginContainer>
      <LoginForm>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <InputSing
            type="text"
            placeholder={"Name"}
            onBlur={handleName}
            required
          />
          <InputSing
            type="text"
            placeholder={"Email"}
            onBlur={handleEmail}
            required
          />
          <InputSing
            type="text"
            placeholder={"Password"}
            onBlur={handlePassword}
            required
          />
        </InputContainer>
        <ButtonContainer>
          <ButtonsSing onClick={handleRegister}>Sing Up</ButtonsSing>
        </ButtonContainer>
        <HorizontalRule />
        <LoginWith>ALREADY A MEMBER?</LoginWith>
        <ButtonContainer>
          <LogButton>Login</LogButton>
        </ButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default SingUpPage;
