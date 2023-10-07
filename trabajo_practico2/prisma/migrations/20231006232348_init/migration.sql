
--CreateTable para Ciudad
CREATE TABLE "Ciudad" (
    "idCiudad" SERIAL PRIMARY KEY,
    "nombre" TEXT NOT NULL
);

--CreateTable para Alquiler
CREATE TABLE "Alquiler" (
    "idAlquiler" SERIAL PRIMARY KEY,
    "precio" FLOAT NOT NULL,
    "fechaInicio" TIMESTAMP NOT NULL,
    "fechaFin" TIMESTAMP NOT NULL
);

--CreateTable para Local
CREATE TABLE "Local" (
    "idLocal" SERIAL PRIMARY KEY,
    "idCiudad" INTEGER,
    "idAlquiler" INTEGER,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "capacidad" INTEGER NOT NULL,
    "descripcion" TEXT,
    
    CONSTRAINT "fk_ciudad" FOREIGN KEY ("idCiudad") REFERENCES "Ciudad"("idCiudad"),
    CONSTRAINT "fk_alquiler" FOREIGN KEY ("idAlquiler") REFERENCES "Alquiler"("idAlquiler")
);


ALTER TABLE "Local" ADD CONSTRAINT "Local_id_ciudad_fkey" FOREIGN KEY ("idCiudad") REFERENCES "Ciudad"("idCiudad") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Local" ADD CONSTRAINT "Local_id_alquiler_fkey" FOREIGN KEY ("idAlquiler") REFERENCES "Alquiler"("idAlquiler") ON DELETE RESTRICT ON UPDATE CASCADE;
