import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.menu);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        {isMenuOpen && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
