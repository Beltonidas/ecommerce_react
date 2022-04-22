import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Helpers/Loading";
import ItemList from "./ItemList";

function ItemsLIstContainer({ filtro }) {
  //guardo mis productos en contexto una vez que llamo a la api
  const [prods, setProds] = useState([]);
  const { id } = useParams();
  const [boolean, setBoolean] = useState(false);

  //Para traer toda la coleccion de elementos completa o por categoria

  useEffect(() => {
    const db = getFirestore();
    const queryCollectionFinally =
      filtro === ""
        ? collection(db, "items")
        : query(collection(db, "items"), where("categoria", "==", filtro));

    getDocs(queryCollectionFinally)
      .then((resp) => {
        setProds(
          resp.docs.map((producto) => ({
            id: producto.id,
            ...producto.data(),
          }))
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setBoolean(true));
  }, [filtro]);

  return (
    <div>
      <p>{id}</p>
      {!boolean ? (
        <Loading texto={"Loading Elements..."} />
      ) : (
        <ItemList productos={prods} />
      )}
    </div>
  );
}

export default ItemsLIstContainer;
