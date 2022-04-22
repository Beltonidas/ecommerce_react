import React from "react";
import Item from "./Item/Item";

//queda cambiar los nombres de las variables
function ItemList({ productos }) {
  return (
    <div className="container-sm">
      <div className="row">
        {productos.map((elementsimple) => (
          <div className="col-md-4 mb-5" key={elementsimple.id}>
            <Item prod={elementsimple} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
