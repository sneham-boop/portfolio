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
          Whether it be refining coding practices, enhancing code organization,
          or streamlining backend deployment, I have strived to apply the skills
          acquired from each of these projects. Are you interested in deploying
          a project on your own local machine? Simply visit the provided GitHub
          link for detailed instructions.
        </p>
        <div className="projects-container">{projects(projectsData)}</div>
      </Container>
      <Container className="projects" fluid>
        <h2>OTHER PROJECTS</h2>
        <p className="project-text">
          These projects are based on real-world use cases. In the majority of
          instances, I collaborated with actual businesses or individuals to
          craft their websites. I opted for WIX as my preferred platform due to
          its user-friendly interface and effortless maintenance capabilities.
        </p>
        <div className="projects-container other-projects">
          {projects(otherProjectsData)}
        </div>
      </Container>
    </>
  );
}

export default Projects;
