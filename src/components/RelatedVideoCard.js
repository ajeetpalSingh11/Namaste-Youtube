import React from "react";
import { useSelector } from "react-redux";

const RelatedVideoCard = ({ info }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  const heightWidthClass = isMenuOpen
    ? " w-[12.5rem] h-50"
    : " w-[28rem] h-[10rem]";

  return (
    <div
      className={
        "mt-2 mx-1 px-2 pl-3 py-1 shadow-lg flex items-center rounded-lg" +
        heightWidthClass +
        darkThemeClass
      }
    >
      <img alt={title} src={thumbnails.default.url} className="rounded-lg" />
      {!isMenuOpen && (
        <div className="pl-3">
          <ul>
            <li>{title}</li>
            <li className="font-semibold">{channelTitle}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RelatedVideoCard;
