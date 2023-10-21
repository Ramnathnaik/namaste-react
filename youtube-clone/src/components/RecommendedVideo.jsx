import React from "react";
import { Link } from "react-router-dom";

const RecommendedVideo = ({ title, tumbnail, channelTitle, videoId }) => {
  return (
    <Link to={"/watch?v=" + videoId}>
      <div className="flex m-2 cursor-pointer">
        <img
          className="w-1/3 rounded-xl"
          src={tumbnail}
          alt="recommended-video"
        />
        <div className="m-2 p-2 flex flex-col justify-start">
          <h1 className="font-semibold">{title}</h1>
          <p className="text-sm">{channelTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedVideo;
