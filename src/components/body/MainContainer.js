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
import propsVideo from "../videos/reactProps.mp4"
import LampVideo from "../videos/LampVideo"
// Main Wrapper, Layout for all grid siZes
const MainWrapper = styled.div`
  --gap: 1rem;
  --min: 20ch;
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-rows: repeat(8, 1fr); */
  /* grid-column-gap: px; */
  grid-row-gap: 1.5rem;
  padding: clamp(0.75rem, 3%, 2rem);
  place-items: center;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
// const MainWrapper = styled.div`

//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   grid-template-rows: repeat(12, 1fr);
//   grid-column-gap: 10px;
//   grid-row-gap: 10px;
//   justify-items: center;
//   max-width: 1300px;
//   margin: 1rem auto;
//   padding-top: 1rem;
//   justify-items: center;

//   @media (max-width: 400px) {
//     /* Tablets */
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: repeat(8, 1fr);
//     grid-column-gap: px;
//     grid-row-gap: 10px;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     display: grid;
//     grid-template-columns: repeat(10, 1fr);
//     grid-template-rows: repeat(12, 1fr);
//     grid-column-gap: 10px;
//     grid-row-gap: 10px;
//     max-width: min(93%, 1100px);
//   }

// ;`

// Grid Areas for Layout, Each compontent is in it's own layout
const GridArea1 = styled.div`
  /* Socials Component */
  grid-area: 2 / 1 / 3 / 2;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
// const GridArea1 = styled.div`
//   /* Socials Component */
//   grid-area: 1 / 1 / 4 / 2;
//   margin-bottom: 1rem;
//   justify-self: start;

//   @media (max-width: 550px) {
//     /* Tablets */
//     display: none;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     grid-area: 1 / 1 / 4 / 2;
//   }
// `

const GridArea2 = styled.div`
  /* AboutMe Component */
  margin-top: 1.5rem;
  grid-area: 1 / 1 / 2 / 2;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
// const GridArea2 = styled.div`
//
//   grid-area: 1 / 2 / 4 / 6;
//   justify-self: center;

//   /* cursor: pointer; */

//   @media (max-width: 550px) {
//     /* Tablets */
//     grid-area: 1 / 1 / 2 / 2;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     grid-area: 1 / 2 / 4 / 6;
//   }
// `

const GridArea3 = styled.div`
  /* Video Intro Component */
  grid-area: 3 / 1 / 4 / 2;
  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`

// const GridArea3 = styled.div`
//
//   grid-area: 1 / 6 / 4 / 10;
//   cursor: pointer;
//   justify-self: center;

//   @media (max-width: 550px) {
//     /* Tablets */
//     display: none;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     grid-area: 1 / 6 / 4 / 11;
//   }
//   @media (max-width: 1500px) {
//     /* Desktop */
//   }
// `
const GridArea4 = styled.div`
  /* Psuedo Classes Component */
  grid-area: 4 / 1 / 5 / 2;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
// const GridArea4 = styled.div`
//
//   grid-area: 1 / 10 / 7 / 13;
//   cursor: pointer;
//   justify-self: end;

//   @media (max-width: 550px) {
//     /* tablet */
//     display: none;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     grid-area: 4 / 7 / 10 / 11;
//     justify-self: center;
//   }
// `
const GridGif = styled.div`
  grid-area: 5 / 1 / 6 / 2;
  width: 350px;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
const GridArea5 = styled.div`
  /* Lamp Component */
  /* grid-area: 5 / 1 / 6 / 2; */
  display: none;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
// const GridArea5 = styled.div`
//
//   grid-area: 4 / 1 / 8 / 6;
//   justify-self: flex-start;
//   cursor: pointer;
//   margin-top: -1.5rem;

//   @media (max-width: 550px) {
//     /* Tablets */
//     display: none;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     grid-area: 4 / 1 / 8 / 7;
//     margin-top: 0;
//   }
//   @media (max-width: 1500px) {
//     /* Desktop */
//   }
// `
// const GridArea6 = styled.div`
//   /* Blog Component */
//   grid-area: 4 / 6 / 7 / 10;
//   justify-self: center;
//   cursor: pointer;

//   @media (max-width: 550px) {
//     /* Tablets */
//     display: none;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */

//     grid-area: 10 / 6 / 12 / 11;
//     justify-self: center;
//     margin-top: -3rem;
//   }
//   @media (max-width: 1500px) {
//     /* Desktop */
//   }
// `
// const GridArea7 = styled.div`
//   /* Recent Projects Pointer Component */
//   grid-area: 8 / 6 / 9 / 9;
//   justify-self: center;
//   cursor: pointer;
//   @media (max-width: 550px) {
//     /* Tablets */
//     display: none;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     grid-area: 8 / 1/ 9 / 7;
//     align-self: center;
//   }
//   @media (max-width: 1500px) {
//     /* Desktop */
//   }
// `
// const GridArea8 = styled.div`
//   /* Component Stack */
//   grid-area: 7 / 6 / 10 / 12;
//   justify-self: center;
//   cursor: pointer;

//   @media (max-width: 550px) {
//     /* Tablets */
//     display: none;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     grid-area: 9 / 1 / 11 / 7;
//     width: 100%;
//   }
//   @media (max-width: 1500px) {
//     /* Desktop */
//   }
// `
// const GridArea9 = styled.div`
//   /* Contatct Component */
//   grid-area: 8 / 1 / 10 / 6;

//   @media (max-width: 550px) {
//     /* Tablets */
//     display: none;
//   }
//   @media (max-width: 1100px) {
//     /* Laptop */
//     grid-area: 12 / 6 / 13 / 11;
//   }
//   @media (max-width: 1500px) {
//     /* Desktop */
//   }
// `

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
        <GridGif>
          <LampVideo />
        </GridGif>
        <GridArea5>
          <Lamp />
        </GridArea5>

        {/* <GridArea1>
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
        <GridArea5>
          <Lamp />
        </GridArea5>
        <GridArea6>
          <BlogPost />
        </GridArea6>
        <GridArea7>
          <RecentProjects />
        </GridArea7>
        <GridArea8>
          <ProjectStack />
        </GridArea8>
        <GridArea9>
          <Contact />
        </GridArea9> */}
      </MainWrapper>
    </>
  )
}

export default MainContainer
