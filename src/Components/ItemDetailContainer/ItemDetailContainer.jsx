import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Helpers/Loading";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [element, setElement] = useState();
  const { detalleId } = useParams();
  const [boolean, setBoolean] = useState(false);

  let paramDinamic = detalleId;
  console.log("mi parametro es: ", paramDinamic);

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "items", paramDinamic);
    console.log("mi query doc es: ", queryDoc);
    getDoc(queryDoc)
      .then((resp) => {
        console.log(resp);
        setElement({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setBoolean(true));
  }, [paramDinamic]);

  console.log("mi elemento es: ", element);
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

//const db = getFirestore();
// const queryCollection = collection(db, "items");
// if (paramDinamic !== null) {
//   console.log("entre al if con mi parametro: ", paramDinamic);
//   const queryFilter = query(
//     queryCollection,
//     where("id", "==", paramDinamic)
//   );
//   getDocs(queryFilter)
//     .then((resp) => {
//       console.log(resp);
//       setElement(
//         resp.docs.map((producto) => ({
//           id: producto.id,
//           ...producto.data(),
//         }))
//       );
//     })
//     .catch((err) => console.log(err))
//     .finally(() => setBoolean(true));
// }
