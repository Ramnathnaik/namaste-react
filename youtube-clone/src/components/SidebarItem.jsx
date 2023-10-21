import React from "react";

const SidebarItem = ({ icon: Icon, title }) => {
  return (
    <div className="p-2 cursor-pointer">
      <Icon />
      <span className="ml-2">{title}</span>
    </div>
  );
};

export default SidebarItem;
