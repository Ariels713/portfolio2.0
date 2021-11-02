import styled from "styled-components"
import AboutMe from "../aboutMe/AboutMe"
import Socials from "../socials/Socials"
import PseudoElement from "../psuedoClasses/PsuedoElement"
import BlogPost from "../blogs/BlogPost"
import Lamp from "../eggheadLamp/Lamp"
import IntroVideo from "../videos/IntroVideo"
import ProjectStack from "../projects/ProjectStack"
import RecentProjects from "../projects/RecentProjects"
import Contact from "../contact/Contact"

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
  max-width: 1300px;
  margin: 1rem auto;
  padding-top: 1rem;
  justify-items: center;

  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    max-width: min(93%, 1100px);
  }
`

// Grid Areas for Layout, Each compontent is in it's own layout
const GridArea1 = styled.div`
  /* grid-area: 1 / 2 / 4 / 6; */
  grid-area: 1 / 1 / 4 / 2;
  margin-bottom: 1rem;
  justify-self: start;
  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    /* grid-area: 1 / 2 / 4 / 4; */
  }
`
const GridArea2 = styled.div`
  /* grid-area: 1 / 1 / 4 / 2; */
  grid-area: 1 / 2 / 4 / 6;
  justify-self: center;

  /* cursor: pointer; */

  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    /* grid-area: 1 / 1 / 4 / 2; */
  }
`
const GridArea3 = styled.div`
  /* grid-area: 1 / 6 / 7 / 9; */
  grid-area: 1 / 6 / 4 / 10;
  cursor: pointer;
  justify-self: center;

  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    display: none;
  }
  @media (max-width: 1500px) {
    /* Desktop */
  }
`
const GridArea4 = styled.div`
  /* grid-area: 1 / 9 / 3 / 13; */
  grid-area: 1 / 10 / 7 / 13;
  cursor: pointer;
  justify-self:end;
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    display: none;
  }
  @media (max-width: 1500px) {
    /* Desktop */
  }
`
const GridArea5 = styled.div`
  grid-area: 3 / 1 / 8 / 6;
  justify-self: flex-start;
  cursor: pointer;
  margin-top: 1.5rem;

  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    grid-area: 1 / 4 / 5 / 7;
    margin-top: 0;
  }
  @media (max-width: 1500px) {
    /* Desktop */
  }
`
const GridArea6 = styled.div`
  grid-area: 3 / 9 / 5 / 13;
  justify-self: flex-end;
  cursor: pointer;

  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    /* display: none; */
    grid-area: 4 / 1 / 6 / 4;
    justify-self: center;
    margin-top: -3rem;
  }
  @media (max-width: 1500px) {
    /* Desktop */
  }
`
const GridArea7 = styled.div`
  grid-area: 5 / 9 / 5 / 9;
  justify-self: center;
  cursor: pointer;
  margin-top: 3rem;
  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    display: none;
  }
  @media (max-width: 1500px) {
    /* Desktop */
  }
`
const GridArea8 = styled.div`
  grid-area: 6 / 6 / 7 / 9;
  justify-self: center;
  cursor: pointer;

  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    display: none;
  }
  @media (max-width: 1500px) {
    /* Desktop */
  }
`
const GridArea9 = styled.div`
  grid-area: 6 / 1 / 9 / 6;
  margin-top: 2rem;
  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    display: none;
  }
  @media (max-width: 1500px) {
    /* Desktop */
  }
`

function MainContainer() {
  // Open and close Modal
  return (
    <>
      <MainWrapper>
        <GridArea1>
          <Socials />
        </GridArea1>
        <GridArea2>
          <AboutMe />
        </GridArea2>
        <GridArea3>
          <IntroVideo />
        </GridArea3>
        <GridArea4>
          <PseudoElement />
        </GridArea4>

        {/* <GridArea4>
          <BlogPost />
        </GridArea4>
        <GridArea5>
          <Lamp />
        </GridArea5>
        <GridArea6>
          <IntroVideo />
        </GridArea6>
        <GridArea7>
          <ProjectStack />
        </GridArea7>
        <GridArea8>
          <RecentProjects />
        </GridArea8>
        <GridArea9>
          <Contact />
        </GridArea9> */}
      </MainWrapper>
    </>
  )
}

export default MainContainer
