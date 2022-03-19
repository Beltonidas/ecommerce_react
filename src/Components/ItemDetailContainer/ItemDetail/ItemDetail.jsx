import React from 'react'

function ItemDetail({item}) {

  console.log(item);
  return (
    <div className='container'>
         <img src={item.foto} className="rounded mx-auto d-block w-50 h-50" alt=""/>
        <h3>{item.name}</h3>
        <h3>{item.categoria}</h3>
        <h3>{item.cantidad}</h3>
    </div>
  )
}

export default ItemDetail