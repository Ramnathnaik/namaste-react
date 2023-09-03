import { FOOD_IMG_URL } from "../utils/constants";
import RatingLogo from "../../public/images/star.png";

const ResturantCard = (props) => {
  const { resturantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, areaName } =
    resturantData;

  return (
    <div className="resturant-card">
      <img className="food-img" src={FOOD_IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div className="rating-container">
        <img className="rating-img" src={RatingLogo} alt="rating-img"></img>
        <h3>{avgRating}</h3>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default ResturantCard;
