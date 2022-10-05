import React from "react";
import "./Jumbotron.scss";
import Animate from "./Animate";

function Jumbotron() {
  const element = "";
  return (
    <div className="jumbotron">
      {Array(10000)
        .fill(true)
        .map((_, i) => (
          <Animate key={i} />
        ))}
    </div>
  );
}

export default Jumbotron;
