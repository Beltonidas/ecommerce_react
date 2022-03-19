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

        <div className='row'>

          {productos.map((elementoSimple) => 
            
              <div className='col-md-4 mb-5' key={elementoSimple.id}>
                <Item prod={elementoSimple} /> 
              </div>
              
            )
          }
        </div>
      </div>

  )
}

export default ItemList