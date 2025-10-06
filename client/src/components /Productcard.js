// src/components/ProductCard.js
import React from "react";

function ProductCard({ image, title, description, stock }) {
  return (
    <div className="w-full max-w-[280px] h-[320px] border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col overflow-hidden">
      <div className="h-[180px] w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between text-center">
        <h5 className="text-lg font-semibold text-gray-900">{title}</h5>
        <p className="text-sm text-gray-600 my-2 line-clamp-3">{description}</p>
        <p className="text-sm font-semibold text-gray-800">In Stock: {stock}</p>
      </div>
    </div>
  );
}

export default ProductCard;

