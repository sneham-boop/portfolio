import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <Jumbotron />
      <Projects />
      <Skills />
      <About />
      <Contact />
      {/* <Resume /> */}
    </div>
  );
}

export default App;
