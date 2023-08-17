import React, { useState } from "react";
import { useSelector } from "react-redux";
import useWindowDimensions from "../utils/useWindowDimensions";

const RelatedVideoCard = ({ info }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { height, width } = useWindowDimensions();

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  const heightClass = isMenuOpen ? " h-50" : " h-[10rem]";

  const isMobile = width <= 1080;
  const showChannel = width > 720;

  return (
    <div
      className={
        "mt-2 mx-2 w-[90%] pl-5 py-1 shadow-lg flex items-center rounded-lg" +
        heightClass +
        darkThemeClass
      }
    >
      <img alt={title} src={thumbnails.default.url} className="rounded-lg" />
      {
        <div className="pl-3 pb-2">
          <ul>
            {!isMobile && (
              <li>{title.length > 80 ? title.substring(0, 50) : title}</li>
            )}
            {showChannel && <li className="font-semibold">{channelTitle}</li>}
          </ul>
        </div>
      }
    </div>
  );
};

export default RelatedVideoCard;
