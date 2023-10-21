import React from "react";
import { buttons } from "../utils/buttonItems";

const ButtonList = () => {
  return (
    <div className="flex gap-2 m-4">
      {buttons.map((title, index) => (
        <button key={index} className="bg-gray-200 px-4 py-2 rounded-xl">
          {title}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
