import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlaying);
  if (!movies?.length) return;

  // Get a random index.
  const randomIndex = Math.floor(Math.random() * movies.length);
  // Get the item at the random index.
  const mainMovie = movies[randomIndex];
  const { title, overview, id } = mainMovie;
  console.log(id);

  return (
    <div className="w-screen">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
