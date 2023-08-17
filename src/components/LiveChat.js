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
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
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

  const widthClass = isMenuOpen ? " w-[12.5rem]" : " w-[28rem]";

  return (
    <>
      <div
        className={
          "p-2 mt-5 ml-2 mr-1 h-[450px] bg-gray-100 rounded-lg rounded-b-none border border-gray-400 overflow-y-scroll flex flex-col-reverse" +
          widthClass +
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
