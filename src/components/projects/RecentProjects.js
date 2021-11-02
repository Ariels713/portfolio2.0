import styled, { keyframes } from "styled-components"

const pointing = keyframes`
  from{
      transform: translateX(40px)
  }
  to {
     transform:translateX(0px)
  }
`
const pointingDown = keyframes`
  from{
      transform: translateY(15px)
  }
  to {
     transform:translateY(0px)
  }
`

const RecentProjectsTitle = styled.h1`
  font-family: Silka;

  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    text-align: center;
  }
`
const RecentProjectSpan = styled.span`
  display: inline-block;
  animation: ${pointing} 500ms ease-in-out 10 alternate-reverse;

  &[data-laptop="laptop"] {
    visibility: hidden;
  }
  /* &[data-laptop="laptop"] {
    visibility: hidden;
  } */
  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    &[data-laptop="laptop"] {
      visibility: visible;
    }

    &[data-desktop="desktop"] {
      visibility: hidden;
    }

    animation: ${pointingDown} 500ms ease-in-out 10 alternate-reverse;
  }
`

function RecentProjects() {
  return (
    <RecentProjectsTitle>
      FullStack
      <RecentProjectSpan data-desktop="desktop">👉🏼</RecentProjectSpan>
      <RecentProjectSpan data-laptop="laptop">👇🏼</RecentProjectSpan>
    </RecentProjectsTitle>
  )
}

export default RecentProjects
