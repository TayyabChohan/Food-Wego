import React, { useEffect, useState } from "react";
import * as getFoodProducts from "../services/getFoodProducts";
import LoadMoreButton from "../container/Button";
import Card from "../container/Card";
const Home = ({ selectedCategory, isSearch }) => {
  const [isfoodProductList, setFoodProductList] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // Number of data items load at first render
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getFoodProducts.getFoodlist();
        if (result) {
          setFoodProductList(result.data.foods);
        }
      } catch (error) {
        console.error("Error fetching food products:", error);
      }
    }
    fetchData();
  }, []);
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6); // Increase the count to load more items
    }, 2000); // Simulated loading delay
    setIsLoadingMore(false);
  };

  const filteredData = selectedCategory
    ? isfoodProductList.filter((i) => i.categoryId === selectedCategory)
    : isfoodProductList;

  /// to get searched food data
  const searchedData = filteredData.filter((item) =>
    item.name.toLowerCase().includes(isSearch.toLowerCase())
  );

  console.log(searchedData, "tayayb ddddd");
  return (
    <>
      <main>
        <Card isfoodProductList={searchedData.slice(0, visibleCount)} />
      </main>
      {visibleCount < searchedData.length && (
        <LoadMoreButton
          onLoadMore={handleLoadMore}
          isLoadingMore={isLoadingMore}
        />
      )}
    </>
  );
};

export default Home;
