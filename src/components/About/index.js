import Icon from "./Icon";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AboutText from "./AboutText";
import "./About.css";

function About() {
  return (
    <Container id="about" fluid>
      <Row>
        <Col>
          <AboutText />
        </Col>
        <Col>
          <Icon icon={"linkedin"} />
          <Icon icon={"square-github"} />
          <Icon icon={"codepen"} />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
