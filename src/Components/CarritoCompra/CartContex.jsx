import React, { createContext, useContext, useState } from "react";

const CartContex = createContext([]);
export const useCartContex = () => useContext(CartContex);

function CartContexProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item) => {
    setCartList([...cartList, item]);
  };

  const removeElementCartId = (id) => {
    cartList.filter((element) => element.id === id);
  };

  const clearCartList = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    cartList.find((element) => element.id === id);
  };

  console.log("mi cartList es: ", cartList);
  return (
    <CartContex.Provider
      value={{
        cartList,
        addToCart,
        removeElementCartId,
        clearCartList,
        isInCart,
      }}
    >
      {children}
    </CartContex.Provider>
  );
}

export default CartContexProvider;
