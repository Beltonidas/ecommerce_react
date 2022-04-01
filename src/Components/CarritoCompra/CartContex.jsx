import React, { createContext, useContext, useState } from "react";

const CartContex = createContext([]);
export const useCartContex = () => useContext(CartContex);

function CartContexProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    //solucionar este bug para agregar elementos repetidos al carrto
    /*const idParamer = item.id;
    const pos = isInCart(idParamer);
    console.log("las pos es: ", pos);
    if (pos >= 0) {
      cartList[pos].catidad = cartList[pos].catidad + item.cantidad;
      const newArray = [...cartList];
      setCartList(newArray);
    } else*/
    setCartList([...cartList, item]);
  };

  const removeElementCartId = (idParamer) => {
    const newCartList = cartList.filter((element) => element.id !== idParamer);
    setCartList(newCartList);
  };

  const clearCartList = () => {
    console.log("entre a este metodo");
    setCartList([]);
  };

  const isInCart = (idParamer) => {
    let it = 0;
    if (cartList.length === 0) {
      console.log("pase por aca");
    }
    /*if (cartList.length === 0) {
      console.log("pase por aca");
    } else {
      while (it <= cartList.length) {
        if (cartList[it].id === idParamer) {
          console.log("mi id esta en la pos: ", it);
        } else it++;
      }
      console.log("no encontre id ");
    }*/
    /*cartList.forEach(element => {
      if(element.id === id){
        return true;
      }
    });
    return false; */
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
