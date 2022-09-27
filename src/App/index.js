import React from "react";
import "./sass/App.scss";
import "./sass/About.scss";
import "./sass/Contact.scss";
import "./sass/Jumbotron.scss";
import "./sass/Navigation.scss";
import "./sass/Projects.scss";
import "./sass/Resume.scss";
import "./sass/Skills.scss";
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
