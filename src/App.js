import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import Nabvar from "./Components/NabVar/Nabvar";
import ItemsLIstContainer from "./Components/ItemListContainer/ItemsLIstContainer";
import ItemContador from "./Components/ItemListContainer/ItemContador";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h2>Flowers and Herbs</h2>
      <ItemsLIstContainer saludo="Contenedor de imagenes" />
      {/*<ItemDetailContainer identificacion={1}/>*/}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        <h2>Flowers and Herbs</h2>
        <Routes>
          <Route
            path="/category/:id"
            exact
            element={<ItemsLIstContainer saludo="hola" />}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/login" element={<h1>Hola te queres loguear</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
