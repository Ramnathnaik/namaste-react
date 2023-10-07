import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 w-screen aspect-video absolute text-white bg-black bg-opacity-10">
      <h1 className="font-semibold text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {title}
      </h1>
      <br />
      <p className="w-1/2 font-semibold text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {overview}
      </p>
    </div>
  );
};

export default VideoTitle;
