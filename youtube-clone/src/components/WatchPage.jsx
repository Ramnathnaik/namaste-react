import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_CHANNEL_LOGO, VIDEO_DETAILS_API } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState({});
  const videoId = searchParams.get("v");

  const getVideoDetails = async () => {
    const data = await fetch(
      VIDEO_DETAILS_API +
        videoId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    const { title, description, channelTitle } = json?.items?.[0]?.snippet;
    setVideoDetails({ title, description, channelTitle });
  };

  useEffect(() => {
    getVideoDetails();
  }, []);

  return (
    <div className="m-4 col-span-8">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1"}
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
        <div className="h-36 overflow-y-auto my-2 text-sm p-2 bg-slate-100 rounded-xl">
          <p className="whitespace-pre-wrap">{videoDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
