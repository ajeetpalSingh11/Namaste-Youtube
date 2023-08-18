import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const list = [
    "All",
    "Song",
    "India",
    "Movie",
    "Red Fort",
    "Bigg Boss",
    "Official",
    "New",
    "Hindi",
    "Delhi",
    "vlog",
    "Vacation",
  ];
  const moreItems = ["Telugu", "Promo", "Mixes"];
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
