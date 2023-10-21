import React from "react";
import useYoutubeVideos from "../hooks/useYoutubeVideos";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const VideoContainer = () => {
  useYoutubeVideos();
  const homeVideos = useSelector((store) => store.videos.homeVideos);
  const dispatch = useDispatch();

  const closeMenubar = () => {
    dispatch(closeMenu());
  };

  if (!homeVideos) return null;

  return (
    <div className="flex flex-wrap">
      {homeVideos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id} onClick={closeMenubar}>
          <VideoCard snippet={video.snippet} statistics={video.statistics} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
