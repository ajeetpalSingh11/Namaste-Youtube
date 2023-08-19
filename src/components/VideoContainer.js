import React, { useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { setVideosData } from "../utils/appSlice";
import Fallback from "./Fallback";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [totalVideos, setTotalVideos] = useState(0);
  const [pageToken, setPageToken] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.app.searchQuery);

  useEffect(() => {
    if (searchQuery === "All") {
      setFilteredVideos(videos);
    } else if (searchQuery !== "") {
      fetchSearchData();
      setIsFilterApplied(true);
    } else {
      setIsFilterApplied(false);
      fetchData();
    }
  }, [searchQuery]);

  const fetchSearchData = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + "&q=" + searchQuery);
      const data = await res.json();

      //setVideos(data?.items);
      setFilteredVideos(data?.items);
    } catch (error) {
      setError(error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch(YOUTUBE_API);
      const data = await res.json();

      setVideos(data?.items);
      setFilteredVideos(data?.items);
      setTotalVideos(data.pageInfo.totalResults);
      setPageToken(data.nextPageToken);
      dispatch(setVideosData(data.items));
    } catch (error) {
      setError(error);
    }
  };

  const fetchMoreData = async () => {
    if (isFilterApplied) {
      return;
    }
    if (videos?.length >= totalVideos) {
      setHasMore(false);
      return;
    }
    try {
      const res = await fetch(YOUTUBE_API + `&pageToken=${pageToken}`);
      const data = await res.json();

      setVideos((prevState) => [...prevState, ...data.items]);
      setFilteredVideos((prevState) => [...prevState, ...data.items]);
    } catch (error) {
      setError(error);
    }
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <InfiniteScroll
      dataLength={videos.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <div className="flex flex-wrap">
        {filteredVideos?.length === 0 && (
          <div className="p-5 font-semibold text-xl">No Matching Results</div>
        )}
        {filteredVideos?.map((video) => (
          <Link
            key={typeof video.id === "string" ? video.id : video.id.videoId}
            to={
              typeof video.id === "string"
                ? "/watch?v=" + video.id
                : "/watch?v=" + video.id.videoId
            }
          >
            <VideoCard info={video} />
          </Link>
        ))}
        {error && <Fallback error={error} />}
      </div>
    </InfiniteScroll>
  );
};

export default VideoContainer;
