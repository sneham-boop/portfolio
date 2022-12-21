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
          <Button1 btnText="Resume" custom="about-contact-btn" />
        </Link>
        <div className="icons">
          <a href="https://github.com/sneham-boop" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-3x" />
          </a>
          <a href="https://www.linkedin.com/in/mahajansneha/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-3x" />
          </a>
          <a href="https://codepen.io/snehacodes" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-codepen fa-3x" />
          </a>
          <a href="https://calendly.com/hellosneha/30min" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-calendar fa-3x" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
