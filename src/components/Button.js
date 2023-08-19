import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVideos } from "../utils/appSlice";

const Button = ({ name }) => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const searchQuery = useSelector((store) => store.app.searchQuery);

  const darkThemeClass = isDarkTheme ? " bg-gray-600 text-white" : "";

  const selectedClassLight =
    (searchQuery === name || (searchQuery === "" && name === "All")) &&
    !isDarkTheme
      ? " bg-gray-400"
      : "";

  const selectedClassDark =
    (searchQuery === name || (searchQuery === "" && name === "All")) &&
    isDarkTheme
      ? " bg-gray-900 text-white"
      : darkThemeClass;

  const dispatch = useDispatch();

  return (
    <div
      className={
        "bg-gray-200 mb-1 cursor-pointer py-2 px-3 mx-2 rounded-xl" +
        selectedClassLight +
        selectedClassDark
      }
      onClick={() => {
        dispatch(setSearchVideos(name));
      }}
    >
      {name}
    </div>
  );
};

export default Button;
