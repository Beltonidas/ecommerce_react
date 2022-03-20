import React, {useEffect,useState} from 'react'
import GetItem from '../../Helpers/GetIten';
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer({identificacion}) {


    const [element, setElement] = useState(1);

    console.log("mi identificación es: "+ identificacion )

    useEffect(()=>{
        GetItem(identificacion)
            .then((elementSimple)=> setElement(elementSimple))
            .catch((reject)=> console.log("Error de petición" + reject))
    }, [identificacion])

  
    console.log(element);
    
    return (


    <div>
        <ItemDetail item= {element} />
    </div>
  )
}

export default ItemDetailContainer