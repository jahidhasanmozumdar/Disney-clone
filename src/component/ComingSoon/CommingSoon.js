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
  color: blue;
`;

const Message = styled.p`
  font-size: 1em;
  color: gray;
`;

const Link = styled.a`
  text-decoration: none;
  color: blue;
`;

const ComingSoonPage = () => {
  const [message, setMessage] = useState(
    "We're coming soon! Sign up for our newsletter to be the first to know when we launch."
  );

  return (
    <Container>
      <Title>Coming Soon</Title>
      <Message>{message}</Message>
      <Link to="/contact">Sign up for our newsletter</Link>
    </Container>
  );
};

export default ComingSoonPage;
