import { useState } from "react";
import "./Jumbotron.scss";
import Animate from "./Animate";

function Jumbotron() {
  // const [color, setColor] = useState({ r: 255, g: 179, b: 0, a: 0.5 });
  const [color, setColor] = useState("#00000000");

  return (
    <div className="jumbotron">
      
      <section className="intro">
        <p>Hi, I am Sneha.</p>
        <h2>Your next creative web developer.</h2>
      </section>

      <section className="brief-intro">
        {/* <p>For the past</p> */}
        <p className="brief-0">In this past year...</p>
        <p className="brief-1">I've learnt to develop full-stack web applications.</p>
        <p className="brief-2">Currently, I'm experimenting with CSS animation. </p>
        <p className="brief-3">And apart, from coding I enjoy music...</p>
        <p className="brief-4">I enjoy reading books...</p>
        <p className="brief-5">and making abstract art.</p>
        <p className="brief-6">Right now, I am looking for my next role...</p>
        <p className="brief-7">..and I'd like to work with you.</p>
      </section>
      {Array(5000)
        .fill(true)
        .map((_, i) => (
          <Animate key={i} color={color} setColor={setColor} />
        ))}
    </div>
  );
}

export default Jumbotron;
