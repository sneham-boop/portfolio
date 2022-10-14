import Card from "react-bootstrap/Card";
import Button1 from "../Button";
import More from "./More";

function Project(props) {
  const { name, description, details, github, live, media } = props;
  const liveLink = live || "https://github.com/sneham-boop/colourly";
  const mediaSrc =
    media ||
    "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const githubLink = github || "https://github.com/sneham-boop/colourly";

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Card className="project">
      <Card.Img variant="top" src={mediaSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="project-buttons">
          <Button1 btnText="GitHub" onClick={() => handleClick(githubLink)} />
          <Button1 btnText="Live" onClick={() => handleClick(liveLink)} />
          <More detailDescs={details} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;
