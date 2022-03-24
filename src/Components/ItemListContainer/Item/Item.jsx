import React from "react";
import ItemContador from "../ItemContador";

function Item({ prod }) {
  console.log(prod);

  return (
    <div>
      <div className="card" style={{ height: "30rem" }}>
        <img
          src={prod.foto}
          className="card-img-top rounded mx-auto d-block h-50 w-auto"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Articulo: {prod.name}</h5>
          <p className="card-text">Cantidades disponibles: {prod.cantidad}</p>
          <ItemContador stockInicial={1} stockMaximo={prod.cantidad} />
        </div>
      </div>
    </div>
  );
}

export default Item;
