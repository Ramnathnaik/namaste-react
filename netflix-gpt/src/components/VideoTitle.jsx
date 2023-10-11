import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 w-screen aspect-video absolute text-white bg-black bg-opacity-10">
      <h1 className="font-semibold text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {title}
      </h1>
      <br />
      <p className="w-[40%] text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {overview}
      </p>
      <br />
      <div className="flex">
        <button className="bg-white text-black text-lg font-semibold px-4 py-2 m-2 w-36">
          <PlayArrowIcon /> Play
        </button>
        <button className="bg-neutral-600 text-lg font-semibold px-4 py-2 m-2 w-36 opacity-90">
          <InfoOutlinedIcon /> Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
