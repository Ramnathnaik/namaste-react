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
      <div className="menu-toggle-header">
        <h1>
          {menuItem.title} ({menuItem.itemCards.length})
        </h1>
        <Button onClick={handleToggle}>
          <ExpandMoreIcon />
        </Button>
      </div>
      {toggle &&
        menuItem.itemCards.map((item) => (
          <div key={item.card.info.id} className="menu-item-container">
            <div className="menu-item">
              <h4>{item.card.info.name}</h4>
              <p>
                ₹ {item.card.info.price || item.card.info.defaultPrice / 100}
              </p>
              <p>{item.card.info.description}</p>
            </div>
            <div className="menu-item-img">
              <img
                className="menu-food-img"
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
