import React from "react";
import useLiveVideos from "../hooks/useLiveVideos";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import VideoCard from "./VideoCard";
import { clearChats } from "../utils/chatSlice";
import { ShimmerPostList } from "react-shimmer-effects";

const LiveVideoContainer = () => {
  useLiveVideos();
  const liveVideos = useSelector((store) => store.videos.liveVideos);
  const dispatch = useDispatch();

  const closeMenubar = () => {
    dispatch(closeMenu());
    dispatch(clearChats());
  };

  if (!liveVideos)
    return (
      <div className="col-span-10 m-4">
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
      </div>
    );

  return (
    <div className="flex flex-wrap">
      {liveVideos.map((video) => (
        <Link
          to={"/watch?v=" + video.id.videoId}
          key={video.id.videoId}
          onClick={closeMenubar}
        >
          <VideoCard snippet={video.snippet} statistics={video.statistics} />
        </Link>
      ))}
    </div>
  );
};

export default LiveVideoContainer;
