import React, { useRef } from "react";
import Animate from "../Jumbotron/Animate";
import Cursor from "../Cursor";
import "./Play.scss";

function Play() {
  const app = useRef();
  return (
    <div className="play" ref={app}>
      <Cursor app={app} />
      {/* <div> */}
      {Array(6000)
        .fill(true)
        .map((_, i) => (
          <Animate play={true} key={i} />
        ))}
      {/* </div> */}
    </div>
  );
}

export default Play;
