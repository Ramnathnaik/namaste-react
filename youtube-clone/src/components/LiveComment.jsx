import React from "react";

const LiveComment = ({ profileImageUrl, displayName, displayMessage }) => {
  return (
    <div className="flex m-2 p-2 justify-start items-center flex-wrap">
      <img
        className="rounded-full w-6 mr-2"
        src={profileImageUrl}
        alt="live-comment-img"
      />
      <h1 className="font-semibold">{displayName}</h1>
      <p className="text-sm ml-2">{displayMessage}</p>
    </div>
  );
};

export default LiveComment;
