import { useCartContex } from "../../CarritoCompra/CartContex";
import ItemContador from "../../ItemListContainer/ItemContador";

function ItemDetail({ item }) {
  const { addToCart, cartList } = useCartContex();

  const addCart = (cant) => {
    addToCart({ ...item, cantidad: cant });
  };

  console.log("mi cartList", cartList);
  console.log(item);
  return (
    <div className="container">
      <h2>{item.categoria}</h2>
      <div className="row">
        <div className="col-8">
          <h3>{item.name}</h3>
          <img
            src={item.foto}
            className="img-fluid rounded  max-width: 100% h-50"
            alt=""
          />
          <p>Descripcion simple</p>
        </div>
        <div className="col-2">
          <h6>Price: {item.price} USD</h6>
          <ItemContador
            stockInicial={1}
            stockMaximo={item.cantidad}
            addCart={addCart}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
