import React from "react";
import { useCartContex } from "./CartContex";

function Cart() {
  const { cartList } = useCartContex();
  const listItemCartList = cartList.map((element) => (
    <li key={element.id}>{element.id}</li>
  ));
  const sum = () => {
    let sumTotal = 0;
    cartList.forEach((element) => {
      sumTotal = sumTotal + element.price;
    });
    console.log(sumTotal);
  };

  return (
    <div>
      <h1>Carrito de compras</h1>
      <ul>{listItemCartList}</ul>
    </div>
  );
}

export default Cart;
