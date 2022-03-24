import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../DataBase/DatosProductos";
import ItemList from "./ItemList";

function ItemsLIstContainer({ saludo }) {
  //guardo mis productos en contexto una vez que llamo a la api
  const [prods, setProds] = useState([]);
  const { detalleId } = useParams();

  // Ejecuta solo una vez despues de renderizar los componenetes
  useEffect(() => {
    getFetch // simulacion a un llamado a una api
      .then((resp) => setProds(resp))
      .catch((err) => console.log(err));
  }, []);

  let params = useParams();
  console.log(params);

  let Arreglo = [];
  prods.map(function (index) {
    Arreglo.push(index);
  });

  return (
    <div>
      <h4> Catalo de Productos </h4>
      <p>{saludo}</p>
      <p>{detalleId}</p>
      <ItemList productos={Arreglo} />
    </div>
  );
}

export default ItemsLIstContainer;
