//importamos el arreglo
const local=require("./arreglo.js")

//Ciclo ForEach

console.log("Ciclo forEach")

local.forEach(({ciudad, capacidad, direccion})=>{
    console.log(`ciudad:${ciudad},
    capacidad:${capacidad},
    direccion:${direccion}`);
});



// ciclo for in
console.log("Ciclo for in");

for (let i = 0; i < local.length; i++) {
  const localObj = local[i];
  console.log(`ciduad: ${localObj.ciudad}, 
  capacidad: ${localObj.capacidad}, 
  direccion: ${localObj.direccion}`);
};

//ciclo for of

console.log("Ciclo for of");

for (const localObj of local) {
  console.log(`Correo: ${localObj.ciudad}, 
  Descripcion: ${localObj.capacidad},
   Precio: ${localObj.direccion}`);
}


