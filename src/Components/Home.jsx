import React from "react";
import ItemsLIstContainer from "./ItemListContainer/ItemsLIstContainer";

function Home() {
  return (
    <div>
      <h2>Flowers and Herbs</h2>
      <ItemsLIstContainer saludo="Contenedor de imagenes" />
      {/*<ItemDetailContainer identificacion={1}/>*/}
    </div>
  );
}

export default Home;
