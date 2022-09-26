import React from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import "./Projects.css";

function Projects() {
  const projects = () => {
    return (
      <>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </>
    );
  };
  return (
    <Container id="projects" fluid>
      <h3>Projects</h3>
      <Container id="projects-container">{projects()}</Container>
    </Container>
  );
}

export default Projects;
