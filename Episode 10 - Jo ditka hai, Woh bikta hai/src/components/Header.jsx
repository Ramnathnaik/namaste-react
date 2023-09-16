import { Link } from "react-router-dom";
import ProductLogo from "../../public/images/logo.jpeg";

const Header = () => {
  return (
    <div className="flex justify-between shadow-xl px-4 py-2 mb-2 items-center bg-[#48966E]">
      <div className="w-16">
        <Link to={"/"}>
          <img src={ProductLogo} />
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className="px-4 text-lg">
            <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
              Home
            </Link>
          </li>
          <li className="px-4 text-lg">
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              About Us
            </Link>
          </li>
          <li className="px-2 text-lg">
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4 text-lg">
            <Link
              to={"/grocery"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Grocery
            </Link>
          </li>
          <li className="px-4 text-lg text-white">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
