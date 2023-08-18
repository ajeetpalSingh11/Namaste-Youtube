import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import {
  HISTORY_ICON,
  HOME_ICON,
  LIBRARY_ICON,
  LIKED_VIDEOS_ICON,
  MOVIES_ICON,
  MUSIC_ICON,
  SPORTS_ICON,
  SUBSCRIPTIONS_ICON,
  TRENDING_ICON,
  WATCH_LATER_ICON,
} from "../utils/constants";
import { setSearchVideos, setSidebarSelected } from "../utils/appSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";
  //   early return
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div
      className={
        "mt-2 p-2 shadow-lg w-60 h-1/3 rounded-lg sticky top-2" + darkThemeClass
      }
    >
      <ul className=" border-gray-500 border-b-2 pb-3">
        <li>
          <Link
            to="/"
            onClick={() => {
              dispatch(setSearchVideos(""));
              dispatch(setSidebarSelected("Home"));
            }}
          >
            <SidebarItem imgUrl={HOME_ICON} text="Home" />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              dispatch(setSidebarSelected("Library"));
            }}
          >
            <SidebarItem imgUrl={LIBRARY_ICON} text="Library" />
          </Link>
        </li>
        <li>
          <Link
            to="subscriptions"
            onClick={() => {
              dispatch(setSidebarSelected("Subscriptions"));
            }}
          >
            <SidebarItem imgUrl={SUBSCRIPTIONS_ICON} text="Subscriptions" />
          </Link>
        </li>
      </ul>
      <ul className=" border-gray-600 border-b-2 pt-5 pb-3">
        <li>
          <Link
            to="watchHistory"
            onClick={() => {
              dispatch(setSidebarSelected("History"));
            }}
          >
            <SidebarItem imgUrl={HISTORY_ICON} text="History" />
          </Link>
        </li>
        <li>
          <Link
            to="watchLater"
            onClick={() => {
              dispatch(setSidebarSelected("Watch Later"));
            }}
          >
            <SidebarItem imgUrl={WATCH_LATER_ICON} text="Watch Later" />
          </Link>
        </li>
        <Link
          to="likedVideos"
          onClick={() => {
            dispatch(setSidebarSelected("Liked Videos"));
          }}
        >
          <li>
            <SidebarItem imgUrl={LIKED_VIDEOS_ICON} text="Liked Videos" />
          </li>
        </Link>
      </ul>
      <h3 className="font-bold pt-5 pl-2 pb-2">Explore</h3>
      <ul className=" border-gray-600 border-b-2 pb-3">
        <li>
          <Link to="/">
            <SidebarItem imgUrl={TRENDING_ICON} text="Trending" />
          </Link>
        </li>
        <li>
          <SidebarItem imgUrl={MUSIC_ICON} text="Music" />
        </li>
        <li>
          <SidebarItem imgUrl={MOVIES_ICON} text="Movies" />
        </li>
        <li>
          <SidebarItem imgUrl={SPORTS_ICON} text="Sports" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
