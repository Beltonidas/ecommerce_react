import React from 'react'
import CardWidget from '../CardWidget'
//import ShoppingCartIcon from '../resources/icons/ShoppingCartIcon';


function Nabvar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <a className="navbar-brand fs-3 text-light" href="#haydenRunFarm"> Hayden Run Farm </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#home"> Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#OurFlowers"> Our Flowers </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#Experience"> Experience </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#About Our Farm"> About Our Farm </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#Contact Us"> Contact Us </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#Blog">Blog </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="#compras"> <CardWidget/> </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  </div>
  )
}

export default Nabvar