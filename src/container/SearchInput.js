import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
