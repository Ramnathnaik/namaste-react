import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailer = useSelector((store) => store.movies.trailer);
  if (!trailer) return;

  const { key } = trailer;

  return (
    <div className="w-screen aspect-video pt-24 md:pt-0 bg-black">
      <iframe
        className="aspect-video w-screen"
        src={`https://www.youtube.com/embed/${key}?controls=0&autoplay=1&mute=1&rel=0&loop=1&playlist=${key}`}
        title="YouTube video player"
        allowFullScreen
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
