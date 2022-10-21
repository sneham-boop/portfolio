import Container from "react-bootstrap/Container";
import Icons from "./Icons";

import "./Skills.scss";


function Skills() {
  return (
    <Container id="skills" fluid>
      <h3>Skills</h3>
      <ul>
        <Icons />
      </ul>
    </Container>
  );
}

export default Skills;