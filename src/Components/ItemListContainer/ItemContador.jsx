import React, { useState } from "react";
import DownArrow from "../../resources/icons/DownArrow";
import UpArrow from "../../resources/icons/UpArrow";
import DinamicButton from "../Botones/DinamicButton";
import { useCartContex } from "../CarritoCompra/CartContex";

function ItemContador({ stockInicial, stockMaximo, addCart }) {
  //Logica para controlar el stock
  const [count, setCount] = useState(stockInicial);
  // función flecha que aumenta el valor de la función "setCount"
  const aumenta = () => {
    if (count >= stockInicial && count < stockMaximo) {
      setCount(count + 1);
    } else
      alert(
        "No se puede agregar otro elemento, por lo que se termino el stock"
      );
  };
  const disminuir = () => {
    if (count > stockInicial) setCount(count - 1);
    else alert("¿Quiere poner un Stock negativo?");
  };
  //Logica para agregar items al carrito
  return (
    <div>
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className=" bd-highlight">
          <span>la cantidad de unidad: {count}</span>
        </div>
        <div className=" bd-highlight">
          <button
            type="button"
            className="btn btn-success p-2 m-2"
            onClick={disminuir}
          >
            {" "}
            <DownArrow />{" "}
          </button>
          <button
            type="button"
            className="btn btn-success  p-2 m-2"
            onClick={aumenta}
          >
            {" "}
            <UpArrow />
          </button>
        </div>
        <div className="  bd-highlight">
          <DinamicButton addCart={addCart} count={count} />
        </div>
      </div>
    </div>
  );
}

export default ItemContador;
