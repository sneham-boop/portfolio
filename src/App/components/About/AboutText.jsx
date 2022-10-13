import Card from "react-bootstrap/Card";
import Icon from "./Icon";
import Stack from "react-bootstrap/Stack";

function AboutText() {
  return (
    <section className="about-text">
      <div>
        <h3>About Me</h3>
        <p>
          Hi, I'm Sneha. I am a full-stack web developer who enjoys writing,
          adores good design and has a weakness for unfrosted vanilla cake. I
          have a diverse background in industrial automation and electrical
          engineering. In my career so far, programming was the part that made
          me come alive and I decided it was time to dive into it headfirst. Web
          development is exciting because there's always so much more to learn. The
          prospect of building something that someone is going to interact
          with directly is satisfying.
        </p>
        <p>
          In my journey so far, I've loved exploring new concepts and
          technologies but the most interesting part has been learning the ways
          of a new programming language. I am an artist in my free time and
          learning to code has felt a lot like making art. Anyone can do it, but
          to do it well you need practice, repetition and the
          willingness to experiment and break your code. Only then will you truly learn the nature
          of a medium and with experience, use it to your advantage. I picked Javascript as my
          medium and its dynamic nature has been fascinating compared to the
          other strictly typed languages like ladder logic or MATLAB that I've
          used in the past.
        </p>
        <p>
          I do not have a clear preference for frontend vs backend development
          yet. As my projects will show, I enjoy both. However, I drool over
          good design so I'm a tiny bit partial in that sense. 😉
        </p>
        <p>
          Apart from my funky sense of humour and sparkling personality, I bring
          many other things with me. I enjoy helping people succeed and solving
          problems. A 12 year electrical engineering career taught me
          strong analytical skills and over time it has molded my ability to see
          a bigger picture. As my many colleagues and friends will
          attest, I am easy to work with, and who doesn't appreciate that? I'd
          love to talk to you about what I've been upto so far and how I
          could add value to your team.
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
