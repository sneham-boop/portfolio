import React, { useEffect, useRef } from "react";
import Button1 from "../Button";
import More from "./More";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project(props) {
  const { num, name, description, details, github, live, media } = props;
  const projectNumRef = useRef();
  const liveLink = live || "https://github.com/sneham-boop/colourly";
  const mediaSrc =
    media ||
    "https://images.pexels.com/photos/57565/pexels-photo-57565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const githubLink = github || "https://github.com/sneham-boop/colourly";

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin();
      gsap.to(`#project-${num + 1} .project-num `, {
        scrollTrigger: {
          trigger: `#project-${num + 1}`,
          start: "top 50%+=300px",
          endTrigger: `#project-${num + 1}`,
          end: "top 50%-=200px",
          markers: true,
          scrub: 2,
          toggleActions: "restart pause reverse pause",
        },
        x: -50,
        duration: 1,
        opacity: 0.8,
      });
    });
    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <section id={`project-${num + 1}`} className="project">
        <p className="project-num" ref={projectNumRef}>
          {num + 1}
        </p>
        <div className="project-info">
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="project-buttons">
            <Button1
              btnText="GitHub "
              icon="fa-brands fa-github"
              onClick={() => handleClick(githubLink)}
            />
            <Button1
              btnText="Live "
              icon="fa-solid fa-laptop"
              onClick={() => handleClick(liveLink)}
            />
            <More detailDescs={details} name={name} />
          </div>
        </div>
        <img
          className="project-img"
          src={mediaSrc}
          alt="Live project looks like this"
        ></img>
      </section>
    </>
  );
}

export default Project;
