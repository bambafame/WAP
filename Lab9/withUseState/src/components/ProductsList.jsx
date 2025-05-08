import React, { useState } from "react";
import Product from "./Product";

function ProductsList() {
  const data = [
    { id: 1, name: "Apple", price: 1, inStock: true },
    { id: 2, name: "Banana", price: 1, inStock: false },
    { id: 3, name: "Cherry", price: 2, inStock: true },
  ];

  const [products, setProducts] = useState(data);

  const toggleStock = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, inStock: !product.inStock } : product
      )
    );
  };

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} toggleStock={toggleStock} />
      ))}
    </div>
  );
}

export default ProductsList;
