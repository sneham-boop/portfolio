import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-form">
      <Row>
        <Col xs={7}>
        <ContactInfo></ContactInfo>
        </Col>
        <Col>
          <ContactForm></ContactForm>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;
