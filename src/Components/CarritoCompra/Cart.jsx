import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCartContex } from "./CartContex";
import CartEmpty from "./CartEmpty";

function Cart() {
  // Hooks State
  const [sumTotalCart, setSumTotalCart] = useState(0);
  const [dataForm, setDataForm] = useState({ email: "", name: "", phone: "" });
  const [id, setId] = useState();
  const [cartCheckOut, setCartCheckOut] = useState(false);

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
    objOrden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.precio * cartItem.cantidad;

      return { id, nombre, precio };
    });
    const db = getFirestore();
    const queryCollectionItems = collection(db, "orders");
    await addDoc(queryCollectionItems, objOrden)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        clearCartList();
        setCartCheckOut(true);
      });
  };

  // Queda implementar actualizar el stock
  const updateStock = () => {
    const db = getFirestore();
    const queryDoc = doc(db, "orders", id);
    getDoc(queryDoc)
      .then((resp) => {
        console.log(resp.id);
        console.log(resp.data());
        console.log(resp.data().items);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const laPrueba = () => {
    console.log("hola");
  };

  return (
    <>
      {existItem ? (
        <div className="container">
          <h1>Cart Store</h1>
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
          <button
            type="button"
            className="btn btn-success"
            onClick={updateStock}
          >
            Probar Stock
          </button>
        </>
      )}

      <div>
        {cartCheckOut ? (
          <div>
            <form className="mt-5" onSubmit={laPrueba()}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={dataForm.name}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="phone"
                placeholder="tel"
                value={dataForm.phone}
                onChange={handleChange}
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="email"
                value={dataForm.email}
                onChange={handleChange}
              />
              <br />
              <input
                type="email"
                name="email1"
                placeholder="repita email"
                value={dataForm.email}
                onChange={handleChange}
              />
              <br />

              <button
                className="btn btn-outline-primary"
                onClick={generarOrden}
              >
                Terminar Compra
              </button>
            </form>
          </div>
        ) : (
          <div> No estoy aca, pero tengo que estar</div>
        )}
      </div>
    </>
  );
}

export default Cart;
