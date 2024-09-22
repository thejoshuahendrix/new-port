import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css"; // Assuming you're using a separate CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Hendrix<span>Software</span>
        </a>
        <div className="menu-wrapper" onClick={toggleMenu}>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={toggleMenu}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        initial="closed"
        animate={isOpen ? "opened" : "closed"}
        variants={menuVariants}
        onClick={toggleMenu}
      >
        <ul>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
