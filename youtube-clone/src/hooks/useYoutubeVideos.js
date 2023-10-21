import { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { addHomeVideos } from "../utils/videosSlice";
import { useDispatch } from "react-redux";

const useYoutubeVideos = () => {
  const dispatch = useDispatch();

  const fetchVideos = async () => {
    const data = await fetch(
      `${YOUTUBE_API}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    dispatch(addHomeVideos(json.items));
  };

  useEffect(() => {
    fetchVideos();
  }, []);
};

export default useYoutubeVideos;
