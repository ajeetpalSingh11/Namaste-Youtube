import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import { useSelector } from "react-redux";
import Fallback from "./Fallback";

const CommentsContainer = ({ videoData }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

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

    // data.items.filter((c) => c.snippet.totalReplyCount > 0)
  };

  const comments = isMenuOpen
    ? commentsData?.slice(0, 17)
    : commentsData?.slice(0, 10);

  return (
    <div
      className={
        "ml-5 p-5 w-[96%] rounded-lg border border-gray-400" + darkThemeClass
      }
    >
      {!error && (
        <>
          <h3 className="text-2xl font-bold">Comments: </h3>
          <CommentsList comments={comments} />
        </>
      )}
      {error && <Fallback error={error} />}
    </div>
  );
};

export default CommentsContainer;
