import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingCartIcon from "../../resources/icons/ShoppingCartIcon";

const InputCount = () => {
  return (
    <div class="row">
      <div class="col">
        <Link to="/Cart">
          <button className="btn btn-success p-2 m-2">
            Ir al Carrito <ShoppingCartIcon />
          </button>
        </Link>
      </div>
      <div class="col">
        <Link to="/Home">
          <button className="btn btn-success p-2 m-2">Seguir comprando</button>
        </Link>
      </div>
    </div>
  );
};

const ButtonCount = ({ handleInter, count, addCart }) => {
  const addItemCart = () => {
    addCart(count);
  };

  return (
    <button
      className="btn btn-success p-2 m-2"
      onClick={() => {
        handleInter();
        addItemCart();
      }}
    >
      Agregar al carrito
    </button>
  );
};

function DinamicButton({ addCart, count }) {
  const [typeButton, setTypeButton] = useState("button");

  const handleInter = () => {
    setTypeButton("input");
  };

  return (
    <div>
      {typeButton === "button" ? (
        <ButtonCount
          handleInter={handleInter}
          count={count}
          addCart={addCart}
        />
      ) : (
        <InputCount />
      )}
    </div>
  );
}

export default DinamicButton;
