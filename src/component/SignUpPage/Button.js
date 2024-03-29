
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Button({ content }) {
  const navigate = useNavigate();
  return <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>;
}

const LoginButton = styled.button`
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
