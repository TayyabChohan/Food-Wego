import React from "react";
const SearchInput = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default SearchInput;
