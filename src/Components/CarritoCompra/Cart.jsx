import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CartCheckOut from "./CartCheckOut";
import { useCartContex } from "./CartContex";
import CartEmpty from "./CartEmpty";

function Cart() {
  // Hooks State
  const [sumTotalCart, setSumTotalCart] = useState(0);
  const [dataForm, setDataForm] = useState({ email: "", name: "", phone: "" });
  const [idOrder, setId] = useState();
  const [cartCheckOut, setCartCheckOut] = useState(false);
  //const [idProducts, setIdProducts] = useState([]);
  const [alertStore, setAlertStore] = useState(false);
  const [validateEmail, setValidateEmail] = useState({
    campo: "",
    valido: null,
  });

  //puedo poner un dispay flex para organizar las subcategorias en la misma linea, para que quedem todos los items iguales
  // Destructuring de cartContext
  const { cartList, removeElementCartId, clearCartList } = useCartContex();

  //Existencia de items
  const existItem = cartList.length > 0 ? true : false;

  //Lista de items
  const listItemCartList = cartList.map((element) => (
    <li className="list-group-item list-group-item-success" key={element.id}>
      <span className="m-2 ">Name Product: {element.name}</span>
      <span className="m-2">Amount: {element.cantidad}</span>
      <span className="m-2">Price: {element.precio}</span>
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
      const cantidad = cartItem.cantidad;
      const precio = cartItem.precio * cartItem.cantidad;

      return { id, nombre, cantidad, precio };
    });
    const db = getFirestore();
    const queryCollectionItems = collection(db, "orders");
    await addDoc(queryCollectionItems, objOrden)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        clearCartList();
        alertOrder();
      });
  };
  const setCartOut = () => {
    setCartCheckOut(true);
  };

  const alertOrder = () => {
    setAlertStore(true);
  };

  // Queda implementar actualizar el stock
  // const updateStock = () => {
  //   const db = getFirestore();
  //   const queryDoc = doc(db, "orders", id);
  //   console.log(queryDoc);
  //   getDoc(queryDoc)
  //     .then((resp) => {
  //       let idProduct = [{ id_producto: "", cantidad: 0 }];
  //       let it = 0;
  //       resp.data().items.forEach((element) => {
  //         console.log(element.id);
  //         console.log(element.cantidad);
  //         it = it + 1;
  //       });
  //       console.log(idProduct);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      {existItem ? (
        <div className="container">
          <h2>Cart Store</h2>
          <ol className="list-group list-group-numbered">{listItemCartList}</ol>
          <div class="d-flex flex-column bd-highlight">
            <div class="p-2 bd-highlight">
              <button
                type="button"
                className="btn btn-success"
                onClick={clearCartList}
              >
                Delete all cart
              </button>
            </div>
          </div>
          <h4 className="mt-5">Total to pay: {sumTotalCart}</h4>
          <div>
            {!cartCheckOut ? (
              <div className="container">
                <button
                  type="button"
                  className="btn btn-success mt-5"
                  onClick={setCartOut}
                >
                  Finish the Purchase
                </button>
              </div>
            ) : (
              <div className="container">
                <h5>Complete the form to finish the purchase</h5>
                {
                  <CartCheckOut
                    dataForm={dataForm}
                    setDataForm={setDataForm}
                    validateEmail={validateEmail}
                    setValidateEmail={setValidateEmail}
                    generarOrden={generarOrden}
                  />
                }
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <CartEmpty />
          {alertStore ? (
            <div className="container alert alert-success" role="alert">
              <h3>Congratulation for your purchase!</h3>
              <br />
              <span>Your id the purchase, {idOrder}</span>
            </div>
          ) : (
            <></>
          )}
          {/*
            <div>
              <h3>Probar el carrito</h3>
              <button type="button" className="btn btn-success mt-5">
                simular control de stock
              </button>
            </div>
            
            */}
        </>
      )}
    </>
  );
}

export default Cart;
