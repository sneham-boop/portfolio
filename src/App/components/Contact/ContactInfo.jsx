import InfoRow from "./InfoRow";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactInfo() {
  return (
    <section className="contact-info">
      <h3 className="mb-3">Get in touch with me</h3>
      <div>
        <InfoRow icon={"call"} info={"(905)-867-8896"} />
        <InfoRow icon={"mail"} info={"hello@snehakmahajan.com"} />
        <InfoRow icon={"contact_page"} info={"Resume"} link={"https://www.canva.com/design/DAFIyqWwxtc/wpEDnQ8xAQGGpGvLxjSWNQ/view?utm_content=DAFIyqWwxtc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}/>
      </div>
    </section>
  );
}

export default ContactInfo;
