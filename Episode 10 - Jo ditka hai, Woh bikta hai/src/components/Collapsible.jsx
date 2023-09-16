import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { SWIGGY_RESTURANT_MENU_FOOD_IMG_URL } from "../utils/constants";

const Collapsible = (props) => {
  const { menuItem } = props;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="menu-toggle-header flex justify-between px-5 py-4 m-4 rounded-xl shadow-lg">
        <h1>
          {menuItem.title} ({menuItem.itemCards.length})
        </h1>
        <Button onClick={handleToggle}>
          <ExpandMoreIcon />
        </Button>
      </div>
      {toggle &&
        menuItem.itemCards.map((item) => (
          <div
            key={item.card.info.id}
            className="menu-item-container mx-8 my-5 px-5 flex justify-between items-center shadow-xl py-4 rounded-xl"
          >
            <div className="menu-item w-fit pr-5">
              <h4 className="font-semibold py-1">{item.card.info.name}</h4>
              <p className="font-medium text-orange-400 py-1">
                ₹ {item.card.info.price || item.card.info.defaultPrice / 100}
              </p>
              <p className="font-normal py-1">{item.card.info.description}</p>
            </div>
            <div className="menu-item-img">
              <img
                className="menu-food-img w-24 rounded-xl"
                src={
                  SWIGGY_RESTURANT_MENU_FOOD_IMG_URL + item.card.info.imageId
                }
                alt="food-img"
              ></img>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Collapsible;
