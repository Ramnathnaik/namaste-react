export const YOUTUBE_LOGO =
  "https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png";
export const DARK_YOUTUBE_LOGO =
  "https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720.jpg";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3";
export const SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCH_RESULTS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";
export const VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&id=";
export const DEFAULT_CHANNEL_LOGO =
  "https://static.vecteezy.com/system/resources/previews/023/986/480/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png";
export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&&maxResults=50&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&videoId=";
export const RECOMMENDED_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=20.5937%2C78.9629&locationRadius=10mi&q=fun%20%and%20%entertaining%20%adventures&type=video&maxResults=25&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;
export const LIVE_EVENTS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=50&q=gaming&type=video&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;
export const LIVE_CHAT_API =
  "https://www.googleapis.com/youtube/v3/liveChat/messages?&part=snippet,authorDetails&maxResults=5&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&liveChatId=";
export const VIDEOS_BY_CATEGORY_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&videoCategoryId=";
export const POLLING_OFFSET = 10000;
