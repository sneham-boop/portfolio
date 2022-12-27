import React, { useState, useContext } from "react";
import Button1 from "../Button";
import Modal from "react-bootstrap/Modal";
import classNames from "classnames";
import { modeContext } from "../../../providers/ModeProvider";


function More(props) {
  const [modalShow, setModalShow] = useState(false);
  const { modeStyle } = useContext(modeContext);
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
      <Button1
        end="button-end"
        btnText="About"
        icon="fa-solid fa-circle-info"
        onClick={handleClick}
      />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="project-modal"
        contentClassName={classNames("project-modal", modeStyle)}
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header className="project-modal-header">
          <Modal.Title id="project-modal">About "{name}"</Modal.Title>
          <span className="material-symbols-rounded" onClick={() => setModalShow(false)}>close</span>
        </Modal.Header>
        <Modal.Body className="project-modal-body">{showDetail()}</Modal.Body>
      </Modal>
    </>
  );
}

export default More;
