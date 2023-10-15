import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import langConstants from "../utils/langConstants";
import openai from "../utils/openai";
import { API_OPTIONS, TMDB_API, TMDB_SEARCH_API } from "../utils/constants";
import { addMovieSearchResults, addMovieTitles } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.app.language);
  const inputMovies = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const movieSuggestionsForGPT = async (query) => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion.choices);

    return chatCompletion?.choices?.[0].message?.content;
  };

  const searchMovieInTMDB = async (movie) => {
    const data = await fetch(
      `${TMDB_SEARCH_API}?query=${movie}&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const searchMovies = async () => {
    setLoading(true);
    const query = `Act as a movie recommendation system and suggest be extractly 5 movies for the query: ${inputMovies.current.value}. The result should be a comma separate value. For example: Jawaan, Chennai Express, Phathaan, Ek Tha Tiger, Rajakumara`;

    const searchResults = await movieSuggestionsForGPT(query);

    const movies = searchResults.split(", ");
    dispatch(addMovieTitles(movies));

    const moviePromises = movies.map((movie) => searchMovieInTMDB(movie));

    const tmdbResults = await Promise.all(moviePromises);
    dispatch(addMovieSearchResults(tmdbResults));
    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mt-36 grid grid-cols-12 p-1 md:p-4 bg-black text-white mx-auto right-0 left-0 w-[90%]"
      >
        <input
          ref={inputMovies}
          className="col-span-9 m-1 md:mx-4 md:my-2 px-4 py-2 text-black"
          type="text"
          name="search"
          id="search"
          placeholder={langConstants[language].searchPlaceholder}
        />
        <button
          className={`bg-[#E50914] text-white font-semibold text-md col-span-3 m-1 md:mx-4 md:my-2 px-4 py-2 ${
            loading ? "cursor-not-allowed opacity-80" : ""
          }`}
          onClick={searchMovies}
          disabled={loading}
        >
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 animate-spin mx-auto right-0 left-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          ) : (
            langConstants[language].searchBtn
          )}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
