// import picture from "../images/picture.jpg";
import picture from "../images/Picture - Sneha.png";

function Section1() {
  return (
    <div className="about-section section-1">
      <div className="section-1-text">
        <p>
          I am a lifelong engineer with a strong passion for visual and
          interactive experiences, and a love for cake (vanilla, if you're
          taking notes).
        </p>
        <p>
          In 2020, I dove into web development, creating a{" "}
          <a href="https://www.snehakm.com" target="_blank" rel="noreferrer">
            website
          </a>{" "}
          to showcase and sell my artwork. Combining my engineering and artistic
          skills, I found immense joy in building functional and visually
          pleasing interactive platforms. Since then, I've continuously expanded
          my skill set, currently exploring Next.js for efficient server-side
          rendering (SSR) and delving into NoSQL databases, starting with
          MongoDB. I'm currently working on an{" "}
          <a
            href="https://parkeat.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            app
          </a>{" "}
          that focuses on discovering enjoyable dining spots near reliable
          parking locations in large cities, utilizing my MongoDB and Next.js knowledge. I'd be
          happy to share more about the inspiration behind this project during
          our chat.
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
