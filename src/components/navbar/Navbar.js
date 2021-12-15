import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/pinkK.png";
import "./navbar.css";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(null);
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 700) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleHamburgerMenuClick = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="menu-control" onClick={handleHamburgerMenuClick}>
          <i className="fas fa-bars fa-lg" />
        </div>
      </div>
      {activeMenu && (
        <div className="nav-options" onMouseLeave={window.innerWidth < 700 ? handleHamburgerMenuClick : <></>}>
          <Link to="/" className="nav-option home-link">
            Home
          </Link>
          <Link to="/about" className="nav-option about-link">
            About
          </Link>
          <Link to="/projects" className="nav-option projects-link">
            Projects
          </Link>
          <Link to="/contact" className="nav-option contact-link">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
