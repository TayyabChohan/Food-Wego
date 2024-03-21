import React, { useEffect, useState } from "react";
import * as getFoodProducts from "../services/getFoodProducts";
import LoadMoreButton from "../container/Button";
import Card from "../container/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = ({ selectedCategory, isSearch }) => {
  const [isfoodProductList, setFoodProductList] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // Number of data items load at first render
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getFoodProducts.getFoodlist();
        if (result) {
          setFoodProductList(result.data.foods);
          setIsLoading(false);
          toast.success("Data loaded successfully")
        }
      } catch (error) {
        console.error("Error fetching food products:", error);
        setIsLoading(false);
        toast.error("Something Wronge  please check internet connection")
      }
    }
    fetchData();
  }, []);
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6); // Increase the count to load more items
    // }, 2000);
    setIsLoadingMore(false);
  };

  const filteredData = selectedCategory
    ? isfoodProductList.filter((i) => i.categoryId === selectedCategory)
    : isfoodProductList;

  /// to get searched food data
  const searchedData = filteredData.filter((item) =>
    item.name.toLowerCase().includes(isSearch.toLowerCase())
  );


  return (
    <>
       <main>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Card isfoodProductList={searchedData.slice(0, visibleCount)} />
        )}
      </main>
      {!isLoading && visibleCount < searchedData.length && (
        <LoadMoreButton
          onLoadMore={handleLoadMore}
          isLoadingMore={isLoadingMore}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default Home;
