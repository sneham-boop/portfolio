import React from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import projectsData from "./projectData";

import "./Projects.scss";

function Projects() {
  const detailDescs = ["a", "b", "c", "d", "e", "f"];
  const projects = () => {
    return (
      <>
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <Project detailDescs={detailDescs} />
          ))}
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
