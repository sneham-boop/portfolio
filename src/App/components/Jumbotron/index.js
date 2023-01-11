import { useContext } from "react";
import "./Jumbotron.scss";
import Animate from "./Animate";
import { modeContext } from "../../../providers/ModeProvider";

function Jumbotron() {
  const { ballColor } = useContext(modeContext);

  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="jumbotron">
      <section className="intro">
        <p>Hello, I am Sneha.</p>
        <h2>Your next creative web developer.</h2>
        <div className="clicker-container">
          <div className="arrow-clicker" onClick={() => handleScroll()}>
            <p>About</p>
            <i className="down-arrow"></i>
          </div>
        </div>
      </section>
      {Array(550)
        .fill(true)
        .map((_, i) => (
          <Animate key={i} ballColor={ballColor} />
        ))}
    </div>
  );
}

export default Jumbotron;
