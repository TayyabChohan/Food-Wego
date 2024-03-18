import React, { useEffect, useState } from "react";
import Nature from "../assets/image/Nature.jpg";
import * as getFoodProducts from "../services/getFoodProducts";

const Home = () => {
  const [isfoodProductList, setFoodProductList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getFoodProducts.getFoodlist();
      console.log(result.data.foods);
      if (result) {
        setFoodProductList(result.data.foods);
      }
    }
    fetchData();
  }, []);
  console.log(isfoodProductList, "isfoodProductList");
  return (
    <>
      <main>
        {isfoodProductList.map((item, index) => (
          <div className="card-main">
            <img src={item?.imageUrl} alt="No image" />
            <div className="percentage">%</div>
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
                        <h6>4.7</h6>
                      </li>
                    </ul>
                  </button>
                </li>
                <li className="button-ml">
                  <button>
                    <h6>50-70 min</h6>
                  </button>
                </li>
                <li className="button-ml">
                  <button>
                    <h6 className="new-clr">New</h6>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </main>

      <button className="load-more">Show More</button>
    </>
  );
};

export default Home;
