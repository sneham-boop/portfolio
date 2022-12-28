import React from "react";
import Jumbotron from "../Jumbotron";
import Projects from "../Projects";
import Skills from "../Skills";
import About from "../About";
import Contact from "../Contact";

function Home(props) {
  
  return (
    <div className="main-container" >
      <Jumbotron />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default Home;
