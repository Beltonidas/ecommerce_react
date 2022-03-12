import React from 'react'
import ItemContador from './ItemContador'

function ItemsLIstContainer({saludo}) {

   /* Similar a componentDidMount y componentDidUpdate:
   useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    console.log ("estoy ejecutando: ", {count})
  });*/


  return (
    <div>
        <p>{saludo}</p>
        <ItemContador stockInicial= {1} stockMaximo= {10}/>

    </div>
  )
}

export default ItemsLIstContainer