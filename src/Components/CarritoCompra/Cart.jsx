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

  const deleteElement = (idParamer) => {
    console.log(cartList);
    removeElementCartId(idParamer);
    console.log(cartList);
  };

  const sumCart = () => {
    let sumaTotal = 0;
    cartList.forEach((element) => {
      sumaTotal = sumaTotal + element.price * element.cantidad;
    });
    console.log(sumaTotal);
  };

  return (
    <div className="container">
      <h1>Carrito de compras</h1>
      <ul>{listItemCartList}</ul>
      <div class="d-flex flex-column bd-highlight">
        <div class="p-2 bd-highlight">
          <button type="button" className="btn btn-success" onClick={sumCart}>
            pueba de precio total
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

      <button onClick={isInCart(0)}>prueba de id</button>

      <span>La suma es: {sumTotalCart}</span>
    </div>
  );
}

export default Cart;
