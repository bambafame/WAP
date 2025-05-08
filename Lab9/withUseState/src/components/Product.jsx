import React from "react";

function Product({ id, name, price, inStock, toggleStock }) {
  const style = {
    color: inStock ? "green" : "red",
    marginBottom: "10px",
  };

  return (
    <div style={style}>
      <p>
        {name} - ${price}
      </p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={() => toggleStock(id)}>Toggle Stock</button>
    </div>
  );
}

export default Product;
