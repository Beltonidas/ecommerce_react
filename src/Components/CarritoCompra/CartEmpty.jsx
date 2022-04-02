import React from "react";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="container">
      <h3>Carrito vacio</h3>
      <Link to="/home">
        <button type="button" className="btn btn-success p-2 m-2">
          Volver a Home
        </button>
      </Link>
    </div>
  );
}

export default CartEmpty;
