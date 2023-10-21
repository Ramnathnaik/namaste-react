import React from "react";
import useRecomendations from "../hooks/useRecomendations";
import { useSelector } from "react-redux";
import RecommendedVideo from "./RecommendedVideo";

const Recomendations = () => {
  useRecomendations();
  const recommendedVideos = useSelector(
    (store) => store.videos.recommendedVideos
  );

  return (
    <div>
      {recommendedVideos &&
        recommendedVideos.map((video) => (
          <RecommendedVideo
            key={video.id.videoId}
            videoId={video.id.videoId}
            tumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
          />
        ))}
    </div>
  );
};

export default Recomendations;
