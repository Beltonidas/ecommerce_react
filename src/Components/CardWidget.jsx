import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "../resources/icons/ShoppingCartIcon";
import { useCartContex } from "../Components/CarritoCompra/CartContex";

function CardWidget() {
  const { cartList } = useCartContex();
  const [sumCartWidget, setSumCartWidget] = useState(0);

  useEffect(() => {
    let sumTotal = 0;
    cartList.forEach((element) => {
      sumTotal = sumTotal + element.cantidad;
    });
    setSumCartWidget(sumTotal);
  }, [cartList]);
  const existItem = cartList.length > 0 ? true : false;
  return (
    <>
      {existItem ? (
        <div class="d-flex flex-row bd-highlight">
          <div class=" bd-highlight">
            <ShoppingCartIcon />
          </div>
          <div class=" bd-highlight">
            <p> {sumCartWidget}</p>
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
