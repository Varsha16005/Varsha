import React from "react";

const Cart = ({ products }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold">Cart</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
