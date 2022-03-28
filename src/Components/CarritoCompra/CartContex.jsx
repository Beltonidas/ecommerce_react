import React, { createContext, useContext, useState } from "react";

const CartContex = createContext([]);
export const useCartContex = () => useContext(CartContex);

function CartContexProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item) => {
    setCartList([...cartList, item]);
  };


  console.log("mi cartList es: ", cartList)
  return (
    <CartContex.Provider value={(cartList, addToCart)}>
      {children}
    </CartContex.Provider>
  );
}

export default CartContexProvider;
