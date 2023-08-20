import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_ID_API } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { setHistory } from "./appSlice";

const useWatchPage = () => {
  const [videoData, setVideoData] = useState({});
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

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

  return {videoData, error};
};

export default useWatchPage;
