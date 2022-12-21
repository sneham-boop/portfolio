import React, { useEffect } from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import projectsData from "./projectData";
import "./Projects.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      const projects = gsap.utils.toArray(".project");

      gsap.to(projects, {
        xPercent: -100 * (projects.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
          pin: true,
          scrub: 1,
          snap: 1 / (projects.length - 1),
          end: () => "+=200+=" + document.querySelector("#projects").offsetWidth,
          markers: true,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <Container id="projects" fluid>
      <h2>PROJECTS</h2>
      <div id="projects-container">{projects()}</div>
    </Container>
  );
}

export default Projects;
