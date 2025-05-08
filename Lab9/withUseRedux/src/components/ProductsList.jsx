import React, { useReducer } from "react";
import Product from "./Product";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_STOCK":
      return state.map((item) =>
        item.id === action.payload ? { ...item, inStock: !item.inStock } : item
      );
    default:
      return state;
  }
}

function ProductsList() {
  const data = [
    { id: 1, name: "Apple", price: 1, inStock: true },
    { id: 2, name: "Banana", price: 1, inStock: false },
    { id: 3, name: "Cherry", price: 2, inStock: true },
  ];

  const [products, dispatch] = useReducer(reducer, data);

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          toggleStock={(id) => dispatch({ type: "TOGGLE_STOCK", payload: id })}
        />
      ))}
    </div>
  );
}

export default ProductsList;
