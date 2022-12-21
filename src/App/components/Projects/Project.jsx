import React from "react";
import Button1 from "../Button";
import More from "./More";

function Project(props) {
  const { num, name, description, details, github, live, media } = props;
  const liveLink = live || "https://github.com/sneham-boop/colourly";
  const mediaSrc =
    media ||
    "https://images.pexels.com/photos/57565/pexels-photo-57565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const githubLink = github || "https://github.com/sneham-boop/colourly";

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <section id={`project-${num + 1}`} className="project">
        <div className="project-info">
          <h3>
            {num + 1}. {name}
          </h3>
          <img
            className="project-img"
            src={mediaSrc}
            alt="Live project looks like this"
          />
          <p>{description}</p>
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
      </section>
    </>
  );
}

export default Project;
