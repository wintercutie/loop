import React from "react";

const ProductCarouselItem = ({ image, name, price, rating, sold, description }) => {
    return (
      <div className="flex items-center space-x-6 p-6 bg-white shadow-lg rounded-2xl">
        {/* Product Image */}
        <div className="flex-shrink-0 w-[350px] h-[300px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
  
        {/* Product Details */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-bold">{name}</h2>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-semibold text-gray-900">₱ {price}</p>
            <p className="text-sm text-gray-600">
              ⭐ {rating} | {sold} sold
            </p>
          </div>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <a
            href="#"
            className="text-blue-600 font-semibold mt-2 hover:underline"
          >
            View more.
          </a>
        </div>
      </div>
    );
  };
  export default ProductCarouselItem;
  