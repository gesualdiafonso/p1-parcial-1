'use strict';

//Incializando arrays de discos y sus Ids usados
let discos = [];
let codigosUsados = [];

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */
//Llamamos la función de cargar los datos

function cargar() {
    // TODO
    do {
        // Validamos el nombre del disco
        const nombreDisco = validarString("Ingrese el nombre del disco:");
        const idDisco = validarID(`Ingrese el Id del disco:`, codigosUsados);

        // Añadimos el Id a los ya usados
        codigosUsados.push(idDisco);

        // Creamos un nuevo disco fuera del bucle interno
        const nuevoDisco = new Disco(nombreDisco, idDisco);

        let seguir;
        do {
            const nombrePista = validarString("Ingrese el nombre de la pista:");
            const duracionPista = validarString("Informe la duración de la pista en MM:SS");
            const nuevaPista = new Pistas(nombrePista, duracionPista);
            
            // Añadir pista al disco
            nuevoDisco.adicionarPista(nuevaPista);

            seguir = confirm("¿Desea seguir agregando canciones?");
        } while (seguir);

        // Añadimos el disco al array de discos
        discos.push(nuevoDisco);

        alert(`El disco ${nombreDisco} con el Id ${idDisco}, ha sido cargado con éxito!`);
        console.log(nuevoDisco);  // Mostramos el disco en la consola

    } while (confirm("¿Deseas seguir cargando nuevos discos?"));
}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {
    // TODO
    // Verificamos si hay discos cargados
    if (discos.length === 0) {
        console.log("No hay discos cargados.");
        return;
    }

    // Iteramos sobre los discos y mostramos su información
    discos.forEach((disco, index) => {
        console.log(`Disco ${index + 1}:`);
        console.log(`Nombre: ${disco.nombre}`);
        console.log(`ID: ${disco.id}`);
        console.log(`Pistas:`);

        disco.pistas.forEach((pista, idx) => {
            console.log(`  ${idx + 1}. ${pista.nombre} | Duración: ${pista.duracion}`);
        });

        console.log("------------------------------");
    });
};
