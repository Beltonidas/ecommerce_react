import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetItem from "../../Helpers/GetIten";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [element, setElement] = useState(1);
  const { detalleId } = useParams();

  let paramDinamic = Number(detalleId);
  console.log("mi parametro es" + paramDinamic);

  useEffect(() => {
    if (paramDinamic != null) {
      GetItem(paramDinamic)
        .then((elementSimple) => setElement(elementSimple))
        .catch((reject) => console.log("Error de petición" + reject));
    }
  }, [paramDinamic]);
  return (
    <div>
      <ItemDetail item={element} />
    </div>
  );
}

export default ItemDetailContainer;
