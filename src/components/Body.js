import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-700" : "";

  return (
    <div className={"flex" + darkThemeClass}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
