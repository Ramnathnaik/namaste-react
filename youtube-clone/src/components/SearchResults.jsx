import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULTS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = async () => {
    const data = await fetch(
      SEARCH_RESULTS_API +
        searchQuery +
        "type=video&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    setSearchResults(json.items);
  };

  const closeMenubar = () => {
    dispatch(closeMenu());
  };

  if (searchResults.length === 0) return null;

  return (
    <div className="w-[170vh] p-2 m-2">
      {searchResults.map((result) => (
        <Link
          to={"/watch?v=" + result.id.videoId}
          key={result.id.videoId}
          onClick={closeMenubar}
        >
          <div className="flex h-56 px-4 py-2 m-2 hover:cursor-pointer">
            <img
              className="rounded-lg"
              src={result.snippet.thumbnails.medium.url}
              alt="youtube-tumbnail"
            />
            <div className="ml-6">
              <h1 className="font-semibold text-lg">{result.snippet.title}</h1>
              <br />
              <p>{result.snippet.channelTitle}</p>
              <p className="text-sm">{result.snippet.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
