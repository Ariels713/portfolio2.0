import styled from "styled-components";
import Apocolypse from "./Apocolypse";
import Ellie from "./Ellie";
import Sun from "./Sun";
import Moon from "./Moon";
const ThemeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  padding: 5px;

  border-radius: 1.4rem;
  background-color: hsla(109, 0%, 88%, 1);
  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`;

const SVGWrapper = styled.svg`
  max-width: 42px;
`;

function Themes() {
  return (
    <ThemeWrapper>
      <Sun />
      <Moon />
      <Ellie />
      <Apocolypse />
    </ThemeWrapper>
  );
}

export default Themes;
