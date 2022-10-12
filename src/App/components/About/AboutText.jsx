import Card from "react-bootstrap/Card";
import Icon from "./Icon";
import Stack from "react-bootstrap/Stack";

function AboutText() {
  return (
    <section className="about-text">
      <div>
        <h3>About Me</h3>
        <p>
          I am a full-stack web developer with a diverse background in
          industrial automation and controls engineering. Programming has always
          been the most engaging part of my career so far and I'm excited to
          take a deeper dive into it through web development. I have a
          preference for front-end development and enjoy the process of building
          interactive applications with a clean UI. I am a lifelong learner and
          passionate about solving problems through software development.
        </p>
      </div>
      <div className="about-icons">
        <Icon icon={"linkedin"} />
        <Icon icon={"square-github"} />
        <Icon icon={"codepen"} />
      </div>
    </section>
  );
}

export default AboutText;
