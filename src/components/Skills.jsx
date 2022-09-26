import Container from "react-bootstrap/Container";
import "./style/Skills.css";

function Skills() {
  const iconSlugs = [
    "javascript",
    "react",
    "nodedotjs",
    "sass",
    "mongodb",
    "postgresql",
  ];
  const icons = iconSlugs.map((slug) => {
    return (
      <li>
        <img
          key={slug}
          alt={slug}
          height="100"
          width="100"
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/${slug}.svg`}
        />
      </li>
    );
  });

  return (
    <Container id="skills" fluid>
      <h3>Skills</h3>
      <ul>{icons}</ul>
    </Container>
  );
}

export default Skills;
