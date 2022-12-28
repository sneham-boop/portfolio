import React, { useRef, useState, useContext, useEffect } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import Animate from "../Jumbotron/Animate";
import Cursor from "../Cursor";
import "./Play.scss";

function Play() {
  const app = useRef();
  const { dark } = useContext(modeContext);
  const [ballColor, setBallColor] = useState({
    full: "#ff7b00",
    medium: "#bfd200",
    low: "#ffff3f",
  });

  useEffect(() => {
    if (!dark) {
      setBallColor({
        full: "#072ac8",
        medium: "#ffba08",
        low: "#07a0c3",
      });
    }
  }, [dark]);

  return (
    <div className="play" ref={app}>
      <p>
        Move around your cursor
      </p>
      <Cursor app={app} />
      {Array(800)
        .fill(true)
        .map((_, i) => (
          <Animate play={true} key={i} ballColor={ballColor}/>
        ))}
    </div>
  );
}

export default Play;
