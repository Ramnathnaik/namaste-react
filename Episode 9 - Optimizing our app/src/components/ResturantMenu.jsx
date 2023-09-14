import Collapsible from "./Collapsible";
import RatingLogo from "../../public/images/star.png";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturants from "../utils/useResturants";

const ResturantMenu = () => {
  const { resId } = useParams();

  const { resturantInfo, resturantMenu } = useResturants(resId);

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
