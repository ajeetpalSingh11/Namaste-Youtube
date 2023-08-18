import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
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
    fetchMoreData();
  }, []);

  useEffect(() => {
    if (searchQuery === "All") {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(
        videos.filter((v) =>
          v.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      if (searchQuery !== "") {
        setIsFilterApplied(true);
      } else {
        setIsFilterApplied(false);
      }
    }
  }, [searchQuery]);

  const fetchMoreData = async () => {
    if (isFilterApplied) {
      return;
    }
    if (videos?.length >= totalVideos && videos?.length !== 0) {
      setHasMore(false);
      return;
    }
    try {
      const res = await fetch(YOUTUBE_API + `&pageToken=${pageToken}`);
      const data = await res.json();

      setVideos((prevState) => [...prevState, ...data.items]);
      setFilteredVideos((prevState) => [...prevState, ...data.items]);
      setTotalVideos(data.pageInfo.totalResults);
      setPageToken(data.nextPageToken);
      dispatch(setVideosData(data.items));
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
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
        {error && <Fallback error={error} />}
      </div>
    </InfiniteScroll>
  );
};

export default VideoContainer;
