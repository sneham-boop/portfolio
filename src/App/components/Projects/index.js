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
      <p className="project-text">
        Whether it was better coding practices, code organization or backend
        deployment, I've tried to carry forward the skills gained with each of
        these projects. Interested in deploying a project on your own local
        machine? Head over to the GitHub link. There are detailed instructions.
      </p>
      <div id="projects-container">{projects()}</div>
    </Container>
  );
}

export default Projects;
