export const YOUTUBE_LOGO =
  "https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3";
export const SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCH_RESULTS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";
export const VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=";
export const DEFAULT_CHANNEL_LOGO =
  "https://static.vecteezy.com/system/resources/previews/023/986/480/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png";
export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&&maxResults=50&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&videoId=";
export const RECOMMENDED_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=20.5937%2C78.9629&locationRadius=10mi&q=fun%20%and%20%entertaining%20%adventures&type=video&maxResults=25&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;
