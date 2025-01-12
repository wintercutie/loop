import React from "react";
import ProductCard from "./CardWithDetails";

const PeripheralGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default PeripheralGrid;
