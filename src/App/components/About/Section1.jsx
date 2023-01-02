import picture from "../images/picture.jpg";

function Section1() {
  return (
    <div className="about-section section-1">
      <div>
        <p>
          I am a lifelong engineer and keen on all things visual and
          interactive. And cake. I also really love cake.
        </p>
        <p>
          My first taste of web development was in 2020 when I created a basic
          WIX{" "}
          <a href="https://www.snehakm.com" target="_blank" rel="noreferrer">
            website
          </a>{" "}
          to sell my art. As an engineer & artist who loves breaking and
          rebuilding things, the possibility of creating something beautiful and
          functional, that people could directly interact with was fulfilling. I
          could tell I had to explore this further when I was way more invested
          in people having a better experience on my website, than purchasing my
          art. I focussed on a few months of self-learning and then I went all
          in. In Oct 2022, I completed a Diploma in Full-Stack Web Development
          through{" "}
          <a
            href="https://www.lighthouselabs.ca/"
            target="_blank"
            rel="noreferrer"
          >
            Lighthouse Labs
          </a>{" "}
          in Canada.
        </p>
      </div>
      <img width={"792"} height={"594"} src={picture} alt="Sneha sitting on a beautiful fallen tree stump."/>
    </div>
  );
}

export default Section1;
