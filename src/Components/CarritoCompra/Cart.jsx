import React, { useEffect, useState } from "react";
import { useCartContex } from "./CartContex";

function Cart() {
  const [sumTotalCart, setSumTotalCart] = useState(0);
  const { cartList, removeElementCartId, isInCart, clearCartList } =
    useCartContex();
  const listItemCartList = cartList.map((element) => (
    <li key={element.id}>
      <span className="m-2">idProducto:{element.id}</span>
      <span className="m-2">cantidad: {element.cantidad}</span>
      <span>price: {element.price}</span>
      <button type="button" className="btn btn-success m-2">
        x
      </button>
    </li>
  ));

  useEffect(() => {
    let sumaTotal = 0;
    cartList.forEach((element) => {
      sumaTotal = sumaTotal + element.price * element.cantidad;
    });
    setSumTotalCart(sumaTotal);
  }, [cartList]);

  return (
    <div className="container">
      <h1>Carrito de compras</h1>
      <ul>{listItemCartList}</ul>
      <div class="d-flex flex-column bd-highlight">
        <div class="p-2 bd-highlight">
          <button
            type="button"
            className="btn btn-success"
            onClick={removeElementCartId(3)}
          >
            Prueba de borrado de elemento
          </button>
        </div>
        <div class="p-2 bd-highlight">
          <button
            type="button"
            className="btn btn-success"
            onClick={clearCartList}
          >
            Delete All Cart
          </button>
        </div>
      </div>
      <span>La suma es: {sumTotalCart}</span>
    </div>
  );
}

export default Cart;
