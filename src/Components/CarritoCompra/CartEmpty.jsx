import React from "react";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="container">
      <h3>Cart Empty</h3>
      <Link to="/home">
        <button type="button" className="btn btn-success p-2 m-2 ">
          Back to home
        </button>
      </Link>
    </div>
  );
}

export default CartEmpty;
