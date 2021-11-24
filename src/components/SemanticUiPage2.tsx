import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import Fade from "./Fade/Fade";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles.css";

const SemanticUiPage2 = () => {
  const [show, setShow] = useState(false);
  const [showName, setShowName] = useState(false);

  const [item, setItem] = useState("titel");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(!show);
    }, 3000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <Container>
      <p>Container set up with React Semantic UI.</p>
      <div>
        <p>
          This button will fade out the content before unmounting using state
          and custom code:
        </p>
        <button onClick={() => setShow((show) => !show)}>
          {show ? "Fade out and hide" : "Fade in and show"}
        </button>
        <Fade show={show}>
          <div> HELLO </div>
        </Fade>
        {showName && (
          <Fade show={!show}>
            <div> Jimmy </div>
          </Fade>
        )}
      </div>
      <div>
        <p>In this example we're using the react-transition-group package</p>

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={item}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            <button
              onClick={() =>
                setItem((item) => (item === "titel" ? "loading" : "titel"))
              }
            >
              {`Switch state ${item}`}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </Container>
  );
};

export default SemanticUiPage2;
