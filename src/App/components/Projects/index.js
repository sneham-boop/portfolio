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
              num={i}
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
      <h2>PROJECTS</h2>
      <div id="projects-container">{projects()}</div>
    </Container>
  );
}

export default Projects;
