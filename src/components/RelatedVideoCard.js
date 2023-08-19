import React, { useState } from "react";
import { useSelector } from "react-redux";

const RelatedVideoCard = ({ info }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails } = snippet;

  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  return (
    <div
      className={
        "my-4 mx-2 w-[480px] pl-5 py-1 shadow-lg flex items-center rounded-lg" +
        darkThemeClass
      }
    >
      <img alt={title} src={thumbnails.default.url} className="rounded-lg" />
      {
        <div className="pl-3 pb-2">
          <ul>
            {<li>{title.length > 80 ? title.substring(0, 50) : title}</li>}
            {<li className="font-semibold">{channelTitle}</li>}
          </ul>
        </div>
      }
    </div>
  );
};

export default RelatedVideoCard;
