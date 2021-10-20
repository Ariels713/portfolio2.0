import styled from "styled-components";
import AboutMe from "../aboutMe/AboutMe";

const MainWrapper = styled.div`
  --gap: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  justify-content: flex-start;
  max-width: min(93%, 1300px);
  margin: 1rem auto;
  @media (min-width: 550px) {
    /* Tablets */
    align-content: flex-start;
    /* max-width: 1300px; */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`;

function MainContainer() {
  return (
    <MainWrapper>
      <AboutMe />
      {/* <AboutMe /> */}
    </MainWrapper>
  );
}

export default MainContainer;
