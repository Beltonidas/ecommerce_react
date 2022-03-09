import React from 'react'

function ItemsLIstContainer({saludo}) {
  return (
    <div>
        <p>{saludo}</p>
        <button type="button" className="btn btn-success">click here</button>
    </div>
  )
}

export default ItemsLIstContainer