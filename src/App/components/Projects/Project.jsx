import React from "react";
import Button1 from "../Button";
import More from "./More";

function Project(props) {
  const { num, name, description, details, github, live, media, stack } = props;

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <section id={`project-${num + 1}`} className="project">
        <div className="project-title">
          <h3>
            {num + 1}. {name}
          </h3>
          <div className="info-container">
            <img
              className="project-img"
              src={media}
              alt="Live project looks like this"
            />
            <div className="project-info">
              <p >{description}</p>
              {stack && <ul className="tech-stack">{stack()}</ul>}
            </div>
          </div>
          <div className="project-buttons">
            {github && (
              <Button1
                btnText="GitHub"
                icon="fa-brands fa-github"
                onClick={() => handleClick(github)}
              />
            )}
            {live && (
              <Button1
                btnText="Live"
                icon="fa-solid fa-laptop"
                onClick={() => handleClick(live)}
              />
            )}
            <More detaildescs={details} name={name} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
