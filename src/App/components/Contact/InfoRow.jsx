import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function InfoRow({ icon, info }) {
  return (
    <Row className="mb-3 info-row">
      <Col xs={1}>
        <span className="material-symbols-rounded">{icon}</span>
      </Col>
      <Col>{info}</Col>
    </Row>
  );
}

export default InfoRow;
