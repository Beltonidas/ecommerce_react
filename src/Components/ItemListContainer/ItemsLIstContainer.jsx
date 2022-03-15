import { useState, useEffect } from "react";
import {getFetch} from '../../DataBase/DatosProductos';
import ItemList from "./ItemList";

function ItemsLIstContainer({saludo}) {
  
  //guardo mis productos en contexto una vez que llamo a la api
  const [prods, setProds ] = useState([])

  // Ejecuta solo una vez despues de renderizar los componenetes
  useEffect( ()=> {
    getFetch// simulacion a un llamado a una api        
    .then(resp => setProds(resp))
    .catch(err => console.log(err))

  }, [])
  
  let Arreglo = [];
  

  prods.map(
    function(index){
      Arreglo.push(index);
    }
  )
  /*Arreglo.forEach(function(element){
    console.log ("el id: ", element.id, " y el dato es: ", element.categoria )
  })*/





  return (
    <div>
        <p>{saludo}</p>
        <ItemList productos={Arreglo}/>
    </div>
  )
}

export default ItemsLIstContainer