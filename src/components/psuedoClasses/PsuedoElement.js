import { useState } from "react";
import "./psuedoStyles.css";
import "../dialogStyles/dialogStyles.css";
import { useMachine } from "@xstate/react";
import { psuedoMachine } from "./psuedoMachine";
import Twitter from "./Twitter";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import CloseSVG from "../dialogStyles/CloseSVG";

function PseudoElement() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const [state, send] = useMachine(psuedoMachine);

  return (
    <>
      {showDialog === false ? (
        <div className="psuedo_wrapper" onClick={open}>
          <article className="intro">
            <code className="ariel">@Ariel_Rodriguez</code>

            <Twitter />
          </article>
          <div className="card">
            <div className="paper_stack">
              <div className="paper_1"></div>
              <div className="paper_2"></div>
              <div className="paper_3"></div>
              <div className="paper_4"></div>
            </div>
            <figure className="psuedoFigure">
              <blockquote
                className="before_element"
                cite="https://www.highsnobiety.com/p/25-classic-movie-speeches/"
              >
                <p
                  className="quote"
                  data-before={state.value.before}
                  data-after={state.value.after}
                  data-selection={state.value.selection}
                  data-firstLine={state.value.firstLine}
                >
                  You want the moon? Just say the word and I'll throw a lasso
                  around it and pull it down. I'll give you the moon.
                </p>
              </blockquote>
              <figcaption data-selection={state.value.selection}>
                —George Bailey & Mary Hatch,{" "}
                <cite data-selection={state.value.selection}>
                  It's a Wonderful Life
                </cite>
              </figcaption>
            </figure>
          </div>
          <div className="icon-row">
            <button
              className="psuedoButton"
              onClick={() => send("TOGGLE_BEFORE")}
            >
              ::Before
            </button>
            <button
              className="psuedoButton"
              onClick={() => send("TOGGLE_AFTER")}
            >
              ::After
            </button>
            <button
              className="psuedoButton"
              onClick={() => send("TOGGLE_SELECTION")}
            >
              ::Selection
            </button>
            <button
              className="psuedoButton"
              onClick={() => send("TOGGLE_FIRST_LINE")}
            >
              ::FirstLine
            </button>
          </div>
        </div>
      ) : (
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          className="dialogStyles"
          id="background_color"
        >
          <div className="dialog_project">
            <div className="psuedo_wrapper">
              <article className="intro">
                <code className="ariel">@Ariel_Rodriguez</code>

                <Twitter />
              </article>
              <div className="card">
                <div className="paper_stack">
                  <div className="paper_1"></div>
                  <div className="paper_2"></div>
                  <div className="paper_3"></div>
                  <div className="paper_4"></div>
                </div>
                <figure className="psuedoFigure">
                  <blockquote
                    className="before_element"
                    cite="https://www.highsnobiety.com/p/25-classic-movie-speeches/"
                  >
                    <p
                      className="quote"
                      data-before={state.value.before}
                      data-after={state.value.after}
                      data-selection={state.value.selection}
                      data-firstLine={state.value.firstLine}
                    >
                      You want the moon? Just say the word and I'll throw a
                      lasso around it and pull it down. I'll give you the moon.
                    </p>
                  </blockquote>
                  <figcaption data-selection={state.value.selection}>
                    —George Bailey & Mary Hatch,{" "}
                    <cite data-selection={state.value.selection}>
                      It's a Wonderful Life
                    </cite>
                  </figcaption>
                </figure>
              </div>
              <div className="icon-row">
                <button
                  className="psuedoButton"
                  onClick={() => send("TOGGLE_BEFORE")}
                >
                  ::Before
                </button>
                <button
                  className="psuedoButton"
                  onClick={() => send("TOGGLE_AFTER")}
                >
                  ::After
                </button>
                <button
                  className="psuedoButton"
                  onClick={() => send("TOGGLE_SELECTION")}
                >
                  ::Selection
                </button>
                <button
                  className="psuedoButton"
                  onClick={() => send("TOGGLE_FIRST_LINE")}
                >
                  ::FirstLine
                </button>
              </div>
            </div>
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
  );
}

export default PseudoElement;
