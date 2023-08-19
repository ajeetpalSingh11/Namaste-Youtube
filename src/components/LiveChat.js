import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatslice";
import {
  generateRandomNames,
  getRandomEmoji,
  getRandomSentence,
} from "../utils/helper";
import { closeMenu } from "../utils/appSlice";
import LiveChatCustomSend from "./LiveChatCustomSend";

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: getRandomSentence() + getRandomEmoji(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  const darkThemeClass = isDarkTheme ? " bg-gray-800 text-white" : "";

  return (
    <>
      <div
        className={
          "p-2 mt-5 w-[480px] ml-5 mr-1 h-[450px] rounded-lg rounded-b-none border border-gray-400 overflow-y-scroll flex flex-col-reverse" +
          darkThemeClass
        }
      >
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <LiveChatCustomSend />
    </>
  );
};

export default LiveChat;
