import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Button() {
  const navigate = useNavigate();
  return <SignButton onClick={() => navigate("/sing")}>SignUp</SignButton>;
}

const SignButton = styled.button`
  background: linear-gradient(to right, #5c3117 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  margin:10px 0;
  
`;
