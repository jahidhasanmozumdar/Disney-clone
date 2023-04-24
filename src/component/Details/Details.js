import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  const { id } = useParams();
  useEffect( ()  => {
    fetch(`http://localhost:5000/details/${id}`)
      .then((res)  => res.json())
      .then((data) => console.log(data));
  }, []);
  console.log(id);
  return <Container>details</Container>;
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
export default Details;
