//Creo un arreglo de productos
import dahilas from '../resources/Image/flor_1.png'
import sunflower from '../resources/Image/flor_2.png'
import lavanda from '../resources/Image/flor_3.png'
import bouquet from '../resources/Image/flor_4.png'
import ramo2 from '../resources/Image/flor_5.png'
import ramo3 from '../resources/Image/flor_6.png'
import tableFlowers from '../resources/Image/flor_7.png'
import redflower from '../resources/Image/flor_8.png'

const productos = [
  { id: 1, categoria: 'flor', name: "dahilas", price: 37   ,foto:dahilas},
  { id: 2, categoria: 'flor', name: "sun Flower", price: 27 ,foto:sunflower },
  { id: 3, categoria: 'flor', name: "Lavanda", price: 40    ,foto:lavanda },
  { id: 4, categoria: 'flor', name: "Ramo de Flores 1", price: 55    ,foto:bouquet },
  { id: 5, categoria: 'flor', name: "Ramo de Flores 2", price: 11 ,foto:ramo2 },
  { id: 6, categoria: 'flor', name: "Ramo de Flores 3", price: 19 ,foto:ramo3 },
  { id: 7, categoria: 'flor', name: "Mesa de flores", price: 2      ,foto:tableFlowers},
  { id: 7, categoria: 'flor', name: "Flor Roja", price: 2      ,foto:redflower
 }
]
export const getFetch = new Promise((resolve, reject)=>{
  //acciones 
  let condition = true
  if (condition) {
      setTimeout(() => {
        alert("Cargando..")    
        resolve(productos)                  
      }, 2000);
  } else {
      reject('400 - not found')        
  }
})

