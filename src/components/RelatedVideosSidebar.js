import React, { useEffect, useState } from "react";
import RelatedVideoCard from "./RelatedVideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../utils/constants";
import Fallback from "./Fallback";

const RelatedVideosSidebar = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(YOUTUBE_API);
      const data = await res.json();

      setVideos(data?.items);
    } catch (error) {
      setError(error);
    }
  };
  //const storeVideos = useSelector((store) => store.app.videos);

  const relatedVideos = isMenuOpen
    ? videos?.slice(10, 26)
    : videos?.slice(10, 17);

  return (
    <div className="p-2">
      {relatedVideos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <RelatedVideoCard info={video} />
        </Link>
      ))}
      {error && <Fallback error={error} />}
    </div>
  );
};

export default RelatedVideosSidebar;
