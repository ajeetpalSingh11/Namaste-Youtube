import React, { useEffect, useState } from "react";
import {
  setDarkTheme,
  setSearchVideos,
  setSidebarSelected,
  toggleMenu,
} from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  DARK_THEME_ICON,
  USER_ICON,
  YOUTUBE_ICON,
  YOUTUBE_SEARCH_SUGESSTION_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import Fallback from "./Fallback";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState(null);

  const searchCache = useSelector((store) => store.search);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme ? " bg-gray-700 text-white" : " bg-white";

  const darkThemeHover = isDarkTheme
    ? "  hover:bg-gray-900"
    : "  hover:bg-gray-200";

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_SUGESSTION_API + searchQuery);
      const data = await res.json();

      setSuggestions(data[1]);

      dispatch(
        cacheResults({
          [searchQuery]: data[1],
        })
      );
    } catch (error) {
      setError(error);
    }
  };

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className={"grid grid-flow-col p-3 shadow-lg" + darkThemeClass}>
        <div className="flex col-span-1 bg-white rounded-sm">
          <img
            onClick={() => handleMenuToggle()}
            className="h-10 pt-2 cursor-pointer"
            alt="menu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJ_Pmd1cDf3Y8ilFgW4L5KS0Zrk5x0UYjeA&usqp=CAU"
          />
          <Link
            to="/"
            onClick={() => {
              dispatch(setSearchVideos(""));
              dispatch(setSidebarSelected("Home"));
            }}
          >
            <img className="h-12" alt="youtube" src={YOUTUBE_ICON} />
          </Link>
        </div>
        <form
          className="col-span-10 pt-1 ml-40"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setSearchVideos(searchQuery));
            setShowSuggestions(false);
          }}
        >
          <input
            type="text"
            className={
              isDarkTheme
                ? "border border-gray-400 p-2 w-1/2 rounded-l-full bg-gray-800"
                : "border border-gray-400 p-2 w-1/2 rounded-l-full"
            }
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            //onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 py-2 rounded-r-full px-4"
            // onClick={() => {
            //   dispatch(setSearchVideos(searchQuery));
            // }}
          >
            🔍
          </button>
          {showSuggestions && (
            <div
              className={
                "absolute w-[34%] px-2 py-2 border-gray-100 shadow-lg rounded-lg" +
                darkThemeClass
              }
            >
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className={
                      "px-2 py-2 rounded-lg shadow-sm hover:cursor-pointer" +
                      darkThemeHover
                    }
                    onClick={() => {
                      dispatch(setSearchVideos(s));
                      setSearchQuery(s);
                    }}
                  >
                    <button>🔍 {s}</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
        <div className="col-span-1">
          <div className="flex justify-evenly">
            <button
              onClick={() => {
                dispatch(setDarkTheme(!isDarkTheme));
              }}
            >
              <img className="h-11" alt="theme" src={DARK_THEME_ICON} />
            </button>
            <button>
              <img className="h-11" alt="user" src={USER_ICON} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
