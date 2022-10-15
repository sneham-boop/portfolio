import React from "react";
import Animate from "../Jumbotron/Animate";
import "./Play.scss"

function Play() {
  return (
    <div className="play">
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
