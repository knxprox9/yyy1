import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">متجر المنتجات</h1>
        <div className="card-container">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;