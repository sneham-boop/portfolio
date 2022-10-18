import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Button1 from "../Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

function More(props) {
  const [modalShow, setModalShow] = useState(false);
  const { name, detailDescs } = props;
  const detailTitles = [
    "Idea",
    "Learned",
    "Test",
    "Next time",
    "More features",
    "User feedback",
  ];
  const showDetail = () => {
    return detailTitles.map((d, i) => {
      return (
        <section key={i} className="project-detail">
          <h4>{d}:</h4>
          <p>
            {detailDescs[i]} This app is inspired by dash. I am an artist in my
            spare time and this application felt like something I would actually
            use. I loved their clean and intuitive UI and so I took up the
            challenge to create a mock based on some of their features.
          </p>
        </section>
      );
    });
  };

  const handleClick = () => {
    setModalShow(true);
  };
  
  return (
    <>
      <Button1 end="button-end" btnText="More" onClick={handleClick} />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="project-modal"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header className="project-modal-header">
          <Modal.Title id="project-modal">About "{name}Colourly"</Modal.Title>{" "}
          <CloseButton variant="white" onClick={() => setModalShow(false)} />
        </Modal.Header>
        <Modal.Body className="project-modal-body">{showDetail()}</Modal.Body>
      </Modal>
    </>
  );
}

export default More;
