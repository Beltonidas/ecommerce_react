import React from 'react'
import ItemContador from '../ItemContador'

function Item({prod}) {


  console.log(prod)

  const eventoCompra = ()=>{
    const flor = prod.name
    alert("usted quiere agregar: "+ flor+ "  al carrito? ")
  }

  return (
    <div>
        <div className="card">
            <img src={prod.foto} className="rounded mx-auto d-block w-50 h-50" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Articulo: {prod.name}</h5>
                <p className="card-text">Cantidades disponibles: {prod.cantidad}</p>
                <a href="#hola" className="btn btn-success" onClick={eventoCompra}>Comprar</a>
            </div>
            <ItemContador stockInicial= {1} stockMaximo = {prod.cantidad}/>
        </div>

    </div>
  )
}

export default Item