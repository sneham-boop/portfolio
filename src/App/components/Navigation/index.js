import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkMode from "../DarkMode";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

function Navigation() {
  return (
    <Navbar className="navigation" collapseOnSelect expand="sm">
      <DarkMode/>
      <Navbar.Toggle aria-controls="nav">
        <span className="material-symbols-rounded">menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end" id="nav">
        <Nav>
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/resume">
            Resume
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
