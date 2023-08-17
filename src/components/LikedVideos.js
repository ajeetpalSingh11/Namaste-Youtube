import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const LikedVideos = () => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const videos = useSelector((store) => store.app.likedVideos);

  console.log("liked videos", videos);

  const darkThemeClass = isDarkTheme
    ? " bg-gray-700 border border-gray-500"
    : "";

  return videos.length === 0 ? (
    <div className="p-5 font-semibold text-xl">No Liked Videos</div>
  ) : (
    <div
      className={
        "shadow-lg w-full m-2 p-2 pt-3 bg-gray-100 rounded-lg" + darkThemeClass
      }
    >
      <div className="flex flex-wrap">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;
