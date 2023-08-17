import React, { useMemo, useState } from "react";
import {
  CHANNEL_ICON,
  LIKED_VIDEOS_ICON,
  WATCH_LATER_ICON,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setLikedVideos,
  setSubscribedVideos,
  setWatchLaterVideos,
} from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const VideoDescription = ({ videoData }) => {
  const [likeClicked, setLikeClicked] = useState(false);
  const [watchLaterClicked, setWatchLaterClicked] = useState(false);
  const [subscribeClicked, setSubscribeClicked] = useState(false);
  const [searchParams] = useSearchParams();

  const title = videoData.snippet?.title;
  const channelTitle = videoData.snippet?.channelTitle;
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const likedVideos = useSelector((store) => store.app.likedVideos);
  const watchLaterVideos = useSelector((store) => store.app.watchLaterVideos);
  const subscribedVideos = useSelector((store) => store.app.subscribedVideos);

  const findLikedIndex = () => {
    return (
      likedVideos.findIndex((obj) => obj.id === searchParams.get("v")) !== -1
    );
  };

  const findWatchLaterIndex = () => {
    return (
      watchLaterVideos.findIndex((obj) => obj.id === searchParams.get("v")) !==
      -1
    );
  };

  const findSubscribedIndex = () => {
    return (
      subscribedVideos.findIndex((obj) => obj.id === searchParams.get("v")) !==
      -1
    );
  };

  const isLiked = useMemo(() => findLikedIndex(), [likeClicked]);
  const isWatchLater = useMemo(
    () => findWatchLaterIndex(),
    [watchLaterClicked]
  );
  const isSubsrcibed = useMemo(() => findSubscribedIndex(), [subscribeClicked]);

  const dispatch = useDispatch();

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  const darkThemeClassButton = isDarkTheme ? " bg-gray-900 text-white" : "";

  return (
    <div
      className={
        "mx-5 my-3 p-5 w-[810px] border border-gray-400 rounded-md flex" +
        darkThemeClass
      }
    >
      <div className="flex flex-col w-2/3">
        <div className="font-semibold p-1 text-xl">{title}</div>
        <div className="py-4 flex items-center">
          <img className="h-12" alt="theme" src={CHANNEL_ICON} />
          <span className="text-2xl px-2">{channelTitle}</span>
          <span>
            <button
              className={
                "py-2 px-4 bg-gray-100 mx-4 rounded-2xl border border-gray-400" +
                darkThemeClassButton
              }
              onClick={() => {
                !isSubsrcibed && dispatch(setSubscribedVideos(videoData));
                !isSubsrcibed && setSubscribeClicked(true);
              }}
            >
              <span>{isSubsrcibed ? "Subscribed" : "Subscribe"}</span>
            </button>
          </span>
        </div>
      </div>
      <div className="mt-4 ml-6">
        <button
          className={
            "px-2 py-1 bg-gray-100 rounded-lg border border-gray-400 flex items-center" +
            darkThemeClassButton
          }
          onClick={() => {
            !isLiked && dispatch(setLikedVideos(videoData));
            !isLiked && setLikeClicked(true);
          }}
        >
          <img className="h-8" alt="theme" src={LIKED_VIDEOS_ICON} />
          <span className="px-2">{isLiked ? "Liked" : "Like The Video"}</span>
        </button>
        <button
          className={
            "px-2 py-1 mt-5 bg-gray-100 rounded-lg border border-gray-400 flex items-center" +
            darkThemeClassButton
          }
          onClick={() => {
            !isWatchLater && dispatch(setWatchLaterVideos(videoData));
            !isWatchLater && setWatchLaterClicked(true);
          }}
        >
          <img className="h-8" alt="theme" src={WATCH_LATER_ICON} />
          <span className="px-2">{isWatchLater ? "Added" : "Watch Later"}</span>
        </button>
      </div>
    </div>
  );
};

export default VideoDescription;
