import React from "react";
import "./Contact.scss";
import ShowIcons from "./ShowIcons";
import pdf from "../../documents/resume-sneha.pdf";

function Contact() {
  return (
    <div id="contact">
      <section className="contact-intro">
        <h2>CONTACT ME</h2>
        <p>
          Thank you for taking the time to look at my portfolio. Let's talk
          about how I can help you and your team in your next project.
        </p>
      </section>
      <section className="contact-info">
        <a className="resume-link" href={pdf} target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <div>
          <span className="contact-email">Email: </span>
          <span>hello@snehakm.com</span>
        </div>

        <section className="socials">
          <h3>SOCIALS</h3>
          <ShowIcons />
        </section>
      </section>
    </div>
  );
}

export default Contact;
