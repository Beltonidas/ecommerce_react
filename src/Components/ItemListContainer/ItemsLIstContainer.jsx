import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch, getDatos } from "../../DataBase/DatosProductos";
import ItemList from "./ItemList";

function ItemsLIstContainer({ filtro }) {
  //guardo mis productos en contexto una vez que llamo a la api
  const [prods, setProds] = useState([]);
  const { id } = useParams();

  console.log("Mi parametro dinamico es----> " + id);
  console.log("Mi filtro es----> " + filtro);

  // Ejecuta solo una vez despues de renderizar los componenetes
  useEffect(() => {
    if (filtro) {
      getFetch // simulacion a un llamado a una api
        .then((resp) =>
          setProds(resp.filter((prod) => prod.categoria === filtro))
        )
        .catch((err) => console.log(err));
    } else {
      getFetch // simulacion a un llamado a una api
        .then((resp) => setProds(resp))
        .catch((err) => console.log(err));
    }
  }, [filtro]);

  let Arreglo = [];
  prods.map(function (index) {
    Arreglo.push(index);
  });

  return (
    <div>
      <h4> Catalo de Productos </h4>
      <p>{id}</p>
      <ItemList productos={Arreglo} />
    </div>
  );
}

export default ItemsLIstContainer;
