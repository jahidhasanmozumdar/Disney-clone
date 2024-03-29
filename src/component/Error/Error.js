import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2em;
  color: red;
`;

const Message = styled.p`
  font-size: 1em;
  color: gray;
`;

const Link = styled.a`
  text-decoration: none;
  color: blue;
`;

const NotFoundPage = () => {
  const [message, setMessage] = useState("The page you are looking for could not be found.");

  return (
    <Container>
      <Title>404 Page Not Found</Title>
      <Message>{message}</Message>
      <Link to="/home">Go to Home</Link>
    </Container>
  );
};

export default NotFoundPage;
