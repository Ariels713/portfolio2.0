import { useState } from "react"
import { useMachine } from "@xstate/react"
import { lightMachine } from "./lightMachine"
import LightSvg from "./LightSVG"
import LightSwitchIcon from "./LightSwitchIcon"
import styled from "styled-components"
import "../dialogStyles/dialogStyles.css"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import CloseSVG from "../dialogStyles/CloseSVG"

// const LampWrapper = styled.div`
//   display: flex;
//   width: 535px;
//   flex-direction: column;
//   align-items: flex-start;
//   height: 300px;
//   border: solid red;
//   background-color: black;
// `;

const LampSVG = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 150px;
  &[data-state="lightOn"] {
    filter: ${(props) => props.dropShadow};
  }
`

const LightBeam = styled.div`
  &[data-state="lightOn"]:before {
    content: "";
    position: absolute;
    top: 350px;
    left: -14%;
    width: 200px;
    height: 50px;
    background: ${(props) => props.beamBrightness};
    transform: perspective(200px) rotateX(0deg) scale(1.2, 0.5);
    filter: blur(28px);
  }
`

const LightSwitch = styled.div`
  cursor: pointer;
`

const Range = styled.input`
  width: 100%;
  margin: 0px;
  margin-left: -27px;
  padding: 8px 0px;
  outline: none;
  background-color: transparent;
  -webkit-appearance: none;

  &[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: hsla(110, 0%, 80%, 1);
    border-radius: 7px;
    cursor: pointer;
  }

  &[type="range"]::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    margin-top: -7px;
    background: ${(props) => props.thumbColor};
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
  }
`

const ColorCircleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  margin-left: -42px;
  margin-top: 16px;
`

const Circles = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border:none;
  transition: all 0.2s ease-in-out;
    &:hover {

    transform: scale(1.2)
  }
  }
`

const LampLayoutWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  width: 535px;
  background-color: hsla(214, 24%, 19%, 1);
  justify-content: space-evenly;
  border-radius: 32px;
  border: solid hsla(104, 100%, 100%, 1) 12px; */

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
const LampLayoutArea1 = styled.div`
  grid-area: 1 / 2 / 3 / 3;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
const LampLayoutArea2 = styled.div`
  grid-area: 3 / 1 / 5 / 2;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
const LampLayoutArea3 = styled.div`
  grid-area: 3 / 3 / 5 / 4;

  @media (min-width: 550px) {
    /* Tablets */
  }
  @media (min-width: 1100px) {
    /* Laptop */
  }
  @media (min-width: 1500px) {
    /* Desktop */
  }
