import React, { createContext, useContext, useState } from "react";

const CartContex = createContext([]);
export const useCartContex = () => useContext(CartContex);

function CartContexProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      const index = cartList.findIndex((element) => element.id === item.id);
      const oldCant = cartList[index].cantidad;
      const newCant = oldCant + item.cantidad;
      cartList[index].cantidad = newCant;
      const newCartList = [...cartList];
      setCartList(newCartList);
    } else {
      setCartList([...cartList, item]);
    }
  };

  const removeElementCartId = (idParamer) => {
    if (isInCart(idParamer)) {
      const newCartList = cartList.filter(
        (element) => element.id !== idParamer
      );
      setCartList(newCartList);
    }
  };

  const clearCartList = () => {
    setCartList([]);
  };

  const isInCart = (idParamer) => {
    return cartList.some((element) => element.id === idParamer);
  };

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
