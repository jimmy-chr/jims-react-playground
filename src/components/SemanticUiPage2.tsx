import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import Fade from "./Fade/Fade";

const SemanticUiPage2 = () => {
  const [show, setShow] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(!showName);
    }, 2000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <Container>
      <p>Container set up with React Semantic UI.</p>
      <div>
        <p>This button will fade out the content before unmounting:</p>
        <button onClick={() => setShow((show) => !show)}>
          {show ? "Fade out and hide" : "Fade in and show"}
        </button>
        <Fade show={show}>
          <div> HELLO </div>
        </Fade>
        {showName && (
          <Fade show={showName}>
            <div> Jimmy </div>
          </Fade>
        )}
      </div>
    </Container>
  );
};

export default SemanticUiPage2;
