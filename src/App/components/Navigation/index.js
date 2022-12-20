import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkMode from "../DarkMode";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

function Navigation() {
  const handleScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // element.click({ behavior: "smooth" });
    }
  };
  return (
    <Navbar className="navigation" collapseOnSelect expand="sm">
      <Link className="nav-link" to="/home">
        <Logo />
      </Link>
      <DarkMode />

      <Navbar.Toggle aria-controls="nav">
        <span className="material-symbols-rounded">menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end" id="nav">
        <Nav>
          <Link className="nav-link" to="/resume">
            Resume
          </Link>
          <Link
            className="nav-link"
            onClick={() => handleScroll()}
            to="/contact"
          >
            Contact
          </Link>
          <Link className="nav-link" to="/play">
            Play
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
