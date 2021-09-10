import { useRef } from "react";
import { useMachine } from "@xstate/react";
import styled from "styled-components";
import Ariel from "./Ariel";
import { navHoverMachine } from "../../machines/navHoverMachine";

//Nav wrapper both Name SVG and Nav
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

//Navigation Pill Styles
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
  overflow: hidden;

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

//Navigation Items, eg About...
const NavItem = styled.button`
  font-family: sans-serif;
  font-size: 1rem;
  list-style: none;
  color: hsla(213, 28%, 7%, 1);
  cursor: pointer;
  background-color: transparent;
  border: none;
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

//Nav Background Anmation.
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
  width: 65px;
  top: 4px;
  left: 304px;
  transition: transform 1s ease-out;
  transform: ${(props) => `translateX(${props.translate}px)`};

  z-index: -1;
  border-radius: 18px;
`;

function Navigation() {
  const [current, send] = useMachine(navHoverMachine);
  const aboutRef = useRef();
  const dailysRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();
  console.log(current.value);
  return (
    <NavWrapper>
      <Ariel />
      <NavBox>
        {" "}
        <NavHighiligter translate={current.context.x} />
        <NavItem
          ref={aboutRef}
          onClick={(e) => send(aboutRef.current?.innerText.toUpperCase())}
        >
          About
        </NavItem>
        <NavItem
          ref={dailysRef}
          onClick={(e) => send(dailysRef.current?.innerText.toUpperCase())}
        >
          Dailys
        </NavItem>
        <NavItem
          ref={blogRef}
          onClick={(e) => send(blogRef.current?.innerText.toUpperCase())}
        >
          Blog
        </NavItem>
        <NavItem
          ref={contactRef}
          onClick={(e) => send(contactRef.current?.innerText.toUpperCase())}
        >
          Contact
        </NavItem>
      </NavBox>
    </NavWrapper>
  );
}

export default Navigation;
