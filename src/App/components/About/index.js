import "./About.scss";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function About() {
  return (
    <section id="about">
      <div className="about-text">
        <h2>ABOUT ME</h2>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </section>
  );
}

export default About;