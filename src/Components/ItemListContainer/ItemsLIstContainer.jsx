import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../DataBase/DatosProductos";
import ItemList from "./ItemList";

function ItemsLIstContainer({ saludo }) {
  //guardo mis productos en contexto una vez que llamo a la api
  const [prods, setProds] = useState([]);

  const { categoryId } = useParams();

  // Ejecuta solo una vez despues de renderizar los componenetes
  useEffect(() => {
    getFetch // simulacion a un llamado a una api
      .then((resp) => setProds(resp))
      .catch((err) => console.log(err));
  }, []);

  let Arreglo = [];
  prods.map(function (index) {
    Arreglo.push(index);
  });

  return (
    <div>
      <p>{saludo}</p>
      <p>{categoryId}</p>
      <ItemList productos={Arreglo} />
    </div>
  );
}

export default ItemsLIstContainer;
