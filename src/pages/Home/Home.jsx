import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://cars-pagination.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    fetch(
      `https://cars-pagination.onrender.com/products/category?category=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  };

  return (
    <div>
      <h1>Product List</h1>
      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="средний">Средний</option>
        <option value="высокий">Высокий</option>
        <option value="низкий">Низкий</option>
      </select>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/details/${product.id}`}>More Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
