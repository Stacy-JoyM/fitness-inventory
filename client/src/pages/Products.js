import React from "react";
import ProductCard from "../components /Productcard";


const products = [
  {
    "id": 1,
    "title": "MacBook Pro 14-inch",
    "description": "Apple M2 Pro chip, 16GB RAM, 512GB SSD.",
    "image": "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg",
    "stock": 10
  },
  {
    "id": 2,
    "title": "iPhone 14 Pro",
    "description": "6.1-inch display, A16 Bionic chip, 128GB storage.",
    "image": "https://m.media-amazon.com/images/I/61XO4bORHUL._AC_SL1500_.jpg",
    "stock": 15
  },
  {
    "id": 3,
    "title": "Sony WH-1000XM5",
    "description": "Wireless Noise Cancelling Over-Ear Headphones.",
    "image": "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
    "stock": 8
  },
  {
    "id": 4,
    "title": "Dell XPS 13",
    "description": "Intel i7 12th Gen, 16GB RAM, 1TB SSD.",
    "image": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
    "stock": 5
  },
  {
    "id": 5,
    "title": "Samsung Galaxy S23",
    "description": "6.1-inch display, Snapdragon 8 Gen 2, 256GB storage.",
    "image": "https://m.media-amazon.com/images/I/71OXZzXqWVL._AC_SL1500_.jpg",
    "stock": 12
  },
  {
    "id": 6,
    "title": "Apple Watch Series 9",
    "description": "45mm GPS, Midnight Aluminum Case.",
    "image": "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
    "stock": 20
  },
  {
    "id": 7,
    "title": "Nike Air Zoom Pegasus 40",
    "description": "Men's Running Shoes - Lightweight and breathable.",
    "image": "https://m.media-amazon.com/images/I/71N1AebwTLL._AC_SL1500_.jpg",
    "stock": 18
  },
  {
    "id": 8,
    "title": "Adidas Ultraboost 22",
    "description": "Women's Running Shoes with responsive cushioning.",
    "image": "https://m.media-amazon.com/images/I/61i0tN3ufFL._AC_SL1500_.jpg",
    "stock": 14
  },
  {
    "id": 9,
    "title": "Canon EOS R10",
    "description": "24.2MP Mirrorless Camera with RF-S 18-45mm Lens.",
    "image": "https://m.media-amazon.com/images/I/81sCMuVh6QL._AC_SL1500_.jpg",
    "stock": 6
  },
  {
    "id": 10,
    "title": "Fitbit Charge 6",
    "description": "Fitness Tracker with GPS and Heart Rate Monitor.",
    "image": "https://m.media-amazon.com/images/I/61cBjjxhl0L._AC_SL1500_.jpg",
    "stock": 25
  },
  {
    "id": 11,
    "title": "Bose SoundLink Flex",
    "description": "Bluetooth Portable Speaker, Waterproof.",
    "image": "https://m.media-amazon.com/images/I/71gwD5w6x5L._AC_SL1500_.jpg",
    "stock": 9
  },
  {
    "id": 12,
    "title": "Garmin Forerunner 255",
    "description": "GPS Running Smartwatch, Daily Training Readiness.",
    "image": "https://m.media-amazon.com/images/I/71dYQf4b8jL._AC_SL1500_.jpg",
    "stock": 7
  },
  {
    "id": 13,
    "title": "Logitech MX Master 3S",
    "description": "Wireless Performance Mouse with fast scrolling.",
    "image": "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
    "stock": 16
  },
  {
    "id": 14,
    "title": "Kindle Paperwhite",
    "description": "6.8-inch display, adjustable warm light, waterproof.",
    "image": "https://m.media-amazon.com/images/I/61tW5hbuN8L._AC_SL1500_.jpg",
    "stock": 11
  },
  {
    "id": 15,
    "title": "GoPro HERO11 Black",
    "description": "Waterproof Action Camera with 5.3K Video.",
    "image": "https://m.media-amazon.com/images/I/71d1ytcCm2L._AC_SL1500_.jpg",
    "stock": 13
  }
]

function Products() {
  return (
    <div className="product-page ">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4 d-flex justify-content-center" key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              stock={product.stock}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

