import React from "react";
import CommentsList from "./CommentsList";
import { useSelector } from "react-redux";
import useCommentsData from "../utils/useCommentsData";

const CommentsContainer = ({ videoData }) => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  const { commentsData, error } = useCommentsData(videoData);

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
