import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "./constants";
import { useSearchParams } from "react-router-dom";

const useCommentsData = (videoData) => {
  const [commentsData, setCommentsData] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchComments();
  }, [videoData]);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        YOUTUBE_COMMENTS_API + "&videoId=" + searchParams.get("v")
      );
      const data = await res.json();
      const commentsData = data?.items.map((c) => {
        return {
          name: c.snippet.topLevelComment.snippet.authorDisplayName,
          text: c.snippet.topLevelComment.snippet.textOriginal,
        };
      });
      setCommentsData(commentsData);
    } catch (error) {
      setError(error);
    }
  };

  return { commentsData, error };
};

export default useCommentsData;
