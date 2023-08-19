import React from "react";
import { USER_ICON } from "../utils/constants";
import { useSelector } from "react-redux";

const Comment = ({ data }) => {
  const { name, text } = data;
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  return (
    <div
      className={
        "flex my-3 bg-gray-100 rounded-lg shadow-lg p-2 items-center" +
        darkThemeClass
      }
    >
      <img className="h-10" alt="user" src={USER_ICON} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text.length > 120 ? text.substring(0, 184) : text}</p>
      </div>
    </div>
  );
};

export default Comment;
