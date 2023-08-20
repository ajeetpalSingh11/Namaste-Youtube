import React, { useEffect, useState } from "react";
import RelatedVideoCard from "./RelatedVideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import Fallback from "./Fallback";

const RelatedVideosSidebar = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const searchQuery = useSelector((store) => store.app.searchQuery);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + "&q=" + searchQuery);
      const data = await res.json();

      setVideos(data?.items);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="p-2">
      {videos?.map((video) => (
        <Link
          key={typeof video.id === "string" ? video.id : video.id.videoId}
          to={
            typeof video.id === "string"
              ? "/watch?v=" + video.id
              : "/watch?v=" + video.id.videoId
          }
        >
          <RelatedVideoCard info={video} />
        </Link>
      ))}
      {error && <Fallback error={error} />}
    </div>
  );
};

export default RelatedVideosSidebar;
