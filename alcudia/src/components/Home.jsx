import React from "react";
import data from "../data/products.json";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    }).then((response) => setProducts(response));
  }, []);

  return (
    <>
      <h1>Home</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name} />
          <p>{product.detail}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
