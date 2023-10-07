import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createData = async () => {
    try {
        // Crear una Ciudad
        const ciudad = await prisma.ciudad.create({
            data: {
                nombre: 'Ciudad A',
            },
        });

        // Crear un Alquiler
        const alquiler = await prisma.alquiler.create({
            data: {
                precio: 1000,
                fechaInicio: new Date('2023-10-01'),
                fechaFin: new Date('2023-10-15'),
            },
        });

        // Crear un Local relacionado con Ciudad y Alquiler
        const local = await prisma.local.create({
            data: {
                idCiudad: ciudad.idCiudad,
                idAlquiler: alquiler.idAlquiler,
                nombre: 'FACCI',
                direccion: 'Flavio Reyes',
                capacidad: 50,
                descripcion: 'Espaciosos y condortable',
            },
        });

        console.log('Local creado:', local);
    } catch (error) {
        console.error('Error al crear datos:', error);
    } finally {
        await prisma.$disconnect();
    }
};

const searchData = async () => {
    try {
        // Buscar Locales
        const locales = await prisma.local.findMany();
        console.log('Locales encontrados:', locales);
    } catch (error) {
        console.error('Error al buscar locales:', error);
    } finally {
        await prisma.$disconnect();
    }
};

const updateData = async () => {
    try {
        // Actualizar un Local
        const updatedLocal = await prisma.local.update({
            where: { idLocal: 1 }, 
            data: {
                capacidad: 60, 
            },
        });

        console.log('Local actualizado:', updatedLocal);
    } catch (error) {
        console.error('Error al actualizar Local:', error);
    } finally {
        await prisma.$disconnect();
    }
};

const deleteData = async () => {
    try {
        // Eliminar un Local
        const deletedLocal = await prisma.local.delete({
            where: { idLocal: 1 }, 
        });

        console.log('Local eliminado:', deletedLocal);
    } catch (error) {
        console.error('Error al eliminar Local:', error);
    } finally {
        await prisma.$disconnect();
    }
};

(async () => {
    // Ejecutar las operaciones que desees
    // await createData();
    // await searchData();
    // await updateData();
    // await deleteData();
})();
