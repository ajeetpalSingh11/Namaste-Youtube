import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVideos } from "../utils/appSlice";

const Button = ({ name }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  const dispatch = useDispatch();

  const widthClass = isMenuOpen ? " py-2 px-3 mx-2 " : " mx-3 py-3 px-4";

  return (
    <div
      className={
        "bg-gray-300 mb-1 cursor-pointer rounded-lg border border-gray-400" +
        widthClass +
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
