import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const Comment = ({
  authorDisplayName,
  textDisplay,
  authorProfileImageUrl,
  likeCount,
}) => {
  return (
    <div className="flex m-2 p-2">
      <div className="mr-4">
        <img
          className="rounded-full w-8"
          src={authorProfileImageUrl}
          alt="comment-profile-img"
        />
      </div>
      <div className="">
        <p className="font-semibold">{authorDisplayName}</p>
        <p className="whitespace-pre-wrap">{textDisplay}</p>
        <p className="mt-1">
          <ThumbUpOutlinedIcon /> {likeCount}
        </p>
      </div>
    </div>
  );
};

export default Comment;
