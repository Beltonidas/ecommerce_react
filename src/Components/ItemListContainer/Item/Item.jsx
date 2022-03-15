import React from 'react'

function Item({productoSimple}) {


  return (
    <div>
        <div className="card width: 18rem;">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" key={productoSimple.id}>Articulo: productoSimple.name</h5>
                <p className="card-text">texto descriptivo.</p>
                <a href="#hola" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default Item