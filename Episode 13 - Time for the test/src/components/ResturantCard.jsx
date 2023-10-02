import { FOOD_IMG_URL } from "../utils/constants";
import RatingLogo from "../../public/images/star.png";

const ResturantCard = (props) => {
  const { resturantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, areaName } =
    resturantData;

  return (
    <div data-testid="ResturantCard" className="resturant-card">
      <img
        className="food-img h-56 w-[300px] rounded-xl"
        src={FOOD_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold text-xl py-1">{name}</h3>
      <div className="rating-container flex space-x-2 py-2">
        <img className="rating-img w-7" src={RatingLogo} alt="rating-img"></img>
        <h3>{avgRating}</h3>
      </div>
      <p className="text-slate-500 py-1">{cuisines.join(", ")}</p>
      <p className="text-slate-500 py-1">{areaName}</p>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label
          htmlFor="highRating"
          className="relative z-[1] bg-black text-white py-[5px] px-[10px] top-[10px] right-[15px]"
        >
          Good rated
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
