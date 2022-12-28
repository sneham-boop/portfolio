import React, { useContext, useState } from "react";
import Nav from "react-bootstrap/Nav";
import classNames from "classnames";
import Navbar from "react-bootstrap/Navbar";
import DarkMode from "../DarkMode";
import { modeContext } from "../../../providers/ModeProvider";
import Logo from "./Logo";

import { Link } from "react-router-dom";
import pdf from "../../documents/resume-sneha.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

function Navigation() {
  
  const { modeStyle } = useContext(modeContext);
  const [menuIcon, setMenuIcon] = useState("menu");
  const linkStyle = classNames(modeStyle);

  // const handleScroll = () => {
  //   const element = document.getElementById("contact");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleClick = () => {
    menuIcon === "menu" ? setMenuIcon("close") : setMenuIcon("menu");
  };

  return (
    <>
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
          <span
            className="material-symbols-rounded"
            onClick={() => handleClick()}
          >
            {menuIcon}
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end" id="nav">
          <Nav>
            {/* <Link className={linkStyle} to="/resume">
            Resume
          </Link> */}
            <a
              className={linkStyle}
              href={pdf}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            {/* <Link
            className={linkStyle}
            onClick={() => handleScroll()}
            to="/contact"
          >
            Contact
          </Link> */}
            <Link className={linkStyle} to="/play">
              Play
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
}

export default Navigation;
