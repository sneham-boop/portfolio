import {
  ReactJs,
  Html5,
  CssThree,
  Javascript,
  Nodedotjs,
  Sass,
  Mongodb,
  Postgresql,
  Jquery,
  Bootstrap,
  Rubyonrails,
  Jest,
  Cypress,
  Storybook,
  Redux,
} from "@icons-pack/react-simple-icons";
import Badge from "react-bootstrap/Badge";

const IconsInfo = [
  {
    slug: Html5,
    text: "HTML5",
    color: "#E34F26",
  },
  {
    slug: CssThree,
    text: "CSS3",
    color: "#1572B6",
  },
  {
    slug: Javascript,
    text: "JavaScript",
    color: "#F7DF1E",
  },
  {
    slug: ReactJs,
    text: "React",
    color: "#61DAFB",
  },
  {
    slug: Nodedotjs,
    text: "Node.js",
    color: "#339933",
  },
  {
    slug: Sass,
    text: "Sass",
    color: "#CC6699",
  },
  {
    slug: Mongodb,
    text: "MongoDB",
    color: "#47A248",
  },
  {
    slug: Postgresql,
    text: "PostgreSQL",
    color: "#4169E1",
  },
  {
    slug: Jquery,
    text: "jQuery",
    color: "#0769AD",
  },
  {
    slug: Bootstrap,
    text: "Bootstrap",
    color: "#7952B3",
  },
  {
    slug: Rubyonrails,
    text: "Ruby on Rails",
    color: "#CC0000",
  },
  {
    slug: Jest,
    text: "Jest",
    color: "#C21325",
  },
  {
    slug: Cypress,
    text: "Cypress",
    color: "#17202C",
  },
  {
    slug: Storybook,
    text: "Storybook",
    color: "#FF4785",
  },
  {
    slug: Redux,
    text: "Redux",
    color: "#764ABC",
  },
];

function Icons() {
  const icons = IconsInfo.map((info, index) => {
    const IconName = info.slug;
    return (
      <li key={`li-${index}`} className="skill">
        <IconName key={index} color={info.color} size={80} />
        <Badge pill bg="dark">
          {info.text}
        </Badge>
      </li>
    );
  });
  return <>{icons}</>;
}

export default Icons;
