import React from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import projectsData from "./projectData";
import otherProjectsData from "./otherProjectsData";
import "./Projects.scss";

function Projects() {
  const projects = (data) => {
    const projectArray = Object.values(data);

    return (
      <>
        {projectArray.map((project, i) => {
          const { name, description, details, github, live, media, stack } =
            project;
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
              stack={stack}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <Container className="projects" fluid>
        <h2>PROJECTS</h2>
        <p className="project-text">
          Whether it was better coding practices, code organization or backend
          deployment, I've tried to carry forward the skills gained with each of
          these projects. Interested in deploying a project on your own local
          machine? Head over to the GitHub link. There are detailed
          instructions.
        </p>
        <div className="projects-container">{projects(projectsData)}</div>
      </Container>
      <Container className="projects" fluid>
      <h2>OTHER PROJECTS</h2>
      <p className="project-text">
        These are project's I've done for real world use cases. In most cases,
        there was a real business / person with whom I collaborated to create
        this website.
      </p>
      <div className="projects-container other-projects">{projects(otherProjectsData)}</div>
    </Container>
    </>
  );
}

export default Projects;
