// import picture from "../images/picture.jpg";
import picture from "../images/Picture - Sneha.png";

function Section1() {
  return (
    <div className="about-section section-1">
      <div className="section-1-text">
        <p>
          I am a lifelong engineer and keen on all things visual and
          interactive. And cake. I also really love cake.
        </p>
        <p>
          Web development started in 2020 when I created a WIX{" "}
          <a href="https://www.snehakm.com" target="_blank" rel="noreferrer">
            website
          </a>{" "}
          to sell art. As an engineer & artist, who loves breaking and
          rebuilding things, the ability to create something functional and
          beautiful that people could directly interact with was fulfilling.
          After a few months of self-learning, there was no looking back for me.
          In Oct 2022, I completed a Diploma in Full-Stack Web Development
          through{" "}
          <a
            href="https://www.lighthouselabs.ca/"
            target="_blank"
            rel="noreferrer"
          >
            Lighthouse Labs
          </a>{" "}
          in Toronto.
        </p>
        <p>
          I've learnt many new skills since then. What has been particularly
          exciting, is plain old JavaScript and CSS what all can be done
          with it to liven up a simple website. I've also learnt a little more
          about NoSQL databases. Currently, I am using MongoDB in a project about finding
          fun eating spots near dependable parking locations. Ask me more about the origin of
          this idea when we chat!
        </p>
      </div>
      <div className="img-container">
        <img
          width="594"
          height="446"
          src={picture}
          alt="Sneha looking at you."
        />
      </div>
    </div>
  );
}

export default Section1;
