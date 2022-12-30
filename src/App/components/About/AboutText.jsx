import Button1 from "../Button";
import Emoji from "../Emoji";

function AboutText() {
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
          I am a lifelong engineer and keen on all things visual and
          interactive. And cake. I also really love cake.
        </p>
        <p>
          My first taste of web development was in 2020 when I created a basic
          WIX <a href="https://www.snehakm.com">website</a> to sell my art. As
          an engineer & artist who loves breaking and rebuilding things, the
          possibility of creating something beautiful and functional, that
          people could directly interact with was fulfilling. I could tell I had
          to explore this further when I was way more invested in people having
          a better experience on my website, than purchasing my art. I focussed
          on a few months of self-learning and then I went all in. In Oct 2022,
          I completed a Diploma in Full-Stack Web Development through
          <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a> in
          Canada.
        </p>
        <p>
          Since bootcamp, I've learnt many new skills. What has been
          particularly exciting is plain old CSS and what all magic can be done
          with it to liven up a simple website. I've also learnt a little more
          about NoSQL databases, I plan to integrate MongoDB into my current
          project about finding fun eating spots near dependable parking
          locations in Toronto. Ask me more about this when we chat!
        </p>
        <p>
          When I am not working, you will find me being goofy with my doggo,
          involved in local community art events or making art in my little home
          studio, listening to music, reading or hiking with my doggo and
          husband in the beautiful Niagara escarpment area.
        </p>
        <p>
          Besides my funky sense of humour and sparkling personality, I bring a
          barrage of other qualities with me. I genuinely enjoy helping people
          succeed. After getting to the end of a project involving complex
          problems, you will find me documenting and sharing my experiences with
          others. An experience in electrical engineering and automation has
          toughened my analytical and problem solving skills. Tell me something
          can't be done and you'll find me knee deep in trying to find a
          solution.
        </p>
        <p>
          And...as my colleagues and friends will attest, I am easy to work with
          and who doesn't appreciate that? <Emoji symbol="😉" label="wink" />
        </p>
        <p>
          I'm now looking for a full-time role where I can share my programming
          skills. I'd love to talk to you about what I'm currently working on
          and how I could add value to your team. Contact me below!
        </p>
      </div>
      <Button1
        btnText="Contact Me"
        onClick={() => handleScroll()}
        custom="about-contact-btn"
      />
    </section>
  );
}

export default AboutText;
