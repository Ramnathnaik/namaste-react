import React, { useEffect } from "react";
import { LIVE_CHAT_API, POLLING_OFFSET } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChats, addNextPageToken } from "../utils/chatSlice";
import LiveComment from "./LiveComment";

const LiveChatContainer = ({ activeLiveChatId }) => {
  const dispatch = useDispatch();
  const liveChats = useSelector((store) => store.chat.liveChats);
  const pageToken = useSelector((store) => store.chat.nextPageToken);

  const getLiveChat = async () => {
    const data = await fetch(
      LIVE_CHAT_API + activeLiveChatId + "&pageToken=" + pageToken
    );
    const json = await data.json();
    dispatch(addNextPageToken(json.nextPageToken));
    dispatch(addLiveChats(json.items));
  };

  useEffect(() => {
    const timer = setInterval(() => getLiveChat(), POLLING_OFFSET);
    return () => clearInterval(timer);
  }, [liveChats]);

  return (
    <div className="w-full h-[600px] rounded-xl border border-slate-300 shadow-lg overflow-y-scroll flex flex-col-reverse">
      {liveChats.map((chat) => (
        <LiveComment
          key={chat.id}
          displayMessage={chat.snippet?.displayMessage}
          displayName={chat.authorDetails?.displayName}
          profileImageUrl={chat.authorDetails.profileImageUrl}
        />
        // <LiveComment
        //   key={index}
        //   displayMessage={chat.displayMessage}
        //   displayName={chat.displayName}
        //   profileImageUrl={chat.profileImageUrl}
        // />
      ))}
    </div>
  );
};

export default LiveChatContainer;
