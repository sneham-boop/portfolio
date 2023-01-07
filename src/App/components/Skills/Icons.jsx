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
  Express,
  Ruby,
  Postman,
  Googlemaps,
  Canva,
  Git,
} from "@icons-pack/react-simple-icons";

const IconsInfo = [
  { slug: Html5, text: "HTML5", color: "#E34F26" },
  { slug: CssThree, text: "CSS3", color: "#1572B6" },
  { slug: Sass, text: "Sass", color: "#CC6699" },
  { slug: Jquery, text: "jQuery", color: "#0769AD" },
  { slug: Javascript, text: "JavaScript", color: "#F7DF1E" },
  { slug: ReactJs, text: "React", color: "#61DAFB" },
  { slug: Redux, text: "Redux", color: "#764ABC" },
  { slug: Nodedotjs, text: "Node.js", color: "#339933" },
  { slug: Express, text: "ExpressJS", color: "#000000" },
  { slug: Postgresql, text: "PostgreSQL", color: "#4169E1" },
  { slug: Mongodb, text: "MongoDB", color: "#47A248" },
  { slug: Bootstrap, text: "Bootstrap", color: "#7952B3" },
  { slug: Rubyonrails, text: "Ruby on Rails", color: "#CC0000" },
  { slug: Ruby, text: "Ruby", color: "#CC342D" },
  { slug: Postman, text: "Postman", color: "#FF6C37" },
  { slug: Googlemaps, text: "Google Maps API", color: "#4285F4" },
  { slug: Git, text: "Git & GitHub", color: "#F05032" },
  { slug: Canva, text: "Canva", color: "#00C4CC" },
  { slug: Jest, text: "Jest", color: "#C21325" },
  { slug: Cypress, text: "Cypress", color: "#17202C" },
  { slug: Storybook, text: "Storybook", color: "#FF4785" },
];

function Icons({ size = 50, iconArray }) {
  const icons = (iconArray || IconsInfo).map((info, index) => {
    const IconName = info.slug;
    return (
      <li key={`li-${index}`} className="skill">
        <IconName
          key={index}
          size={size}
          color={info.color}
        />
        {info.text && <span className="skill-name">{info.text}</span>}
      </li>
    );
  });
  return <>{icons}</>;
}

export default Icons;
