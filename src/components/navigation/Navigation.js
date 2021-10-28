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
  padding-left: min(1%, 3rem);
  padding-right: min(1%, 3rem);
  justify-content: space-between;
  margin: auto;
  width: min(100%, 1400px);
  @media (min-width: 550px) {
    /* Tablets */
    flex-direction: row;
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

  &:hover {
    color: hsla(213, 28%, 7%, 0.5);
  }

  /* Updatas color of nav text when clicked */
  &[data-state="about"] {
    color: hsla(104, 100%, 100%, 1);
    transition: color 1.5s;
  }
  /* Updatas color of nav text when clicked */
  &[data-state="dailys"] {
    color: hsla(104, 100%, 100%, 1);
    transition: color 1.5s;
  }
  /* Updatas color of nav text when clicked */
  &[data-state="blog"] {
    color: hsla(104, 100%, 100%, 1);
    transition: color 1.5s;
  }
  /* Updatas color of nav text when clicked */
  &[data-state="contact"] {
    color: hsla(104, 100%, 100%, 1);
    transition: color 1.5s;
  }

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
  transition: transform 0.6s ease-in;
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

  return (
    <NavWrapper>
      <Ariel />
      <NavBox>
        {" "}
        <NavHighiligter translate={current.context.x} />
        <NavItem
          data-state={current.matches("about") && "about"}
          ref={aboutRef}
          onClick={(e) => send(aboutRef.current?.innerText.toUpperCase())}
        >
          About
        </NavItem>
        <NavItem
          data-state={current.matches("dailys") && "dailys"}
          ref={dailysRef}
          onClick={(e) => send(dailysRef.current?.innerText.toUpperCase())}
        >
          Dailys
        </NavItem>
        <NavItem
          data-state={current.matches("blog") && "blog"}
          ref={blogRef}
          onClick={(e) => send(blogRef.current?.innerText.toUpperCase())}
        >
          Blog
        </NavItem>
        <NavItem
          data-state={current.matches("contact") && "contact"}
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
