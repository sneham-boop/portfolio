import React from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import projectsData from "./projectData";

import "./Projects.scss";

function Projects() {
  const projects = () => {
    const projectArray = Object.values(projectsData);
    return (
      <>
        {projectArray.map((project, i) => {
          const { name, description, details, github, live, media } = project;
          return (
            <Project
              key={i}
              name={name}
              description={description}
              details={details}
              github={github}
              live={live}
              media={media}
            />
          );
        })}
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
