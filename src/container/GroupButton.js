import React from "react";
const GroupButton = ({
  foodCategory,
  onSelectedCategory,
  selectedCategory,
}) => {
  const handleOnclick = (id) => {
    onSelectedCategory(id);
  };
  const handleAllClick = () => {
    onSelectedCategory(null); // handle the all button and get whole data
  };
  return (
    <>
      <div className="button-group">
        <button
          className={selectedCategory === null ? "active" : ""}
          onClick={handleAllClick}
        >
          All
        </button>
        {foodCategory.map((item, index) => (
          <button
            className={selectedCategory === item.id ? "active" : ""}
            key={item.id}
            onClick={() => handleOnclick(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default GroupButton;
