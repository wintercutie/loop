import React, { useState } from "react";
import ProductCard from "./CardWithDetails"; // Adjust the path as necessary

const NewArrivals = () => {
  const [activeCategory, setActiveCategory] = useState("Peripherals");

  const categories = ["Peripherals", "Games", "Collectibles"];
  const products = {
    Peripherals: [
      { name: "Gaming Mouse", price: 1999, image: "/mouse.jpg" },
      { name: "Mechanical Keyboard", price: 3499, image: "/keyboard.jpg" },
      { name: "RGB Headset", price: 2799, image: "/headset.jpg" },
    ],
    Games: [
      { name: "Game 1", price: 1599, image: "/game1.jpg" },
      { name: "Game 2", price: 1999, image: "/game2.jpg" },
    ],
    Collectibles: [
      { name: "Figure 1", price: 999, image: "/figure1.jpg" },
      { name: "Figure 2", price: 1299, image: "/figure2.jpg" },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 rounded-md font-medium ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Carousel */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products[activeCategory]?.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
