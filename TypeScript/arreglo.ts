interface Local {
    id: number;
    ciudad: string;
    nombre: string;
    capacidad: number;
    direccion: string;
    descripcion: string;
  }
  
  const local: Local[] = [
    { id: 1, ciudad: "Manta", nombre: "Luxo", capacidad: 150, direccion: "flavio reyes", descripcion: "N/A" },
    { id: 2, ciudad: "Manta", nombre: "la cuadra", capacidad: 250, direccion: "via barbasquillo", descripcion: "N/A" },
    { id: 3, ciudad: "Portoviejo", nombre: "Recultura", capacidad: 150, direccion: "Al lado del tia", descripcion: "N/A" },
    { id: 4, ciudad: "Quito", nombre: "Guabra", capacidad: 350, direccion: "Al lado del panesillo", descripcion: "N/A" },
    { id: 5, ciudad: "Guayaquil", nombre: "El ritmo", capacidad: 200, direccion: "Via samborondon", descripcion: "N/A" },
  ];
  
  export default local;
  