import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { openMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import ShimmerButtonList from "./ShimmerButtonList";

const MainContainer = () => {
  const dispatch = useDispatch();

  const videos = useSelector((store) => store.app.videos);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const darkThemeClass = isDarkTheme
    ? " bg-gray-700 border border-gray-500"
    : "";

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div
      className={
        "shadow-lg w-full m-2 p-2 pt-3 bg-gray-100 rounded-lg" + darkThemeClass
      }
    >
      {videos.length === 0 ? <ShimmerButtonList /> : <ButtonList />}
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
