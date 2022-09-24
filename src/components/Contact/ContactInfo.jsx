import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

function ContactInfo() {
  return (
    <section>
      <h3 className="mb-3">Contact Me</h3>
      <Row className="mb-3">
        <Col xs={1}>
          <span class="material-symbols-rounded">call</span>
        </Col>
        <Col>(905)-867-8896</Col>
      </Row >
      <Row>
        <Col xs={1} className="mb-3">
          <span class="material-symbols-rounded">mail</span>
        </Col>
        <Col>hello@snehakm.com</Col>
      </Row>
      <Row>
        <Col xs={1} className="mb-3">
          <span class="material-symbols-rounded">contact_page</span>
        </Col>
        <Col>Resume</Col>
      </Row>
    </section>
  );
}

export default ContactInfo;
