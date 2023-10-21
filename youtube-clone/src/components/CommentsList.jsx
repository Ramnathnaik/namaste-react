import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";
import Comment from "./Comment";

const CommentsList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + videoId);
    const json = await data.json();
    setComments(json?.items);
  };

  useEffect(() => {
    getComments();
  }, [videoId]);

  if (comments && comments.length === 0) {
    return (
      <div className="w-full">
        <p>No comments</p>
      </div>
    );
  } else if (!comments) {
    return (
      <div className="w-full">
        <p>No comments</p>
      </div>
    );
  }

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          authorDisplayName={
            comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
          }
          textDisplay={comment?.snippet?.topLevelComment?.snippet?.textDisplay}
          authorProfileImageUrl={
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
          likeCount={comment?.snippet?.topLevelComment?.snippet?.likeCount}
        />
      ))}
    </div>
  );
};

export default CommentsList;
