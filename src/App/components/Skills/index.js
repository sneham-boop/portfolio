import Container from "react-bootstrap/Container";
import Icons from "./Icons";

import "./Skills.scss";


function Skills() {
  return (
    <Container id="skills" fluid>
      <h2>SKILLS</h2>
      <ul>
        <Icons />
      </ul>
    </Container>
  );
}

export default Skills;
