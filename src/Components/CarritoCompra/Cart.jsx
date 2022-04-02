import React, { useEffect, useState } from "react";
import { useCartContex } from "./CartContex";
import CartEmpty from "./CartEmpty";

function Cart() {
  const [sumTotalCart, setSumTotalCart] = useState(0);
  const { cartList, removeElementCartId, clearCartList } = useCartContex();
  const existItem = cartList.length > 0 ? true : false;

  const listItemCartList = cartList.map((element) => (
    <li key={element.id}>
      <span className="m-2">idProducto: {element.id}</span>
      <span className="m-2">cantidad: {element.cantidad}</span>
      <span className="m-2">price: {element.price}</span>
      <span className="m-2">subTotal: {element.price * element.cantidad}</span>
      <button
        type="button"
        className="btn btn-success m-2"
        onClick={() => removeElementCartId(element.id)}
      >
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
    <>
      {existItem ? (
        <div className="container">
          <h1>Carrito de compras</h1>
          <ul>{listItemCartList}</ul>
          <div class="d-flex flex-column bd-highlight">
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
          <h4>Total a pagar: {sumTotalCart}</h4>
        </div>
      ) : (
        <>
          <CartEmpty />
        </>
      )}
    </>
  );
}

export default Cart;
