import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Helpers/Loading";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [element, setElement] = useState();
  const { detalleId } = useParams();
  const [boolean, setBoolean] = useState(false);

  let paramDinamic = detalleId;

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "items", paramDinamic);
    getDoc(queryDoc)
      .then((resp) => {
        //console.log(resp);
        setElement({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setBoolean(true));
  }, [paramDinamic]);

  return (
    <div>
      {!boolean ? (
        <Loading texto={"Cargando Elemento.."} />
      ) : (
        <ItemDetail item={element} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
