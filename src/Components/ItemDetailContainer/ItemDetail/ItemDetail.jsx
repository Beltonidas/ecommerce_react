import React from "react";
import ItemContador from "../../ItemListContainer/ItemContador";

function ItemDetail({ item }) {
  console.log(item);
  return (
    <div className="container">
      <h3>{item.categoria}</h3>
      <img
        src={item.foto}
        className="rounded mx-auto d-block w-50 h-50"
        alt=""
      />
      <h3>{item.name}</h3>
      <h6>Price: {item.price} USD</h6>
      <ItemContador stockInicial={1} stockMaximo={item.cantidad} />
    </div>
  );
}

export default ItemDetail;
