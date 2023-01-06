import React, { useContext, useState } from "react";
import Nav from "react-bootstrap/Nav";
import classNames from "classnames";
import Navbar from "react-bootstrap/Navbar";
import DarkMode from "../DarkMode";
import { modeContext } from "../../../providers/ModeProvider";
import Logo from "./Logo";
// import Resume from "../Resume";
import { Link } from "react-router-dom";
// import pdf from "../../documents/Resume.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

function Navigation() {
  const { modeStyle } = useContext(modeContext);
  const [menuIcon, setMenuIcon] = useState("menu");
  const linkStyle = classNames(modeStyle);

  // Use setTimeout to allow contact component to load before scrolling it into view.
  const handleScroll = async () => {
    setTimeout(() => {
      const element = document.getElementById("contact");

      if (element) {
        console.log("Found contact component.");
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("No luck finding contact component.");
      }
    }, 100);
  };

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
        <Link className={linkStyle} to="/">
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
            <Link className={linkStyle} to="/resume">
              {/* <a className={linkStyle} href="/resume" target="_blank" rel="noreferrer"> */}
              Resume
              {/* </a> */}
            </Link>
            {/* <a
              className={linkStyle}
              href={pdf}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a> */}
            <Link
              className={linkStyle}
              onClick={() => handleScroll()}
              to="/home/contact"
            >
              Contact
            </Link>
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
