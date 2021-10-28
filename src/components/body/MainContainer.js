import styled from "styled-components";
import AboutMe from "../aboutMe/AboutMe";
import Socials from "../socials/Socials";
import PseudoElement from "../psuedoClasses/PsuedoElement";
import BlogPost from "../blogs/BlogPost";
import Lamp from "../eggheadLamp/Lamp";

// Main Wrapper, Layout for all grid siZes
const MainWrapper = styled.div`
  --gap: 1rem;
  --min: 20ch;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: center;
  max-width: min(93%, 1300px);
  margin: 1rem auto;
  padding-top: 1rem;
  justify-items:flex-end;

  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`;

// Grid Areas for Layout, Each compontent is in it's own layout
const GridArea1 = styled.div`
  /* grid-area: 1 / 1 / 4 / 5; */
  grid-area: 1 / 2 / 4 / 6;
`;
const GridArea2 = styled.div`
  /* grid-area: 1 / 5 / 4 / 6; */
  grid-area: 1 / 1 / 4 / 2;
  justify-self: flex-start;›
  /* cursor: pointer; */
`;
const GridArea3 = styled.div`
  grid-area: 1 / 6 / 7 / 9;
  cursor: pointer;
`;
const GridArea4 = styled.div`
  grid-area: 1 / 9 / 5 / 13;
  /* cursor: pointer; */
`;
const GridArea5 = styled.div`
  grid-area: 4 / 1 / 8 / 6;
  /* cursor: pointer; */
`;

function MainContainer() {
  // Open and close Modal
  return (
    <MainWrapper>
      <GridArea1>
        <AboutMe />
      </GridArea1>
      <GridArea2>
        <Socials />
      </GridArea2>
      <GridArea3>
        <PseudoElement />
      </GridArea3>
      <GridArea4>
        <BlogPost />
      </GridArea4>
      <GridArea5>
        <Lamp />
      </GridArea5>
    </MainWrapper>
  );
}

export default MainContainer;
