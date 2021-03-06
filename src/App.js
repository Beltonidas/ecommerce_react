import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import Nabvar from "./Components/NavBar/Nabvar";
import ItemsLIstContainer from "./Components/ItemListContainer/ItemsLIstContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import Home from "./Components/Estruct/Home";
import Contact from "./Components/Estruct/Contact";
import AboutUs from "./Components/Estruct/AboutUs";
import Blog from "./Components/Estruct/Blog";
import Experience from "./Components/Estruct/Experience";
import OurFlowers from "./Components/Estruct/OurFlowers";
import Footer from "./Components/Estruct/Footer";
import Cart from "./Components/CarritoCompra/Cart";
import Erorr404 from "./Helpers/Erorr404";
import CartContexProvider from "./Components/CarritoCompra/CartContex";

function App() {
  return (
    <div className="App">
      <Router>
        <CartContexProvider>
          <header>
            <Nabvar />
          </header>
          <Routes>
            <Route path="/home" exact element={<Home />} />{" "}
            <Route
              path="/Category/:id"
              exact
              element={<ItemsLIstContainer filtro="" />}
            />{" "}
            <Route path="/Contact" element={<Contact />} />{" "}
            <Route path="/AboutUs" element={<AboutUs />} />{" "}
            <Route path="/Experience" element={<Experience />} />{" "}
            <Route path="/OurFlowers" element={<OurFlowers />} />{" "}
            <Route path="/Blog" element={<Blog />} />{" "}
            <Route path="/Cart" element={<Cart />} />{" "}
            <Route
              path="/Detalle/:detalleId"
              element={<ItemDetailContainer />}
            />{" "}
          </Routes>{" "}
          <Footer />
        </CartContexProvider>
      </Router>{" "}
    </div>
  );
}

export default App;
