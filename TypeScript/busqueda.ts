// Importamos el arreglo
import local from './arreglo';

// Ciclo forEach
console.log("Ciclo forEach");

local.forEach(({ciudad, capacidad, direccion}) => {
    console.log(`ciudad:${ciudad},
    capacidad:${capacidad},
    direccion:${direccion}`);
});

// Ciclo for in
console.log("Ciclo for in");

for (let i = 0; i < local.length; i++) {
  const localObj = local[i];
  console.log(`ciudad: ${localObj.ciudad}, 
  capacidad: ${localObj.capacidad}, 
  direccion: ${localObj.direccion}`);
};

// Ciclo for of
console.log("Ciclo for of");

for (const localObj of local) {
  console.log(`ciudad: ${localObj.ciudad}, 
  capacidad: ${localObj.capacidad},
  direccion: ${localObj.direccion}`);
}
