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

  return (
    <div
      className={
        "ml-5 p-5 w-[480px] md:w-[800px] rounded-lg border border-gray-400" +
        darkThemeClass
      }
    >
      {!error && (
        <>
          <h3 className="text-2xl font-bold">Comments: </h3>
          <CommentsList comments={commentsData} />
        </>
      )}
      {error && (
        <div className="p-4 font-semibold text-lg">
          Comments are turned off.
        </div>
      )}
    </div>
  );
};

export default CommentsContainer;
