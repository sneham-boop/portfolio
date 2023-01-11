import React, { useState, useContext, useEffect } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import Animate from "../Jumbotron/Animate";
import "./Play.scss";
import { isMobile } from "react-device-detect";

function Play() {
  const [text, setText] = useState("");
  const { ballColor } = useContext(modeContext);

  useEffect(() => {
    isMobile ? setText("Tap these dots.") : setText("Move around your cursor.");

  }, []);

  return (
    <div className="play">
      <p>
        {text}
      </p>
      {Array(800)
        .fill(true)
        .map((_, i) => (
          <Animate play={true} key={i} ballColor={ballColor}/>
        ))}
    </div>
  );
}

export default Play;
