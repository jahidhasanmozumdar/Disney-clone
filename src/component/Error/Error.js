import React from 'react';
import styled from 'styled-components';

const Error = () => {
    return (
        <Wrapper>
            <img src="/public/images/login-background.jpg" alt="" />
        </Wrapper>
    );
}
const Wrapper = styled.section1`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-width: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`

export default Error;
