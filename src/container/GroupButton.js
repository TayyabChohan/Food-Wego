import React from "react";
const GroupButton = ({
  foodCategory,
  onSelectedCategory,
  //   selectedCategory,
}) => {
  const handleOnclick = (id) => {
    console.log(id);
    onSelectedCategory(id);
  };
  return (
    <>
      <div className="button-group">
        {foodCategory.map((item, index) => (
          <button
            // className={selectedCategory === item.id ? "active" : ""}
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
