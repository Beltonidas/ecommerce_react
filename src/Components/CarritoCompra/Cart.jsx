import React from "react";
import { useCartContex } from "./CartContex";

function Cart() {
  const { cartList, removeElementCartId, isInCart, clearCartList} = useCartContex();
  const listItemCartList = cartList.map((element) => (
    <li key={element.id}>{element.id}</li>
  ));


const deleteElement = ()=>{
  console.log(cartList);
  removeElementCartId(8);
  console.log(cartList);
}



  return (
    <div>
      <h1>Carrito de compras</h1>
      <ul>{listItemCartList}</ul>
      <imput  onClick={deleteElement}> Borrar elemento </imput>
    </div>
  );
}

export default Cart;
