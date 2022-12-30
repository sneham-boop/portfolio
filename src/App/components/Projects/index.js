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
        I've learnt new skills with each of these projects. With each one,
        whether it was something related to better code organization or live
        deployment, I've tried to carry forward the skills gained. The about
        section in each talks about the project idea, challenges I ran into and
        what all I would improve if I did these projects again.
      </p>
      <p className="project-text">
        If you are interested in deploying a project on your own local machine, head over to
        the GitHub link. There are extensive instructions for each project.
      </p>
      <div id="projects-container">{projects()}</div>
    </Container>
  );
}

export default Projects;
