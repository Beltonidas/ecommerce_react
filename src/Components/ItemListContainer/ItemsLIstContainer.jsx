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
    const queryCollection = collection(db, "items");
    if (filtro !== "") {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", filtro)
      );
      getDocs(queryFilter)
        .then((resp) => {
          console.log(resp);
          setProds(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setBoolean(true));
    } else {
      getDocs(queryCollection)
        .then((resp) =>
          setProds(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setBoolean(true));
    }
  }, [filtro]);

  console.log(prods);
  console.log("los productos que traje de fire base son:: ", prods);

  return (
    <div>
      <p>{id}</p>
      {!boolean ? (
        <Loading texto={"Cargando Elementos.."} />
      ) : (
        <ItemList productos={prods} />
      )}
    </div>
  );
}

export default ItemsLIstContainer;

// Ejecuta solo una vez despues de renderizar los componenetes
/*
  useEffect(() => {
     if (filtro) {
       getFetch // simulacion a un llamado a una api
         .then((resp) =>
           setProds(resp.filter((prod) => prod.categoria === filtro))
         )
         .catch((err) => console.log(err))
         .finally(() => setBoolean(true));
     } else {
       getFetch // simulacion a un llamado a una api
         .then((resp) => setProds(resp))
         .catch((err) => console.log(err))
         .finally(() => setBoolean(true));
     }
   }, [filtro]);
  */

//Para traer de a aun elemento
/*
   useEffect(() => {
     const db = getFirestore();
     const queryDoc = doc(db, "items", "0wlXd6wQ8gLppCCteVbo");
     getDoc(queryDoc).then((resp) => setProd({ id: resp.id, ...resp.data() }));
   }, [filtro]);
   
   */

// useEffect(() => {
//   const db = getFirestore();
//   const queryCollection = collection(db, "items");
//   const queryFilter = query(queryCollection, where("categoria", "==", "Exp"));
//   getDocs(queryFilter)
//     .then((resp) =>
//       setProds(
//         resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
//       )
//     )
//     .catch((err) => console.log(err))
//     .finally(() => setBoolean(true));
// }, [filtro]);
