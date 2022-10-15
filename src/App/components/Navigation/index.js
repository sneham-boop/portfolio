import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

function CollapsibleExample() {
  return (
    <Navbar className="navigation" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="nav">
        <span className="material-symbols-rounded">menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end" id="nav">
        <Nav>
          <Link className="nav-link" to="/home">
            home
          </Link>
          <Link className="nav-link" to="/play">
            play
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
