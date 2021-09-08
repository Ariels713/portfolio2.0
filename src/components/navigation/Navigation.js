import styled from "styled-components";
import Themes from "../themes/Themes";
import Ariel from "./Ariel";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 550px) {
    /* Tablets */
    flex-direction: row;
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`;

const NavBox = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-top: 1.5rem;
  background-color: hsla(359, 12%, 92%, 1);
  border-radius: 23px;
  width: 300px;
  height: 40px;

  @media (min-width: 550px) {
    /* Tablets */
    position: relative;
    top: 18px;
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`;

const NavItem = styled.li`
  font-family: sans-serif;
  font-size: 1rem;
  list-style: none;
  color: hsla(213, 28%, 7%, 1);
`;

function Navigation() {
  return (
    <NavWrapper>
      <Ariel />
      <NavBox>
        <NavItem>About</NavItem>
        <NavItem>Dailys</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
      </NavBox>
    </NavWrapper>
  );
}

export default Navigation;
