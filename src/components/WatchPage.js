import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDescription from "./VideoDescription";
import RelatedVideosSidebar from "./RelatedVideosSidebar";
import Fallback from "./Fallback";
import useWatchPage from "../utils/useWatchPage";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const { videoData, error } = useWatchPage();

  const dispatch = useDispatch();

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
