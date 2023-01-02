import Button1 from "../Button";

function Section3() {
  const handleScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="about-section section-3">
      <p>
        I'm now looking for a full-time role where I can share my programming
        skills. I'd love to talk to you about what I'm currently working on and
        how I could add value to your team.
      </p>
      <div>
        <Button1
          btnText="Contact Me"
          onClick={() => handleScroll()}
          custom="about-contact-btn"
        />
      </div>
    </div>
  );
}

export default Section3;
