import { useState } from "react";
import "./Jumbotron.scss";
import Animate from "./Animate";

function Jumbotron() {
  const [color, setColor] = useState("#00000000");
  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="jumbotron">
      <section className="intro">
        <p>Hi, I am Sneha.</p>
        <h2>Your next creative web developer.</h2>
        <div id="arrow-clicker" onClick={() => handleScroll()}>
          <p>about</p>
          <i class="down-arrow"></i>
        </div>
      </section>
      {Array(600)
        .fill(true)
        .map((_, i) => (
          <Animate key={i} color={color} setColor={setColor} />
        ))}
    </div>
  );
}

export default Jumbotron;
