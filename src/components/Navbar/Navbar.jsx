import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo1.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  // Clicking for mobile responsiveness
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  //Change Navbar color
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <nav className={color ? "navbar change" : "navbar"}>
      <div className="navbar-logo">
        <Link to="#home">
          <img src={logo} alt="businesslogo" />
        </Link>
      </div>
      {}
      <ul className="navbar-links">
        <li>
          <Link to="#home" className="first-navlink" onClick={closeMobileMenu}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="#about" className="first-navlink" onClick={closeMobileMenu}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="#projects"
            className="first-navlink"
            onClick={closeMobileMenu}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="#services"
            className="first-navlink"
            onClick={closeMobileMenu}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            to="#contact"
            className="first-navlink"
            onClick={closeMobileMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="navbar-smallscreen">
        <FaBars className="bars" color="#fff" onClick={() => setClick(true)} />

        {click && (
          <div className="navbar-smallscreen-overlay slide-bottom">
            <FaTimes
              color="#fff"
              fontSize={27}
              className="overlay__close"
              onClick={() => setClick(false)}
            />
            <ul className="navbar-smallscreen-links">
              <li>
                <Link
                  className="link-style"
                  to="#home"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="link-style"
                  to="#about"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="link-style"
                  to="#projects"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="link-style"
                  to="#services"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="link-style"
                  to="#contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
