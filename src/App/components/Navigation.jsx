import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

function CollapsibleExample() {
  return (
    <Navbar className="navigation" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="nav">
        <span class="material-symbols-rounded">menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end" id="nav">
        <Nav>
          <Nav.Link href="#projects">home</Nav.Link>
          <Nav.Link href="#projects">projects</Nav.Link>
          <Nav.Link href="#skills">skills</Nav.Link>
          <Nav.Link href="#play">play</Nav.Link>
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#contact">contact</Nav.Link>
          <Nav.Link href="#resume">resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
