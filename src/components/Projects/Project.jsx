import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from "react-bootstrap/Stack";

function Project() {
  return (
    <Card className="project">
      <Card.Img variant="top" src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Stack direction="horizontal" gap={3}>
        <Button variant="primary">Github</Button>
        <Button variant="primary">Live</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default Project;