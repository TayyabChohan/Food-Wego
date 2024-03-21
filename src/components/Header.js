import React from "react";
import GroupButton from "../container/GroupButton";
import SearchInput from "../container/SearchInput";
const Header = ({ foodCategory, onSelectedCategory, selectedCategory }) => {
  return (
    <>
      <div className="container-main">
        {/* input started */}
        <SearchInput />

        {/* button group started */}
        <GroupButton
          foodCategory={foodCategory}
          onSelectedCategory={onSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
    </>
  );
};

export default Header;
