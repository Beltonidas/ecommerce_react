import React, {useEffect,useState} from 'react'
import GetItem from '../../Helpers/GetIten';
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer({identificacion}) {


    const [element, setElement] = useState();

    console.log("mi identificación es: "+ identificacion )

    useEffect((identificacion)=>{
        GetItem(identificacion)
            .State()
            .then((elementSimple)=> setElement(elementSimple))
            .catch((rejert)=> console.log("Error de petición"))
    }, [identificacion])

  
    console.log(element);
    
    return (


    <div>
        <ItemDetail item= {element}/>
    </div>
  )
}

export default ItemDetailContainer