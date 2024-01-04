import React from "react";
import { useSelector } from "react-redux";
import CellTowerIcon from "@mui/icons-material/CellTower";

const VideoCard = ({ snippet, statistics }) => {
  const menu = useSelector((store) => store.app.menu);

  const title = snippet.title;
  const tumbnail = snippet.thumbnails.medium.url;
  const channelTitle = snippet.channelTitle;
  const viewCount = statistics?.viewCount;
  const liveBroadcastContent = snippet?.liveBroadcastContent;

  return (
    <div
      className={
        menu
          ? "m-2 shadow-lg w-96 rounded-xl cursor-pointer hover:shadow-2xl"
          : "m-2 shadow-lg w-72 rounded-xl cursor-pointer hover:shadow-2xl"
      }
    >
      <div>
        <img
          className="rounded-t-xl w-full"
          src={tumbnail}
          alt="youtube-tumbnail"
        />
        {liveBroadcastContent === "live" && (
          <p className="relative z-10 bg-red-600 p-1 text-white">
            <CellTowerIcon />
            &nbsp;Live
          </p>
        )}
      </div>
      <div className="px-4 py-2">
        <p className="font-semibold line-clamp-2">{title}</p>
        <p className="text-gray-500 dark:text-slate-300">{channelTitle}</p>
        <p className="text-gray-500 dark:text-slate-300">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
