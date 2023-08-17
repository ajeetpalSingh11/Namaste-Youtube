import React from "react";
import ShimmerVideoCard from "./ShimmerVideoCard";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {[...Array(8)].map((e, index) => (
        <ShimmerVideoCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
