import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_CHANNEL_LOGO, VIDEO_DETAILS_API } from "../utils/constants";
import CommentsList from "./CommentsList";
import Recomendations from "./Recomendations";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState({});
  const [seeMore, setSeeMore] = useState(false);
  const videoId = searchParams.get("v");

  const getVideoDetails = async () => {
    const data = await fetch(
      VIDEO_DETAILS_API +
        videoId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    const { title, description, channelTitle, liveBroadcastContent } =
      json?.items?.[0]?.snippet;
    const activeLiveChatId =
      json?.items?.[0]?.liveStreamingDetails?.activeLiveChatId;
    setVideoDetails({
      title,
      description,
      channelTitle,
      liveBroadcastContent,
      activeLiveChatId,
    });
  };

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  return (
    <>
      <div className="m-4 col-span-8">
        <iframe
          width="1000"
          height="500"
          src={
            "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="w-full m-2">
          <h1 className="font-semibold text-xl my-2">{videoDetails.title}</h1>
          <div className="flex items-center">
            <img
              className="w-12"
              src={DEFAULT_CHANNEL_LOGO}
              alt="default-channel-logo"
            />
            <p className="font-semibold my-2">{videoDetails.channelTitle}</p>
          </div>
          <div
            className={
              !seeMore
                ? "h-36 my-2 text-sm px-6 py-4 bg-slate-100 rounded-xl hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-900"
                : "h-full my-2 text-sm px-6 py-4 bg-slate-100 rounded-xl dark:bg-slate-800 dark:text-white"
            }
          >
            <div className="h-3/4 overflow-hidden">
              <p className="whitespace-pre-wrap">{videoDetails.description}</p>
            </div>
            <div className="flex justify-end">
              <button
                className="font-semibold cursor-pointer"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? "Show less.." : "See more.."}
              </button>
            </div>
          </div>
        </div>
        <CommentsList videoId={videoId} />
      </div>
      <div className="col-span-4 mt-2 mr-2">
        {videoDetails.liveBroadcastContent === "live" &&
          videoDetails.activeLiveChatId && (
            <LiveChatContainer
              activeLiveChatId={videoDetails.activeLiveChatId}
            />
          )}
        <Recomendations />
      </div>
    </>
  );
};

export default WatchPage;
