import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ snippet, statistics }) => {
  const menu = useSelector((store) => store.app.menu);

  const title = snippet.title;
  const tumbnail = snippet.thumbnails.medium.url;
  const channelTitle = snippet.channelTitle;
  const viewCount = statistics.viewCount;

  return (
    <div
      className={
        menu
          ? "m-2 shadow-lg w-96 rounded-xl cursor-pointer hover:shadow-2xl"
          : "m-2 shadow-lg w-72 rounded-xl cursor-pointer hover:shadow-2xl"
      }
    >
      <img
        className="rounded-t-xl w-full"
        src={tumbnail}
        alt="youtube-tumbnail"
      />
      <div className="px-4 py-2">
        <p className="font-semibold line-clamp-2">{title}</p>
        <p className="text-gray-500">{channelTitle}</p>
        <p className="text-gray-500">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
