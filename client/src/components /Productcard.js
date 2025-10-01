// src/components/ProductCard.js
 import React from "react";


function ProductCard({ image, title, description, stock }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <h5>{title}</h5>
        <p className="description">{description}</p>
        <p className="stock">In Stock: {stock}</p>
      </div>
    </div>
  );
}

export default ProductCard;
 
