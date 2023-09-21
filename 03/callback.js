//importamos los datos del arreglo
const local=require("./arreglo.js")

//Crear una función que busca el id y utiliza un callback
function buscarProductoPorID(arr, id, callback) {
  for (const localcito of arr) {
    if (localcito.id === id) {
      callback(localcito);
      return;
    }
  }
  //si hay un error se llama un null
  callback(null); 
}

// creamos una funcion callback para mostrar si el objeto fue encontrado o no
function mostrarProducto(localcito) {
  if (localcito) {
    console.log("local encontrado:");
    console.log(localcito);
  } else {
    console.log("local no encontrado.");
  }
}

// creamos una variable que almacene el id que queremos buscar
const idBuscar = 2;
//llamamos la funcion callback para buscar y luego mostrar el objeto con dicho id
buscarProductoPorID(local, idBuscar, mostrarProducto);