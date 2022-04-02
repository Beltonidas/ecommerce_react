import React from "react";
import ShoppingCartIcon from "../resources/icons/ShoppingCartIcon";
import { useCartContex } from "../Components/CarritoCompra/CartContex";

function CardWidget() {
  const { cartList } = useCartContex();
  const existItem = cartList.length > 0 ? true : false;
  console.log("la cantidad de item en el car son: ", existItem);
  return (
    <>
      {existItem ? (
        <div class="d-flex flex-row bd-highlight">
          <div class=" bd-highlight">
            <ShoppingCartIcon />
          </div>
          <div class=" bd-highlight">
            <h7> {cartList.length}</h7>
          </div>
        </div>
      ) : (
        <div>
          <ShoppingCartIcon />
        </div>
      )}
    </>
  );
}

export default CardWidget;
