import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVideos } from "../utils/appSlice";

const Button = ({ name }) => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  const dispatch = useDispatch();

  return (
    <div
      className={
        "bg-gray-200 mb-1 cursor-pointer py-2 px-3 mx-2 rounded-xl" +
        darkThemeClass
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
