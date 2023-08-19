import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, setHistory, setWatchedVideos } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDescription from "./VideoDescription";
import RelatedVideosSidebar from "./RelatedVideosSidebar";
import { YOUTUBE_ID_API } from "../utils/constants";
import Fallback from "./Fallback";

const WatchPage = () => {
  const [videoData, setVideoData] = useState({});
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const history = useSelector((store) => store.app.history);

  const findWatchedIndex = () => {
    return history.findIndex((obj) => obj.id === searchParams.get("v")) !== -1;
  };

  const isWached = useMemo(() => findWatchedIndex(), []);

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const fetchData = async () => {
    try {
      const res = await fetch(YOUTUBE_ID_API + "&id=" + searchParams.get("v"));
      const data = await res.json();

      setVideoData(data?.items[0]);

      !isWached && dispatch(setHistory(data?.items[0]));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      {!error && (
        <div className="flex flex-wrap">
          <div className="flex flex-col">
            <div className="mx-3 mt-5 pl-3">
              <iframe
                //width="600"
                //height="450"
                className="w-[480px] md:w-[800px] h-[320px] md:h-[450px]"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <VideoDescription videoData={videoData} />
            <CommentsContainer videoData={videoData} />
          </div>
          <div className="flex flex-col">
            <LiveChat />
            <RelatedVideosSidebar />
          </div>
        </div>
      )}
      {error && <Fallback error={error} />}
    </>
  );
};

export default WatchPage;
