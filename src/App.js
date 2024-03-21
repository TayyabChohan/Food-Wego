import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as getFoodCategories from "./services/getFoodCategories";
import Home from "./components/Home";
import Header from "./components/Header";
import "./app.css";
function App() {
  const [foodCategory, setFoodCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
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
  // console.log(foodCategory, "foodCategory");
  // console.log(selectedCategory, "selectedCategory");
  return (
    // onSelectedCategory, selectedCategory
    <Router>
      <>
        <Header
          foodCategory={foodCategory}
          onSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <Home selectedCategory={selectedCategory} />
      </>
    </Router>
  );
}

export default App;
