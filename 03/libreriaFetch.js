//Esta línea utiliza la función fetch para realizar una solicitud GET a la URL 
fetch('https://pokeapi.co/api/v2/pokemon', {
    //'GET' es el método que viene por defectop.
  method: 'GET'
})

//cuando se conecte correctamente la funcion response.json devuelve un mapa de los datos devueltos.
  .then(response => response.json())
  .then(data => {

//pedimos datos de la informacion obtenida
    const nombree = data.name;

// devuelve el mnombre del pokemon
    console.log(`El nombre del Pokémon es: ${nombree}`);
  })
  
//devuelve un mensaje de error si  no se a encontrado el pokemon o hay algun error de sintaxis
  .catch(error => console.error('Ha ocurrido un error:', error));