import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CardWidget from "../CardWidget";

const InputCount = () => {
  return (
    <div class="row">
      <div class="col">
        <Link to="/Cart">
          <button className="btn btn-success p-2 m-2">
            Ir al Carrito <CardWidget />
          </button>
        </Link>
      </div>
      <div class="col">
        <Link to="/Home">
          <button
            className="btn btn-success p-2 m-2"
            onClick={() => console.log("seguir comprando")}
          >
            Seguir comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

const ButtonCount = ({ handleInter }) => {
  return (
    <button className="btn btn-success p-2 m-2" onClick={handleInter}>
      Agregar al carrito
    </button>
  );
};

function DinamicButton() {
  const [typeButton, setTypeButton] = useState("button");

  const handleInter = () => {
    setTypeButton("input");
  };

  return (
    <div>
      {typeButton === "button" ? (
        <ButtonCount handleInter={handleInter} />
      ) : (
        <InputCount />
      )}
    </div>
  );
}

export default DinamicButton;
