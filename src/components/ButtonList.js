import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const list = [
    "All",
    "Music",
    "Mixes",
    "iphone",
    "India",
    "Red Fort",
    "Movies",
    "Official",
    "New",
    "Hindi",
    "News",
    "Science",
    "Meditation",
  ];
  const moreItems = ["Telugu", "Apple", "Promo"];
  !isMenuOpen && list.push(...moreItems);

  return (
    <div className="flex flex-wrap">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
