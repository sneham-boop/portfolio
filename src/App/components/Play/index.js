import React, { useState, useContext, useEffect } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import Animate from "../Jumbotron/Animate";
import "./Play.scss";
import { isMobile } from "react-device-detect";

function Play() {
  const [text, setText] = useState("");
  const { modeStyle } = useContext(modeContext);
  const [ballColor, setBallColor] = useState({
    full: "#ff7b00",
    medium: "#bfd200",
    low: "#ffff3f",
  });

  useEffect(() => {
    isMobile ? setText("Tap these dots.") : setText("Move around your cursor.");

  }, []);

  useEffect(() => {
    if (modeStyle === "dark") {
      setBallColor({
        full: "#072ac8",
        medium: "#ffba08",
        low: "#07a0c3",
      });
    }
  }, [modeStyle]);

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
