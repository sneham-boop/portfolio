import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Button1 from "../Button";
import Stack from "react-bootstrap/Stack";
import More from "./More";

function Project(props) {
  const { detailDescs } = props;
  return (
    <Card className="project">
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="project-buttons">
          <Button1 btnText="GitHub" />
          <Button1 btnText="Live" />
          <More detailDescs={detailDescs}/>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;
