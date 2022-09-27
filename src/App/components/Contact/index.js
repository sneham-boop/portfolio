import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container id="contact" fluid>
      <Row className="contact-row">
        <Col xs={7}>
          <ContactInfo />
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
