import React from "react";

const Header = () => {
  return (
    <>
      <input type="text" placeholder="Enter restaurant name..." />
      <nav>
        <a href="#" class="active">
          All
        </a>
        <a href="#">Sushi</a>
        <a href="#">Pizza</a>
        <a href="#">Burgers</a>
        <a href="#">Hot Meals</a>
        <a href="#">Desserts</a>
        <a href="#">Drinks</a>
      </nav>
    </>
  );
};

export default Header;
