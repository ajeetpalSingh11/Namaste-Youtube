import React from "react";
import { useSelector } from "react-redux";

const SidebarItem = ({ imgUrl, text }) => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const selected = useSelector((store) => store.app.sidebarSelected);

  const selectedClassLight =
    selected === text ? " bg-gray-300 border border-gray-400" : "";
  const selectedClassDark =
    selected === text && isDarkTheme
      ? " bg-gray-800 border border-gray-400"
      : "";

  return (
    <div
      className={
        "flex items-center px-3 py-1 cursor-pointer rounded-xl" +
        selectedClassLight +
        selectedClassDark
      }
    >
      <img src={imgUrl} alt="Home" className="h-7" />
      <span className="p-2">{text}</span>
    </div>
  );
};

export default SidebarItem;
