import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { VIDEOS_BY_CATEGORY_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryVideos } from "../utils/videosSlice";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { addCategoryId, closeMenu } from "../utils/appSlice";
import { ShimmerPostList } from "react-shimmer-effects";

const CategoryContainer = () => {
  const [category] = useSearchParams();
  const categoryId = category.get("categoryId");
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.categoryVideos);

  const getVideosRelatedToCategory = async () => {
    const data = await fetch(VIDEOS_BY_CATEGORY_API + categoryId);
    const json = await data.json();
    dispatch(addCategoryVideos(json.items));
    dispatch(addCategoryId(categoryId));
  };

  useEffect(() => {
    getVideosRelatedToCategory();
  }, [categoryId]);

  const closeMenubar = () => {
    dispatch(closeMenu());
  };

  if (!videos)
    return (
      <div className="col-span-10 m-4">
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
      </div>
    );

  return (
    <div className="col-span-10">
      <ButtonList />
      <div className="flex flex-wrap">
        {videos.map((video) => (
          <Link
            to={"/watch?v=" + video.id}
            key={video.id}
            onClick={closeMenubar}
          >
            <VideoCard snippet={video.snippet} statistics={video.statistics} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
