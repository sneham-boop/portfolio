import React, { useRef } from "react";
import Animate from "../Jumbotron/Animate";
import Cursor from "../Cursor";
import "./Play.scss";

function Play() {
  const app = useRef();
  return (
    <div className="play" ref={app}>
      <p>
        Move around your cursor
      </p>
      <Cursor app={app} />
      {Array(800)
        .fill(true)
        .map((_, i) => (
          <Animate play={true} key={i} />
        ))}
    </div>
  );
}

export default Play;
