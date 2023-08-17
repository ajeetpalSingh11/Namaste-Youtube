import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  const heightWidthClass = isMenuOpen ? " w-[16.5rem] h-80" : " w-[20rem] h-84";

  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div
      className={
        "my-3 mx-1 p-2 h-80 shadow-lg rounded-lg" +
        heightWidthClass +
        darkThemeClass
      }
    >
      <img alt={title} src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="pt-2 pb-2 font-bold">
          {title.length > 80 ? title.substring(0, 70) : title}
        </li>
        <li>{channelTitle}</li>
        <li>
          {statistics.viewCount > 1000
            ? Math.trunc(statistics.viewCount / 1000)
            : statistics.viewCount}
          {statistics.viewCount > 1000 ? "k views" : "views"}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
