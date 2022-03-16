import React from 'react'
import Item from './Item/Item'

function ItemList({productos}) {


  console.log("en item", productos)


  /*const todoItems = productos.map((todo) =>
  <li key={todo.id}>
    {todo.categoria}
  </li>  );
*/
    return (
      <div className='container-sm'>
        {productos.map((elementoSimple) => 
            <Item prod={elementoSimple} key={elementoSimple.id} /> ) 
        }
      </div>

  )
}

export default ItemList