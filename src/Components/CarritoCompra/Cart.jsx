import React from "react";
import { useCartContex } from "./CartContex";

function Cart() {
  const { cartList } = useCartContex();
  console.log("mi cart tiene", cartList);
  return (
    <div>
      <h1>Carrito de compras</h1>
    </div>
  );
}

export default Cart;
