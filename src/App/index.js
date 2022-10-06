import React, {useRef} from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
// import Resume from "./components/Resume";

function App() {
  const app = useRef();
  return (
    <div ref={app} className="main-container">
      <Navigation />
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

export default App;
