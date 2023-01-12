import React, { useRef } from "react";
// import { gsap } from "gsap";
import "./Contact.scss";
import ShowIcons from "./ShowIcons";
import { Link } from "react-router-dom";

function Contact() {
  const contactRef = useRef(null);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const element = contactRef.current;
  //     const rect = element.getBoundingClientRect();

  //     const onMouseEnter = (e) => {
  //       const xEl = e.offsetX - rect.left;
  //       const yEl = e.offsetY - rect.top;
  //       const xMove = ((xEl - rect.width / 2) / rect.width) * 50;
  //       const yMove = ((yEl - rect.width / 2) / rect.height) * 4;
  //       // const moveX = (e.pageX - window.innerWidth / 2) / depth;
  //       // const moveY = (e.pageY - window.innerHeight / 2) / depth;
  //       gsap.to(".resume-link", {
  //         duration: 1,
  //         x: 5,
  //         y: 10,
  //         repeat: -1 ,
  //         yoyo: true
  //         // transformPerspective: 500,
  //       });
  //     };

  //     // Add event listeners
  //     element.addEventListener("mouseenter", onMouseEnter);
  //   }, contactRef);
  //   return () => ctx.revert();
  // });

  return (
    <div id="contact" ref={contactRef}>
      <section className="contact-intro">
        <h2>CONTACT ME</h2>
        <p>
          Thank you for taking the time to look at my portfolio. Let's talk
          about how I can help you and your team in your next project.
        </p>
      </section>
      <section className="contact-info">
        <Link to="/resume" className="resume-link" id="resume-button">
          See Resume
        </Link>
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
