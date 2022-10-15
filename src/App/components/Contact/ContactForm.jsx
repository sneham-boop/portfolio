import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';


function ContactForm() {
  return ( 
    <Form className="contact-form">
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
      <Row>
        <Col xs={7}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Subject"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Subject" />
          </FloatingLabel>
        </Col>
      </Row>

      <FloatingLabel controlId="floatingInput" label="Message" className="mb-3">
        <Form.Control as="textarea" type="text" placeholder="Message" />
      </FloatingLabel>

      <Button id="contact-submit" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
