import React from 'react'
import CardWidget from '../CardWidget'
//import ShoppingCartIcon from '../resources/icons/ShoppingCartIcon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Nabvar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid mt-0 pt">
    <a className="navbar-brand fs-3 text-light" href="home"> Hayden Run Farm </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mt-2" id="navbarText">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="home"> Home </a>
        </li>
        <li className="nav-item">
              <a className="nav-link text-light" href="OurFlowers"> Our Flowers </a>
        </li>
        <li className="nav-item">
              <a className="nav-link text-light" href="Experience"> Experience </a>
        </li>
        <li className="nav-item">
              <a className="nav-link text-light" href="AboutUs"> About Our Farm </a>
        </li>
        <li className="nav-item">
              <a className="nav-link text-light" href="Contact"> Contact Us </a>
        </li>
        <li className="nav-item">
              <a className="nav-link text-light" href="Blog">Blog </a>
        </li>
      </ul>
      <a className="nav-link text-light" href="Cart"> <CardWidget/> </a>
    </div>
  </div>
</nav>
  )
}

export default Nabvar