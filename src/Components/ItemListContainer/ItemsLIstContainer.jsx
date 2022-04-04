import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch, getDatos } from "../../DataBase/DatosProductos";
import Loading from "../../Helpers/Loading";
import ItemList from "./ItemList";

function ItemsLIstContainer({ filtro }) {
  //guardo mis productos en contexto una vez que llamo a la api
  const [prods, setProds] = useState([]);
  const [prod, setProd] = useState({});
  const { id } = useParams();
  const [boolean, setBoolean] = useState(false);

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

  //Para traer toda la coleccion de elementos
  /*
   useEffect(() => {
     const db = getFirestore();
     const queryCollection = collection(db, "items");
     getDocs(queryCollection)
       .then((resp) =>
         setProds(
           resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
         )
       )
       .catch((err) => console.log(err))
       .finally(() => setBoolean(true));
   }, [filtro]);
   */

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    const queryFilter = query(
      queryCollection,
      where("categoria", "==", "Flor ")
    );
    getDocs(queryFilter)
      .then((resp) =>
        setProds(
          resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setBoolean(true));
  }, [filtro]);

  //codigo anterior cuando teniamos la base de datos en un archivo
  /*let Arreglo = [];
  prods.map(function(index) {
    Arreglo.push(index);
  });
  */

  console.log("es producto qeu traje de fire base es: ", prods);

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
