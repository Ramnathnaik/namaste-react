import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constants";
import { addUpcoming } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const data = await fetch(`${TMDB_API}/upcoming?page=1`, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcoming;
