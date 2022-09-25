import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Image from 'react-bootstrap/Image';
import AboutText from "./AboutText";
import "./About.css";
import photo from "../images/headshot.JPG";

function About() {
  return (
    <Container id="about" fluid>
      <Stack direction="horizontal" gap={5}>
        <AboutText />
        <img src={photo} alt="Sneha" />
      </Stack>
    </Container>
  );
}

export default About;
