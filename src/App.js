import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import "./app.css";
function App() {
  const [state, setSate] = useState("");
  return (
    <Router>
      <>
        <Header />
        <Home />
      </>
    </Router>
  );
}

export default App;
