import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black z-10 absolute w-full">
      <img className="w-44 p-4 m-4" src={NETFLIX_LOGO} alt="netflix-logo" />
    </div>
  );
};

export default Header;
