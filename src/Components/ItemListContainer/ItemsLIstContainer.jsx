import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch, getDatos } from "../../DataBase/DatosProductos";
import Loading from "../../Helpers/Loading";
import ItemList from "./ItemList";

function ItemsLIstContainer({ filtro }) {
  //guardo mis productos en contexto una vez que llamo a la api
  const [prods, setProds] = useState([]);
  const { id } = useParams();
  const [boolean, setBoolean] = useState(false);

  // Ejecuta solo una vez despues de renderizar los componenetes
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

  let Arreglo = [];
  prods.map(function (index) {
    Arreglo.push(index);
  });

  return (
    <div>
      <p>{id}</p>
      {!boolean ? (
        <Loading texto={"Cargando Elementos.."} />
      ) : (
        <ItemList productos={Arreglo} />
      )}
    </div>
  );
}

export default ItemsLIstContainer;
