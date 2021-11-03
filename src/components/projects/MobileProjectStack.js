import styled from "styled-components"
import project1 from "./project1.png"
import project2 from "./project2.png"
import project3 from "./project3.png"

const ProjectStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem;
  width: 350px;
`

const ProjectCard = styled.a`
  display: block;
  cursor: pointer;
  /* position: ${(props) => props.position}; */
  /* width: ${(props) => `${props.width}px`};
  box-shadow: 8.5px 11.3px 9.5px rgba(0, 0, 0, 0.03),
    68px 90px 76px rgba(0, 0, 0, 0.06);
  transform: ${(props) => `rotate(${props.rotate})`};
  left: -20px;
  overflow: hidden;
  border-radius: 8px;
  grid-area: 2 / 1 / 3 / 2; */
`
const ProjectImage = styled.img``

function MobileProjectStack() {
  return (
    <ProjectStackWrapper>
      <ProjectCard
        target="_blank"
        href="https://03-blockbuster.vercel.app/newReleases"
      >
        <ProjectImage src={project1} />
      </ProjectCard>
      <ProjectCard target="_blank" href="https://02-conference.vercel.app/">
        <ProjectImage src={project2} />
      </ProjectCard>
      <ProjectCard target="_blank">
        <ProjectImage src={project3} />
      </ProjectCard>
    </ProjectStackWrapper>
  )
}
export default MobileProjectStack
