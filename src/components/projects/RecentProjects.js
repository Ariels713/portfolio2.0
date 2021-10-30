import styled, { keyframes } from "styled-components"

const RecentProjectsTitle = styled.h1`
  font-family: Silka;
`
const pointing = keyframes`
  from{
      transform: translateX(40px)
  }
  to {
     transform:translateX(0px)
  }
`
const RecentProjectSpan = styled.span`
  display: inline-block;
  animation: ${pointing} 500ms ease-in-out 10 alternate-reverse;
`

function RecentProjects() {
  return (
    <RecentProjectsTitle>
      FullStack <RecentProjectSpan>👉🏼</RecentProjectSpan>
    </RecentProjectsTitle>
  )
}

export default RecentProjects
