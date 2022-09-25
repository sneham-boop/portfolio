import InfoRow from "./InfoRow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

function ContactInfo() {
  return (
    <section>
      <h3 className="mb-3">Get in touch with me</h3>
      <InfoRow icon={"call"} info={"(905)-867-8896"}/>
      <InfoRow icon={"mail"} info={"hello@snehakm.com"}/>
      <InfoRow icon={"contact_page"} info={"Resume"}/>
    </section>
  );
}

export default ContactInfo;
