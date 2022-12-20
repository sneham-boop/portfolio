import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import classNames from "classnames";
import Navbar from "react-bootstrap/Navbar";
import DarkMode from "../DarkMode";
import { modeContext } from "../../../providers/ModeProvider";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

function Navigation() {
  const { modeStyle } = useContext(modeContext);
  const linkStyle = classNames(modeStyle);

  const handleScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar
      className={classNames("navigation", modeStyle)}
      collapseOnSelect
      expand="sm"
    >
      <Link className={linkStyle} to="/home">
        <Logo />
      </Link>
      <DarkMode />
      <Navbar.Toggle aria-controls="nav">
        <span className="material-symbols-rounded">menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end" id="nav">
        <Nav>
          <Link className={linkStyle} to="/resume">
            Resume
          </Link>
          <Link
            className={linkStyle}
            onClick={() => handleScroll()}
            to="/contact"
          >
            Contact
          </Link>
          <Link className={linkStyle} to="/play">
            Play
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
