import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
          <h3>{d}:</h3>
          <p>
            {detailDescs[i]} This app is inspired by dash. I am an artist in my spare time and
            this application felt like something I would actually use. I loved
            their clean and intuitive UI and so I took up the challenge to
            create a mock based on some of their features.
          </p>
        </section>
      );
    });
  };
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        More
      </Button>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            More about "{name}Colourly"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{showDetail()}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default More;
