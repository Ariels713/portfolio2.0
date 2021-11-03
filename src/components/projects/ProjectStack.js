import { useState } from "react"
import "../dialogStyles/dialogStyles.css"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import CloseSVG from "../dialogStyles/CloseSVG"
import styled from "styled-components"
import project1 from "./project1.png"
import project2 from "./project2.png"
import project3 from "./project3.png"

const ProjectStackWrapper = styled.div`
  position: relative;

  isolation: isolate;
  width: 100%;
  /* @media (max-width: 1100px) {

    margin-top: 2rem;
    left: 25%;
  } */
`

const ProjectCard1 = styled.div`
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

const ProjectCard2 = styled.div`
  /* position: ${(props) => props.position}; */
  /* width: ${(props) => `${props.width}px`};
  overflow: hidden;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 8.5px 11.3px 9.5px rgba(0, 0, 0, 0.03),
    68px 90px 76px rgba(0, 0, 0, 0.06);
  grid-area: 1 / 1 / 2 / 2; */
`
const ProjectCard3 = styled.div`
  /* position: ${(props) => props.position}; */
  /* left: 56px;
  width: ${(props) => `${props.width}px`};
  transform: ${(props) => `rotate(${props.rotate})`};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 8.5px 11.3px 9.5px rgba(0, 0, 0, 0.03),
    68px 90px 76px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  grid-area: 1 / 2 / 2 / 3; */
`

const ProjectImage = styled.img``

function ProjectStack() {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <>
      {showDialog === false ? (
        <ProjectStackWrapper onClick={open}>
          <ProjectCard1 width="300" rotate="349deg" position="absolute">
            <ProjectImage src={project2} />
          </ProjectCard1>
          <ProjectCard2 width="325" rotate="" position="absolute">
            <ProjectImage src={project1} />
          </ProjectCard2>
          <ProjectCard3 width="300" rotate="8deg" position="absolute">
            <ProjectImage src={project3} />
          </ProjectCard3>
        </ProjectStackWrapper>
      ) : (
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          className="dialogStyles"
          id="background_color"
        >
          <div>
            <ProjectStackWrapper className="dialog_project_grid">
              <ProjectCard1 width="250" rotate="0" position="static">
                <ProjectImage src={project2} />
              </ProjectCard1>
              <ProjectCard2 width="250" rotate="0" position="static">
                <ProjectImage src={project1} />
              </ProjectCard2>
              <ProjectCard3 width="250" rotate="0" position="static">
                <ProjectImage src={project3} />
              </ProjectCard3>
            </ProjectStackWrapper>
          </div>
          <div className="dialog_project_content">
            <div className="dialog_grid">
              <p className="dialog_card_title">Pseudo-Class Demo</p>
              <p className="dialog_card_copy">
                I created this Pseudo-Class to show how useful they can be. This
                example uses 4 of the most commonly used pseudo-classes. We
                start with ::before, this generates content before an element,
                followed by ::after, which works inverse. My favorite of the
                group::selection, allowing you to add styling to any heightened
                text. We wend with ::firstline, this grabs our first-line of our
                paragraph element and adds additional styles.{" "}
              </p>
            </div>
          </div>
          <CloseSVG className="dialog_exit" close={close} />
        </Dialog>
      )}
    </>
  )
}

export default ProjectStack
