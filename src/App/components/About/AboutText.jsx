import Icon from "./Icon";

function AboutText() {
  const showIcons = () => {
    const links = {
      linkedin: "https://www.linkedin.com/in/mahajansneha/",
      "square-github": "https://github.com/sneham-boop",
      codepen: "https://codepen.io/snehacodes",
    };
    return (
      <div className="about-icons">
        {Object.keys(links).map((icon, i) => (
          <Icon key={i} icon={icon} link={links[icon]} />
        ))}
      </div>
    );
  };
  return (
    <section className="about-text">
      <div>
        <h3>About Me</h3>
        <p>
          I am a full-stack web developer with a background in electrical
          engineering and automation. My first taste of web development was when
          I created a WIX website to sell art a few years ago. The
          possibility of building something that people would interact with
          directly was intensely fulfilling. This propelled me into learning to
          make web applications. Currently, I am exploring CSS animation and
          understanding the theories behind UI/UX to enable me to become a more
          efficient web developer.
        </p>
        <p>
          As a potential future member of your team, I bring many other things
          with me, apart from my funky sense of humour and sparkling
          personality. I enjoy helping people succeed and solving problems.
          An experience in electrical engineering has toughened my analytical
          and problem solving skills. It has molded my ability to see the bigger
          picture when developing applications people will interact with.
          And...as my colleagues and friends will attest, I am easy to work
          with and who doesn't appreciate that? 😉
        </p>
        <p>
          I'd love to talk to you about what I'm currently working on and how I
          could add value to your team. Contact me below!
        </p>
      </div>
      {showIcons()}
    </section>
  );
}

export default AboutText;
