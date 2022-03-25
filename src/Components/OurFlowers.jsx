import React from "react";
import ItemsLIstContainer from "./ItemListContainer/ItemsLIstContainer";

function OurFlowers() {
  return (
    <div>
      <h1>Flowers</h1>
      <ItemsLIstContainer filtro={"flor"} />
    </div>
  );
}

export default OurFlowers;
