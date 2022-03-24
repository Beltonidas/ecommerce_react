import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import Nabvar from "./Components/NabVar/Nabvar";
import ItemsLIstContainer from "./Components/ItemListContainer/ItemsLIstContainer";
import ItemContador from "./Components/ItemListContainer/ItemContador";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import Experience from "./Components/Experience";
import OurFlowers from "./Components/OurFlowers";
import Footer from "./Components/Footer";
import Cart from "./Components/CarritoCompra/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Nabvar />
        </header>
        <Routes>
          <Route path="/home" exact element={<Home />} />{" "}
          <Route
            path="/category/:id"
            exact
            element={<ItemsLIstContainer saludo="hola" />}
          />{" "}
          <Route path="/item/:id" element={<ItemDetailContainer />} />{" "}
          <Route path="/Contact" element={<Contact />} />{" "}
          <Route path="/AboutUs" element={<AboutUs />} />{" "}
          <Route path="/Experience" element={<Experience />} />{" "}
          <Route path="/OurFlowers" element={<OurFlowers />} />{" "}
          <Route path="/Blog" element={<Blog />} />{" "}
          <Route path="/Cart" element={<Cart />} />{" "}
          <Route
            path="/Detalle"
            element={<ItemDetailContainer identificacion={4} />}
          />{" "}
        </Routes>{" "}
        <Footer />
      </Router>{" "}
    </div>
  );
}

export default App;
