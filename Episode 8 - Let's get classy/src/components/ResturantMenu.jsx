import { useEffect, useState } from "react";
import Collapsible from "./Collapsible";
import { SWIGGY_RESTURANT_MENU_URL } from "../utils/constants";
import RatingLogo from "../../public/images/star.png";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resturantMenu, setResturantMenu] = useState(null);
  const [resturantInfo, setResturantInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchResturantMenu();
  }, []);

  const fetchResturantMenu = async () => {
    const data = await fetch(SWIGGY_RESTURANT_MENU_URL + resId);
    const jsonData = await data.json();

    const resInfo = jsonData?.data?.cards?.[0]?.card?.card?.info;
    setResturantInfo(resInfo);

    let reqData =
      jsonData?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    reqData = reqData.filter((resData) => {
      if (resData.card.card?.itemCards) return resData;
    });
    setResturantMenu(reqData);
  };

  if (!resturantMenu) return <Shimmer />;

  const { name, cuisines, areaName, sla, avgRatingString, totalRatingsString } =
    resturantInfo;

  return (
    <div className="resturant-menu">
      <div className="resturant-menu-header">
        <div className="menu-header">
          <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>
              {areaName}, {sla.lastMileTravelString}
            </h3>
          </div>
          <div>
            <div className="rating-container">
              <img
                className="rating-img"
                src={RatingLogo}
                alt="rating-img"
              ></img>
              <h3>{avgRatingString}</h3>
            </div>
            <h3>{totalRatingsString}</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="menu-section">
        {resturantMenu.map((menuItem, index) => (
          <Collapsible key={index} menuItem={menuItem.card.card} />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
