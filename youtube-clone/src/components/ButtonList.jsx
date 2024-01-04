import React, { useEffect } from "react";
import { buttons } from "../utils/buttonItems";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const categoryId = useSelector((store) => store.app.categoryId);

  return (
    <div className="flex gap-2 m-4 w-full">
      {buttons.map((item) => (
        <Link to={item.to} key={item.id}>
          <button
            className={
              categoryId === item.category
                ? "px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black"
                : "px-4 py-2 rounded-xl bg-slate-300 dark:bg-slate-800"
            }
          >
            {item.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
