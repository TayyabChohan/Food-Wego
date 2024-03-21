import React from "react";
const SearchInput = ({ isSearch, setSearch }) => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          name={isSearch}
          value={isSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default SearchInput;
