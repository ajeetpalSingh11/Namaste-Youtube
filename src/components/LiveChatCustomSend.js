import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatslice";

const LiveChatCustomSend = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const dispatch = useDispatch();

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";
  const darkThemeClassButton = isDarkTheme ? " bg-gray-900 text-white" : "";

  return (
    <div>
      {" "}
      <form
        className={
          "p-2 ml-5 mr-1 w-[90%] border border-gray-400 flex justify-between rounded-lg rounded-t-none" +
          darkThemeClass
        }
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ajeetpal Singh",
              message: liveMessage,
            })
          );

          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className={"w-2/3 p-1 border border-gray-400" + darkThemeClassButton}
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className={
            "py-1 px-5 bg-gray-200  ml-4 rounded-lg" + darkThemeClassButton
          }
          //   onClick={() => {
          //     dispatch(
          //       addMessage({
          //         name: "Ajeetpal Singh",
          //         message: liveMessage,
          //       })
          //     );
          //   }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChatCustomSend;
