import { Link } from "react-router-dom";
import logo from "../../images/pinkK.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      {/* <div className="new-logo">K</div> */}
      <div className="nav-options">
        <Link to="/about" className="nav-option">
          About
        </Link>
        <Link to="/projects" className="nav-option">
          Projects
        </Link>
        <Link to="/contact" className="nav-option">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
