import { useEffect, useState } from "react";
import "./Jumbotron.scss";
import Animate from "./Animate";

function Jumbotron() {
  // const [color, setColor] = useState({ r: 255, g: 179, b: 0, a: 0.5 });
  const [color, setColor] = useState("#00000000");

  return (
    <div className="jumbotron">
      {Array(607)
        .fill(true)
        .map((_, i) => (
          <Animate key={i} color={color} setColor={setColor} />
        ))}
      <section className="intro">
        <h2>I'm Sneha</h2>
        <p>Web Developer</p>
      </section>
    </div>
  );
}

export default Jumbotron;
