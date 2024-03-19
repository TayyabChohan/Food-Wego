import React, { useEffect, useState } from "react";
import Nature from "../assets/image/Nature.jpg";
import * as getFoodProducts from "../services/getFoodProducts";
import Card from "../container/Card";
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
        <Card isfoodProductList={isfoodProductList} />
      </main>

      <button className="load-more">Show More</button>
    </>
  );
};

export default Home;
