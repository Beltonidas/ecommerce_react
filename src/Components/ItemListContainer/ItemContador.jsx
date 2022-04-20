import React, { useState } from "react";
//import DownArrow from "../../resources/icons/DownArrow";
//import UpArrow from "../../resources/icons/UpArrow";
import DinamicButton from "../Botones/DinamicButton";

function ItemContador({ stockInicial, stockMaximo, addCart }) {
  //Logica para controlar el stock
  const [count, setCount] = useState(stockInicial);
  // función flecha que aumenta el valor de la función "setCount"
  const sumItem = () => {
    if (count >= stockInicial && count < stockMaximo) {
      setCount(count + 1);
    } else
      alert(
        "No se puede agregar otro elemento, por lo que se termino el stock"
      );
  };
  const dimItem = () => {
    if (count > stockInicial) setCount(count - 1);
    else alert("¿Quiere poner un Stock negativo?");
  };
  return (
    <div>
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className=" bd-highlight"></div>
        <div className=" bd-highlight">
          <button
            type="button"
            className="btn btn-success p-2 m-2"
            onClick={dimItem}
          >
            {" "}
            -{" "}
          </button>
          <span> {count} </span>
          <button
            type="button"
            className="btn btn-success  p-2 m-2"
            onClick={sumItem}
          >
            {" "}
            +
          </button>
          <p>Cantidades disponibles: {stockMaximo}</p>
        </div>
        <div className="  bd-highlight">
          <DinamicButton addCart={addCart} count={count} />
        </div>
      </div>
    </div>
  );
}

export default ItemContador;
