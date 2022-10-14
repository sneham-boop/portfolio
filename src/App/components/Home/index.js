import React, {useRef} from "react";
import Jumbotron from "../Jumbotron";
import Projects from "../Projects";
import Skills from "../Skills";
import About from "../About";
import Contact from "../Contact";
import Cursor from "../Cursor";
// import Resume from "./components/Resume";

function Portfolio() {
  const app = useRef();
  return (
    <div ref={app} className="main-container">
      <Cursor app={app} />
      <Jumbotron />
      <Projects />
      <Skills />
      <About />
      <Contact />
      {/* <Resume /> */}
    </div>
  );
}

export default Portfolio;
