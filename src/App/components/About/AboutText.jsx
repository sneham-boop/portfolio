import Icon from "./Icon";
import Button1 from "../Button";

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

  const handleScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about-text">
      <div>
        <h2>ABOUT ME</h2>
        <p>
          As a lifelong engineer, I'm keen on all things visual and interactive.
          And cake. I also love cake.
        </p>
        <p>
          My first taste of web development was in 2020 when I created a basic
          WIX website to sell my art. As an engineer & artist who loves breaking
          and rebuilding things, the possibility of creating something beautiful
          and functional, that people could interact with directly was intensely
          fulfilling. I could sense I had to explore this thought more when I
          was way more interested in people having a good experience on my
          website, than purchasing my art. I focussed on a few months of
          selflearning and then I went all in. In Oct 2022, I completed a
          Diploma in Full-Stack Web Development through Lighthouse Labs in
          Canada.
        </p>
        <p>
          Since bootcamp, I've learnt many new skills. What has been
          particularly exciting is plain old CSS and what all magic can be done
          with it. I've also learnt a little more about MongoDB to integrate it
          into my current project about finding good parking locations in
          Toronto.
        </p>
        <p>
          Besides my funky sense of humour and sparkling personality, I bring a
          barrage of other qualities with me. I genuinely enjoy helping people
          succeed. I love solving complex problems. An experience in electrical
          engineering has toughened my analytical and problem solving skills.
          Tell me something can't be done and you'll find me knee deep in trying
          to find a solution.
        </p>
        <p>
          And...as my colleagues and friends will attest, I am easy to work with
          and who doesn't appreciate that? 😉
        </p>
        <p>
          I'm now looking for a full-time role where I can share my programming
          skills. I'd love to talk to you about what I'm currently working on
          and how I could add value to your team. Contact me below!
        </p>
      </div>
      {/* {showIcons()} */}
      <Button1 btnText="Contact Me" onClick={()=>handleScroll()} custom="about-contact-btn"/>
    </section>
  );
}

export default AboutText;
