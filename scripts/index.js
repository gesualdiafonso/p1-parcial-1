'use strict';

zen = [];
let discos = [], id = [];

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */


// llamamos la validación

const autor = validarString("Ingrese el nombre del autor:");

do{
    // Pedimos el dato de disco y validamos
    let disco = validarString("Ingrese el nombre del disco:")

    //guardamos el disco para ser validado en un array
    discos.push(disco);

    // Pedimos el id y validamos

    let codigoId = validarString(`Ingrese el numero del id del ${disco}`);

    // guardamos el disco para ser validado en un array
    
    id.push(codigoId);
}while(confirm('Seguimos intentando?'))

/*function validarDatos(){
    // Pedimos y validamos la discografia

    const dicografia = validarString('Ingrese el nombre de la discografia...')

    // Pedimos y validamos el altor

    const autor = validarString("Ingrese el nombre del autor:")

    // Pedimos para validar el id

    let codigoId = validarId("Ingrese el código ID de la discografía:")

    return { dicografia, autor };
}*/

// Llamamos a la función

validarDatos()
/**
 * Llamada desde un boton. Pide los datos para un disco.
 */
function cargar() {
    // TODO:
}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {
    // TODO
};
