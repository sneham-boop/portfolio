import React from "react";
import Button1 from "../Button";
import "./Contact.scss";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div id="contact">
      <section className="contact-intro">
        <h2>CONTACT ME</h2>
        <p>
          Thank you for taking the time to look through my portfolio. Let's chat
          about how I can help you in your next project.
        </p>
      </section>
      <section className="contact-info">
        <div>
          <span className="contact-email">Email: </span>
          <span>hello@snehakm.com</span>
        </div>
        <Link className="nav-link" to="/resume">
          <Button1
            btnText="Resume"
            custom="about-contact-btn"
          />
        </Link>
      </section>
    </div>
  );
}

export default Contact;
