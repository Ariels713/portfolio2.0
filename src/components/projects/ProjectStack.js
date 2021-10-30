import styled from "styled-components"
import project1 from "./project1.png"
import project2 from "./project2.png"
import project3 from "./project3.png"

const ProjectStackWrapper = styled.div`
  position: relative;
  /* overflow:hidden; */
  isolation: isolate;
`

const ProjectCard1 = styled.div`
  position: absolute;
  width: 300px;
  box-shadow: 8.5px 11.3px 9.5px rgba(0, 0, 0, 0.03),
    68px 90px 76px rgba(0, 0, 0, 0.06);
  transform: rotate(349deg);
  left: -20px;
  overflow: hidden;
  border-radius: 8px;
`
const ProjectCard2 = styled.div`
  position: absolute;
  width: 325px;
  overflow: hidden;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 8.5px 11.3px 9.5px rgba(0, 0, 0, 0.03),
    68px 90px 76px rgba(0, 0, 0, 0.06);
`
const ProjectCard3 = styled.div`
  position: absolute;
  left: 56px;
  width: 300px;
  transform: rotate(8deg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 8.5px 11.3px 9.5px rgba(0, 0, 0, 0.03),
    68px 90px 76px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`

const ProjectImage = styled.img``

function ProjectStack() {
  return (
    <ProjectStackWrapper>
      <ProjectCard1>
        <ProjectImage src={project2} />
      </ProjectCard1>
      <ProjectCard2>
        <ProjectImage src={project1} />
      </ProjectCard2>
      <ProjectCard3>
        <ProjectImage src={project3} />
      </ProjectCard3>
    </ProjectStackWrapper>
  )
}

export default ProjectStack
