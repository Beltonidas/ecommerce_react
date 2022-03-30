import React, { createContext, useContext, useState } from "react";

const CartContex = createContext([]);
export const useCartContex = () => useContext(CartContex);

function CartContexProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item) => {
    setCartList([...cartList, item]);
  };

  const removeElementCartId = (idParamer) => {
    const newCartList = cartList.filter((element)=> element.id !== idParamer)
    setCartList (newCartList);
  };

  const clearCartList = () => {
    console.log("entre a este metodo");
    setCartList([]);
  };

  function isInCart(id){
    cartList.forEach(element => {
      if(element.id === id){
        return true;
      }
    });
    return false;
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
