import { useDispatch } from "react-redux";
import { RECOMMENDED_VIDEOS } from "../utils/constants";
import { useEffect } from "react";
import { addRecommendedVideos } from "../utils/videosSlice";

const useRecomendations = () => {
  const dispatch = useDispatch();

  const getRecomendations = async () => {
    const data = await fetch(RECOMMENDED_VIDEOS);
    const json = await data.json();
    dispatch(addRecommendedVideos(json.items));
  };

  useEffect(() => {
    getRecomendations();
  }, []);
};

export default useRecomendations;
