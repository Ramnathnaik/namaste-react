import React from "react";
import SidebarItem from "./SidebarItem";
import {
  SIDEBAR_ICON_TITLE_SECTION_1,
  SIDEBAR_ICON_TITLE_SECTION_2,
  SIDEBAR_ICON_TITLE_SECTION_3,
} from "../utils/sidebarItems";

const Sidebar = () => {
  return (
    <div className="col-span-2 shadow-lg px-6 py-2">
      {SIDEBAR_ICON_TITLE_SECTION_1.map((item) => (
        <SidebarItem key={item.id} icon={item.icon} title={item.title} />
      ))}
      <hr className="m-2" />
      {SIDEBAR_ICON_TITLE_SECTION_2.map((item) => (
        <SidebarItem key={item.id} icon={item.icon} title={item.title} />
      ))}
      <hr className="m-2" />
      <h1 className="m-2 text-lg">Explore</h1>
      {SIDEBAR_ICON_TITLE_SECTION_3.map((item) => (
        <SidebarItem key={item.id} icon={item.icon} title={item.title} />
      ))}
    </div>
  );
};

export default Sidebar;
