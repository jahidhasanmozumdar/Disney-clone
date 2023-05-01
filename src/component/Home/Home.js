import styled from "styled-components";
import ImgSlider from "../ImgSlider/ImgSlider";
import NewDisney from "../NewDisney/NewDisney";
import Original from "../Original/Original";
import Recommends from "../Recommends/Recommends";
import Trending from "../Trending/Trending";
import Viewer from "../View/Viewer";

const Home = (props) => {
  return (
    <Cointainer>
      <ImgSlider></ImgSlider>
      <Viewer></Viewer>
      <Recommends></Recommends>
      <NewDisney></NewDisney>
      <Original></Original>
      <Trending></Trending>
    </Cointainer>
  );
};

const Cointainer = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url(/images/home-background.png) center center / cover no-repeat
      fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
