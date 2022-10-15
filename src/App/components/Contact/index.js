import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Container from "react-bootstrap/Container";

import "./Contact.scss";

function Contact() {
  return (
    <Container id="contact" fluid>
      <div className="contact-row">
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
}

export default Contact;