`
// git

function Lamp() {
  const [current, send] = useMachine(lightMachine, { devTools: true })
  const { rangeValue } = current.context
  const { colorValue } = current.context
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <>
      {showDialog === false ? (
        <LampLayoutWrapper onClick={open}>
          <LampLayoutArea1>
            <LampSVG
              data-state={current.value.lightSwitch}
              dropShadow={`drop-shadow(0px 5px 10px hsla(${colorValue}, .${rangeValue}))`}
            >
              <LightBeam
                beamBrightness={`hsla(${colorValue}, .${rangeValue})`}
                data-state={current.value.lightSwitch}
              >
                {current.matches({ lightSwitch: "lightOff" }) && <LightSvg />}
                {current.matches({ lightSwitch: "lightOn" }) && (
                  <LightSvg lightColor={`hsla(${colorValue}, 1.00)`} />
                )}
              </LightBeam>
            </LampSVG>
          </LampLayoutArea1>
          <LampLayoutArea2>
            <LightSwitch onClick={() => send({ type: "TOGGLE" })}>
              {current.matches({ lightSwitch: "lightOff" }) && (
                <LightSwitchIcon />
              )}
              {current.matches({ lightSwitch: "lightOn" }) && (
                <LightSwitchIcon
                  topColor="hsla(140, 56%, 52%, 1.00)"
                  bottomColor="hsla(140, 56%, 32%, 1.00)"
                />
              )}
            </LightSwitch>
            <div>
              <Range
                thumbColor={`hsla(${colorValue}, 1.00)`}
                type="range"
                className="brigtness"
                name="brightness"
                min="0"
                max="99"
                value={rangeValue}
                onChange={(e) => send("CHANGE", { value: e.target.value })}
              />
              {/* 
            <label htmlFor="brightness">Brightness{rangeValue}</label> */}
            </div>
          </LampLayoutArea2>
          <LampLayoutArea3>
            <ColorCircleWrapper>
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "359, 94%, 62%" })}
                color="hsla(359, 94%, 62%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "21, 89%, 56%" })}
                color="hsla(21, 89%, 56%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "33, 94%, 55%" })}
                color="hsla(33, 94%, 55%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "20, 94%, 63%" })}
                color="hsla(20, 94%, 63%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "42, 93%, 64%" })}
                color="hsla(42, 93%, 64%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "94, 38%, 59%" })}
                color="hsla(94, 38%, 59%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "162, 44%, 46%" })}
                color="hsla(162, 44%, 46%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "178, 30%, 43%" })}
                color="hsla(178, 30%, 43%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "208, 25%, 45%" })}
                color="hsla(208, 25%, 45%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "198, 62%, 39%" })}
                color="hsla(198, 62%, 39%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "181, 90%, 31%" })}
                color="hsla(181, 90%, 31%, 1.00)"
              />
              <Circles
                onClick={() => send("CHANGE_LIGHT", { value: "159, 41%, 70%" })}
                color="hsla(159, 41%, 70%, 1.00)"
              />
            </ColorCircleWrapper>
          </LampLayoutArea3>
        </LampLayoutWrapper>
      ) : (
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          className="dialogStyles"
          id="background_color"
        >
          <LampLayoutWrapper>
            <LampLayoutArea1>
              <LampSVG
                data-state={current.value.lightSwitch}
                dropShadow={`drop-shadow(0px 5px 10px hsla(${colorValue}, .${rangeValue}))`}
              >
                <LightBeam
                  beamBrightness={`hsla(${colorValue}, .${rangeValue})`}
                  data-state={current.value.lightSwitch}
                >
                  {current.matches({ lightSwitch: "lightOff" }) && <LightSvg />}
                  {current.matches({ lightSwitch: "lightOn" }) && (
                    <LightSvg lightColor={`hsla(${colorValue}, 1.00)`} />
                  )}
                </LightBeam>
              </LampSVG>
            </LampLayoutArea1>
            <LampLayoutArea2>
              <LightSwitch onClick={() => send({ type: "TOGGLE" })}>
                {current.matches({ lightSwitch: "lightOff" }) && (
                  <LightSwitchIcon />
                )}
                {current.matches({ lightSwitch: "lightOn" }) && (
                  <LightSwitchIcon
                    topColor="hsla(140, 56%, 52%, 1.00)"
                    bottomColor="hsla(140, 56%, 32%, 1.00)"
                  />
                )}
              </LightSwitch>
              <div>
                <Range
                  thumbColor={`hsla(${colorValue}, 1.00)`}
                  type="range"
                  className="brigtness"
                  name="brightness"
                  min="0"
                  max="99"
                  value={rangeValue}
                  onChange={(e) => send("CHANGE", { value: e.target.value })}
                />
                {/* 
            <label htmlFor="brightness">Brightness{rangeValue}</label> */}
              </div>
            </LampLayoutArea2>
            <LampLayoutArea3>
              <ColorCircleWrapper>
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "359, 94%, 62%" })
                  }
                  color="hsla(359, 94%, 62%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "21, 89%, 56%" })
                  }
                  color="hsla(21, 89%, 56%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "33, 94%, 55%" })
                  }
                  color="hsla(33, 94%, 55%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "20, 94%, 63%" })
                  }
                  color="hsla(20, 94%, 63%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "42, 93%, 64%" })
                  }
                  color="hsla(42, 93%, 64%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "94, 38%, 59%" })
                  }
                  color="hsla(94, 38%, 59%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "162, 44%, 46%" })
                  }
                  color="hsla(162, 44%, 46%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "178, 30%, 43%" })
                  }
                  color="hsla(178, 30%, 43%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "208, 25%, 45%" })
                  }
                  color="hsla(208, 25%, 45%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "198, 62%, 39%" })
                  }
                  color="hsla(198, 62%, 39%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "181, 90%, 31%" })
                  }
                  color="hsla(181, 90%, 31%, 1.00)"
                />
                <Circles
                  onClick={() =>
                    send("CHANGE_LIGHT", { value: "159, 41%, 70%" })
                  }
                  color="hsla(159, 41%, 70%, 1.00)"
                />
              </ColorCircleWrapper>
            </LampLayoutArea3>
          </LampLayoutWrapper>
          <div className="dialog_project_content">
            <div className="dialog_grid">
              <p className="dialog_card_title">State Machine Demo</p>
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

export default Lamp
