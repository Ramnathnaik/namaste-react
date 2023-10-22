import { useDispatch } from "react-redux";
import { LIVE_EVENTS } from "../utils/constants";
import { addLiveVideos } from "../utils/videosSlice";
import { useEffect } from "react";

const useLiveVideos = () => {
  const dispatch = useDispatch();

  const getLiveVideos = async () => {
    const data = await fetch(LIVE_EVENTS);
    const json = await data.json();
    dispatch(addLiveVideos(json.items));
  };

  useEffect(() => {
    getLiveVideos();
  }, []);
};

export default useLiveVideos;
