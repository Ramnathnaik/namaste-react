import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to={"/grocery"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
