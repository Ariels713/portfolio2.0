import styled from "styled-components"
import Monster from "./Moster.js"
import ArielSVG from "./ArielSVG"

const AboutMeWrapper = styled.div`
  width: 350px;
  height: 350px;
  color: hsla(214, 24%, 19%, 1);
  background-color: hsla(104, 100%, 100%, 1);
  border-radius: 32px;
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: clamp(0.75rem, 3%, 2rem);
  word-break: break-word;

  box-shadow: 1px 2px 2px hsla(359, 11%, 92%, 0.2),
    2px 4px 4px hsla(359, 11%, 92%, 0.2), 4px 8px 8px hsla(359, 11%, 92%, 0.2),
    8px 16px 16px hsla(359, 11%, 92%, 0.2),
    16px 32px 32px hsla(359, 11%, 92%, 0.2);
  margin: auto;

  @media (min-width: 550px) {
    /* Tablets */
    width: min(575px, 90%);
    height: 280px;
  }
`

const AboutMeAvatar = styled.img`
  width: 100px;
`

const AboutMeContent = styled.p`
  font-family: Silka;
  font-size: 1rem;
  line-height: 1.75rem;
`

const ArielSpan = styled.span`
  font-weight: 900;
  font-size: 1.5rem;
`

const ArielSVGWrapper = styled.svg`
  height: 100px;
  margin-left: -2.5ch;

  @media (min-width: 550px) {
    /* Tablets */
    margin-left: -2.5ch;
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`

function AboutMe() {
  return (
    <AboutMeWrapper>
      <AboutMeAvatar />
      {/* <AboutMeAvatar src={Ariel} alt="Ariel Avatar" /> */}
      <ArielSVGWrapper>
        <ArielSVG />
      </ArielSVGWrapper>
      <AboutMeContent>
        Hi! I'm <ArielSpan>Ariel</ArielSpan>, a Front End Developer! Some of my
        interests include React, Next JS, CSS, Writing/Teaching, apartment
        gardening , and the occational video game.
        <Monster />
      </AboutMeContent>
    </AboutMeWrapper>
  )
}

export default AboutMe
