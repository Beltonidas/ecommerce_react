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
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        <Routes>
          <Route path="/" exact element={<Home />} />
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
