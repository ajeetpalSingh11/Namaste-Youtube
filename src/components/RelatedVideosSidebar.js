import React, { useEffect, useState } from "react";
import RelatedVideoCard from "./RelatedVideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from "../utils/constants";
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
  //const storeVideos = useSelector((store) => store.app.videos);

  return (
    <div className="p-2">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <RelatedVideoCard info={video} />
        </Link>
      ))}
      {error && <Fallback error={error} />}
    </div>
  );
};

export default RelatedVideosSidebar;
