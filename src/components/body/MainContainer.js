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
  max-width: min(93%, 1300px);
  margin: 1rem auto;
  padding-top: 1rem;
  justify-items:flex-end;
  /* justify-content: space-evenly; */

  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`

// Grid Areas for Layout, Each compontent is in it's own layout
const GridArea1 = styled.div`
  grid-area: 1 / 2 / 4 / 6;
  margin-bottom: 1rem;
`
const GridArea2 = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  justify-self: flex-start;›
  /* cursor: pointer; */
`
const GridArea3 = styled.div`
  grid-area: 1 / 6 / 7 / 9;
  cursor: pointer;
`
const GridArea4 = styled.div`
  grid-area: 1 / 9 / 3 / 13;
  /* cursor: pointer; */
`
const GridArea5 = styled.div`
  grid-area: 3 / 1 / 8 / 6;
  justify-self: flex-start;
  cursor: pointer;
  margin-top: 1rem;
`
const GridArea6 = styled.div`
  grid-area: 3 / 9 / 5 / 13;
  justify-self: flex-end;
  cursor: pointer;
`
const GridArea7 = styled.div`
  grid-area: 5 / 9 / 5 / 9;
  justify-self: center;
  cursor: pointer;
`
const GridArea8 = styled.div`
  grid-area: 6 / 6 / 7 / 9;
  justify-self: center;
  cursor: pointer;
`
const GridArea9 = styled.div`
  grid-area: 6 / 1 / 9 / 6;
`

function MainContainer() {
  // Open and close Modal
  return (
    <>
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
        </GridArea9>
      </MainWrapper>
    </>
  )
}

export default MainContainer
