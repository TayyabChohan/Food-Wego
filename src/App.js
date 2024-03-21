import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as getFoodCategories from "./services/getFoodCategories";
import Home from "./components/Home";
import Header from "./components/Header";
import "./app.css";
function App() {
  const [foodCategory, setFoodCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSearch, setSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getFoodCategories.getFoodCategoryList();
        if (result) {
          setFoodCategory(result.data);
        }
      } catch (error) {
        console.error("Error fetching food Category:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <Router>
      <>
        <Header
          foodCategory={foodCategory}
          onSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          setSearch={setSearch}
          isSearch={isSearch}
        />
        <Home selectedCategory={selectedCategory} isSearch={isSearch} />
      </>
    </Router>
  );
}

export default App;
