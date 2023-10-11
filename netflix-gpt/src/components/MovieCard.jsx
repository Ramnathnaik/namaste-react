import React from "react";
import { TMDB_IMG_PATH } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-44 flex-shrink-0 mx-2">
      <img className="" src={TMDB_IMG_PATH + posterPath} alt={title} />
    </div>
  );
};

export default MovieCard;
