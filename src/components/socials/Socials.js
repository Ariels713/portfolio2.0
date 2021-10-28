import styled from "styled-components";
import GithubSVG from "./GithubSVG.js";
import LinkedInLogo from "./LinkedInLogo";
import LogoTwitter from "../psuedoClasses/Twitter";
import HashnodeLogo from "./HashnodeLogo";
import DailysLogo from "./DailysLogo";

const SocialsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  place-content: centner;
  padding: 1rem;
  border-radius: 32px;
  align-items: center;
  justify-items: center;

  background-color: hsla(104, 100%, 100%, 1);
  box-shadow: 1px 2px 2px hsla(359, 11%, 92%, 0.2),
    2px 4px 4px hsla(359, 11%, 92%, 0.2), 4px 8px 8px hsla(359, 11%, 92%, 0.2),
    8px 16px 16px hsla(359, 11%, 92%, 0.2),
    16px 32px 32px hsla(359, 11%, 92%, 0.2);
`;

const SocialIconWrapper = styled.div``;

function Socials() {
  return (
    <SocialsWrapper>
      {/* <SocialBackgroundImage src={skyBlue} /> */}
      <SocialIconWrapper>
        <GithubSVG />
      </SocialIconWrapper>
      <SocialIconWrapper>
        <LinkedInLogo />
      </SocialIconWrapper>
      <SocialIconWrapper>
        <LogoTwitter />
      </SocialIconWrapper>
      <SocialIconWrapper>
        <HashnodeLogo />
      </SocialIconWrapper>
      <SocialIconWrapper>
        <DailysLogo />
      </SocialIconWrapper>
    </SocialsWrapper>
  );
}

export default Socials;
