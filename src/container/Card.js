import React, { useState } from "react";
const Card = ({ isfoodProductList }) => {
  const promotionColors = {
    "1+1": "blueviolet",
    discount: "lightcoral",
    gift: "lightblue",
  };
  return (
    <>
      {isfoodProductList.map((item, index) => (
        <div className="card-main">
          <img src={item?.imageUrl} alt="No image" />
          {item?.promotion && (
            <div
              className="percentage"
              style={{ background: promotionColors[item.promotion] }}
            >
              {item.promotion}
            </div>
          )}

          <div className="card-text">
            <h5>{item?.name}</h5>
            <ul className="card-url">
              <li>
                <button>
                  <ul className="card-url">
                    <li>
                      {" "}
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      {" "}
                      <h6>{item.rating.toFixed(1)}</h6>
                    </li>
                  </ul>
                </button>
              </li>
              <li className="button-ml">
                <button>
                  <h6>
                    {" "}
                    `${item.minCookTime}-${item.maxCookTime}`min
                  </h6>
                </button>
              </li>
              <li className="button-ml">
                {item.isNew === true ? (
                  <button>
                    <h6 className="new-clr">New</h6>
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
