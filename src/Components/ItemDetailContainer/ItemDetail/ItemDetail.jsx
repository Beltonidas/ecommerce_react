import React from "react";
import ItemContador from "../../ItemListContainer/ItemContador";

function ItemDetail({ item }) {
  console.log(item);
  return (
    <div className="container">
      <h2>{item.categoria}</h2>
      <div className="row">
        <div className="col-6">
          <h3>{item.name}</h3>
          <img src={item.foto} className="rounded  w-100" alt="" />
          <p>Descripcion simple</p>
        </div>
        <div className="col-5">
          <h6>Price: {item.price} USD</h6>
          <ItemContador stockInicial={1} stockMaximo={item.cantidad} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
