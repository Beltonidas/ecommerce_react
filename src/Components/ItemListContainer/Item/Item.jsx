import React from "react";
import { Link } from "react-router-dom";

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
          <h5 className="card-title">{prod.name}</h5>
          <p className="card-text">Cantidades disponibles: {prod.cantidad}</p>
        </div>
        <div className="cart-footer">
          <Link to={`/Detalle/${prod.id}`}>
            <button type="button" className="btn btn-success p-2 m-2">
              Ver producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
