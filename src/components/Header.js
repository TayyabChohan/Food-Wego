import React from "react";
const Header = () => {
  return (
    <>
      <div className="container-main">
        {/* input started */}
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        {/* input ended */}
        {/* button group started */}
        <div className="button-group">
          <button className="active">All</button>
          <button>Sushi</button>
          <button>Pizza</button>
          <button>Burger</button>
          <button>Hot Meals</button>
          <button>Desserts</button>
          <button>Drinks</button>
        </div>

        {/* button group ended */}
      </div>
    </>
  );
};

export default Header;
