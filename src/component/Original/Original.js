import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../Spinner/Spinner";
const Original = () => {
  const [recommendsData, SetRecommendsData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch("https://disneyplus-server.onrender.com/allMovie")
      .then((res) => res.json())
      .then((data) => {
        const original = data?.filter((d) => d.type === 'original');
        SetRecommendsData(original);
        setLoading(false)
      });
  }, []);
  return (
    <div>
      <Container>
        <h1>Original</h1>
        { loading? (
          <Spinner></Spinner>
        ):(
        <Content>
        {recommendsData &&
          recommendsData.map((data) => (
            <Wrap
            key={data._id}
            data={data}
            >  
              <Link to={`/details/` + data._id}>
                <img
                  src={data.cardImg}
                  alt="viewers-marvel"
                />
              </Link>
            </Wrap>
          ))}
      </Content>
        )}
      </Container>
    </div>
  );
};
const Container = styled.div`
  padding: 0 0 26px;
  text-align: start;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 4fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Original;
