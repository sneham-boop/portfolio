import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import "src/App/components/Contact/Contact.scss";

function Contact() {
  return (
    <div id="contact" className="contact-row">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
