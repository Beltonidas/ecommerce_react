import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import Nabvar from './Components/NabVar/Nabvar';
import ItemsLIstContainer from './Components/ItemListContainer/ItemsLIstContainer';

function App() {

  return (
    <div className="App">
      <Nabvar/>
      <h2>Flowers and Herbs</h2>
      <ItemsLIstContainer saludo= "Contenedor de imagenes"/>
    </div>
  );
}

export default App;
