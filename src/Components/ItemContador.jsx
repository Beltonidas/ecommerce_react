import React, {useState}from 'react'
import DownArrow from '../resources/icons/DownArrow';
import UpArrow from '../resources/icons/UpArrow';
import ShoppingCartIcon from '../resources/icons/ShoppingCartIcon';

function ItemContador({stockInicial, stockMaximo}) {
    const [count, setCount] = useState(stockInicial); 
    // función flecha que aumenta el valor de la función "setCount"
  const aumenta = ()=> {

    if (count>= stockInicial && count<stockMaximo){
      setCount(count +1)
    } else
    alert("no hay mas stock")
  }

  const disminuir = ()=> {

    if(count> stockInicial)
    setCount(count -1)
    else
    alert("no existe el stock negativo mann")
  }

  console.log (count)
  return (
    <div>
        <p>tu Cliqueaste {count} veces</p>
        <button type="button" className="btn btn-success p-2 m-2" onClick={disminuir}> <DownArrow/> </button>
        <span>la cantidad de items es : {count}</span>
        <button type="button" className="btn btn-success p-2 m-2" onClick={aumenta}> <UpArrow/></button>
        <button type="button" className="btn btn-success p-2 m-2"> Agregar al: <ShoppingCartIcon/></button>

    </div>
  )
}

export default ItemContador