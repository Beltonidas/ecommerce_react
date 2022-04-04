//Creo un arreglo de productos
import dahilas from "../resources/Image/flor_1.png";
import sunflower from "../resources/Image/flor_2.png";
import lavanda from "../resources/Image/flor_3.png";
import bouquet from "../resources/Image/flor_4.png";
import ramo2 from "../resources/Image/flor_5.png";
import ramo3 from "../resources/Image/flor_6.png";
import tableFlowers from "../resources/Image/flor_7.png";
import redflower from "../resources/Image/flor_8.png";
import Exp_1 from "../resources/Image/Experiencia_1.png";
import Exp_2 from "../resources/Image/Experiencia_2.png";

const productos = [
  {
    id: 1,
    categoria: "Flor",
    name: "dahilas",
    cantidad: 37,
    foto: dahilas,
    price: 20,
  },
  {
    id: 2,
    categoria: "Flor",
    name: "sun Flower",
    cantidad: 27,
    foto: sunflower,
    price: 20,
  },
  {
    id: 3,
    categoria: "Flor",
    name: "Lavanda",
    cantidad: 40,
    foto: lavanda,
    price: 20,
  },
  {
    id: 4,
    categoria: "Flor",
    name: "Ramo de Flores 1",
    cantidad: 55,
    foto: bouquet,
    price: 20,
  },
  {
    id: 5,
    categoria: "Flor",
    name: "Ramo de Flores 2",
    cantidad: 11,
    foto: ramo2,
    price: 20,
  },
  {
    id: 6,
    categoria: "Flor",
    name: "Ramo de Flores 3",
    cantidad: 19,
    foto: ramo3,
    price: 20,
  },
  {
    id: 7,
    categoria: "Flor",
    name: "Mesa de flores",
    cantidad: 2,
    foto: tableFlowers,
    price: 20,
  },
  {
    id: 8,
    categoria: "Flor",
    name: "Mesa de flores",
    cantidad: 2,
    foto: tableFlowers,
    price: 20,
  },
  {
    id: 9,
    categoria: "Flor",
    name: "Flor Roja",
    cantidad: 2,
    foto: redflower,
    price: 20,
  },
  {
    id: 10,
    categoria: "Exp",
    name: "Ride a Horse",
    cantidad: 27,
    foto: Exp_1,
    price: 20,
  },
  {
    id: 11,
    categoria: "Exp",
    name: "Visit a Farm",
    cantidad: 2,
    foto: Exp_2,
    price: 20,
  },
];
export const getFetch = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  } else {
    reject("400 - not found");
  }
});

const producto = {
  id: "1",
  categoria: "Flor",
  name: "dahilas",
  price: 3,
  foto: dahilas,
};

export const getFetchOne = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(producto);
    }, 1000);
  } else {
    reject("400 - not found");
  }
});

/*function filtro(tipoDato) {
  const result = [];
  producto.forEach((element) => {
    if (element.categoria === tipoDato) result.push(element);
  });

  return result;
}

export const getDatos = (tipoDato) => {
  const datoFiltrado = filtro(tipoDato);
  return new Promise((resolve, reject) => {
    if (datoFiltrado) {
      setTimeout(() => {
        resolve(datoFiltrado);
      }, 1000);
    } else {
      reject(new Error("Rechazado"));
    }
  });
};

export default getDatos;*/
