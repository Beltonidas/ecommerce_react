import React from "react";
import CardWidget from "../CardWidget";
//import ShoppingCartIcon from '../resources/icons/ShoppingCartIcon';
import { NavLink, Link } from "react-router-dom";

function Nabvar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid mt-0 pt">
        <NavLink to="/home" className="navbar-brand fs-3 text-light">
          Hayden Run Farm
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-2" id="navbarText">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link active text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="OurFlowers">
                Our Flowers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="Experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="AboutUs">
                About Our Farm
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="Contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="Blog">
                Blog
              </Link>
            </li>
          </ul>

          <Link className="nav-link text-light" to="Cart">
            <CardWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nabvar;
