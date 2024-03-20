import React from "react";

const LoadMoreButton = ({ onLoadMore,isLoadingMore }) => {  
  return (
    <button className="load-more" onClick={onLoadMore}>
     {isLoadingMore ? "Loading..." : "Load More"}
    </button>
  );
};

export default LoadMoreButton;
