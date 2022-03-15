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
      <div>
        {productos.map((prod) => <Item prod={prod} /> )}
      </div>

  )
}

export default ItemList