// Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://cars-pagination.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="home-container">
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/details/${product.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
