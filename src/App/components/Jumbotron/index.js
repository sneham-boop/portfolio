import { useEffect, useState } from "react";
import "./Jumbotron.scss";
import Animate from "./Animate";

function Jumbotron() {
  // const [color, setColor] = useState({ r: 255, g: 179, b: 0, a: 0.5 });
  const [color, setColor] = useState("#00000000");

  

  return (
    <div className="jumbotron">
      {Array(1200)
        .fill(true)
        .map((_, i) => (
          <Animate key={i} color={color} setColor={setColor}/>
        ))}
    </div>
  );
}

export default Jumbotron;
