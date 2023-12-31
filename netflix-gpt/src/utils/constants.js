export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const PROFILE_IMG =
  "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbg8b9gDW0a4RN42JzXExXzjVU1EnPFfRBh0CpUQMcu_nm6Qwk5NRIkIxLoG8I-2JRU_dt_KvqdkT3a7eTWwBv0DgbvaCZA.png?r=54a";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
    Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
  },
};

export const TMDB_API = "https://api.themoviedb.org/3/movie";

export const TMDB_SEARCH_API = "https://api.themoviedb.org/3/search/movie";

export const TMDB_IMG_PATH = "https://image.tmdb.org/t/p/w500";

export const languageConstants = [
  {
    code: "en",
    language: "English",
  },
  {
    code: "hi",
    language: "Hindi",
  },
  {
    code: "kan",
    language: "Kannada",
  },
];
