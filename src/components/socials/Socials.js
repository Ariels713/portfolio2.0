import styled from "styled-components"
import GithubSVG from "./GithubSVG.js"
import LinkedInLogo from "./LinkedInLogo"
import LogoTwitter from "../psuedoClasses/Twitter"
import HashnodeLogo from "./HashnodeLogo"
import DailysLogo from "./DailysLogo"

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  line-height: 0;
  border-radius: 32px;
  width: 350px;
  padding: clamp(0.75rem, 3%, 2rem);
  background-color: hsla(104, 100%, 100%, 1);
  box-shadow: 1px 2px 2px hsla(359, 11%, 92%, 0.2),
    2px 4px 4px hsla(359, 11%, 92%, 0.2), 4px 8px 8px hsla(359, 11%, 92%, 0.2),
    8px 16px 16px hsla(359, 11%, 92%, 0.2),
    16px 32px 32px hsla(359, 11%, 92%, 0.2);

  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  place-content: centner;
  padding: 1rem;
  border-radius: 32px;
  align-items: center;
  justify-items: center;

   */
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

const SocialIconLinks = styled.a`
  margin: 0 0.5rem;
  &:hover {
    transition: transform 200ms;
    transform: rotate(-15deg) scale(1.2);
  }
`

function Socials() {
  return (
    <SocialsWrapper>
      {/* <SocialBackgroundImage src={skyBlue} /> */}
      <SocialIconLinks target="_blank" href="https://github.com/Ariels713">
        <GithubSVG />
      </SocialIconLinks>
      <SocialIconLinks
        target="_blank"
        href="https://www.linkedin.com/in/ariels713/"
      >
        <LinkedInLogo />
      </SocialIconLinks>
      <SocialIconLinks
        target="_blank"
        href="https://twitter.com/Ariel_Rodriguez"
      >
        <LogoTwitter />
      </SocialIconLinks>
      <SocialIconLinks
        target="_blank"
        href="https://hashnode.com/@ArielRodriguez"
      >
        <HashnodeLogo />
      </SocialIconLinks>
      <SocialIconLinks target="_blank" href="https://dailys.vercel.app/">
        <DailysLogo />
      </SocialIconLinks>
    </SocialsWrapper>
  )
}

export default Socials
