import React from "react";

const ShimmerButtonList = () => {
  return (
    <div className="flex">
      {[...Array(8)].map((e, index) => (
        <div
          key={index}
          className="bg-gray-200 h-10 w-28 mb-1 mx-2 py-2 px-4 rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default ShimmerButtonList;
