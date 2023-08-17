import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Song",
    "India",
    "Movie",
    "Red Fort",
    "Bigg Boss",
    "Mobile",
    "Official",
    "New",
    "Hindi",
    "Delhi",
    "vlog",
    "Vacation",
    //"Meditation",
    // "Tourism",
  ];

  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
