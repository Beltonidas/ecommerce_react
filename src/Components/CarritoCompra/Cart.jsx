import React, { useEffect, useState } from "react";
import { useCartContex } from "./CartContex";
import CartEmpty from "./CartEmpty";

function Cart() {
  // Hooks State
  const [sumTotalCart, setSumTotalCart] = useState(0);
  const [dataForm, setDataForm] = useState({ email: "", name: "", phone: "" });
  const [id, setId] = useState(null);

  // Destructuring de cartContext
  const { cartList, removeElementCartId, clearCartList } = useCartContex();

  //Existencia de items
  const existItem = cartList.length > 0 ? true : false;

  //Lista de items
  const listItemCartList = cartList.map((element) => (
    <li key={element.id}>
      <span className="m-2">Nombre Producto: {element.name}</span>
      <span className="m-2">Cantidad: {element.cantidad}</span>
      <span className="m-2">Precio: {element.precio}</span>
      <span className="m-2">SubTotal: {element.precio * element.cantidad}</span>
      <button
        type="button"
        className="btn btn-success m-2"
        onClick={() => removeElementCartId(element.id)}
      >
        x
      </button>
    </li>
  ));

  //Contexto de Carrito de compra, como varia en funcion de las acciones del ususario
  useEffect(() => {
    let sumaTotal = 0;
    cartList.forEach((element) => {
      sumaTotal = sumaTotal + element.precio * element.cantidad;
    });
    setSumTotalCart(sumaTotal);
  }, [cartList]);

  const generarOrden = async (e) => {
    e.preventDefault();
    let objOrden = {};
    objOrden.buyer = dataForm;
    objOrden.total = sumTotalCart;
    console.log("orden generada?");
  };

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
          <button
            type="button"
            className="btn btn-success"
            onClick={generarOrden}
          >
            ¡Comprar ahora!
          </button>
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
