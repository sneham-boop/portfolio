import Container from "react-bootstrap/Container";
import "./Skills.css";
import Icons from "./Icons";

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
