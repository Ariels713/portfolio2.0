import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";

import Ariel from "./Ariel";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 550px) {
    /* Tablets */

    flex-direction: row;
    justify-content: space-around;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: 1100px) {
    /* Laptop */

    margin: auto;
    /* border: solid red; */
    max-width: 1400px;
    justify-content: flex-start;
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
  isolation: isolate;

  @media (min-width: 550px) {
    /* Tablets */
    position: relative;
    top: 18px;
  }
  @media (min-width: 1100px) {
    /* Laptop */
    top: 21px;
    margin-left: auto;
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
  cursor: pointer;
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

const NavHighiligter = styled.div`
  --background-color: linear-gradient(
    to bottom right,
    hsla(347, 93%, 68%, 1),
    hsla(9, 86%, 75%, 1),
    hsla(32, 82%, 75%, 1)
  );
  position: absolute;
  background: var(--background-color);
  height: 32px;
  width: 60px;
  top: 4px;
  left: 7px;
  z-index: -1;
  border-radius: 18px;
`;

function Navigation() {
  return (
    <NavWrapper>
      <Ariel />
      <NavBox>
        <NavItem style={{ color: "white" }}>About</NavItem>
        <NavItem>Dailys</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
        <NavHighiligter />
      </NavBox>
    </NavWrapper>
  );
}

export default Navigation;
