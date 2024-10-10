// Debe ser validado el nombre del auto o banda
// Debe ser valiado el codigo
// Debe ser validado el nombre del disco
// Debe ser validado nombre de las pista
// Debe ser validado la duración de las pista


'use strict'
/**
 * Validamos las strings de disco
 * Solicitamos al usuario que ingrese solamente textos
 * @param {String} msg
 * @returns un string valido
 */
function validarString(msg = " "){

    let datoValido;
    let entrada;

    do{
        entrada = prompt(msg);

        if(!isNaN(entrada)){
            alert("Por favor, ingrese Textos")
            datoValido = false;
        }
        else if(entrada === null || entrada.trim() === ""){
            alert("Por favor, complete el campo")
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    }
    while(!datoValido)

    return entrada;
};



/**
 * Pide y valida un código ID de la discográfica
 * @param {String} msg mensaje que será mostrado para el usuario con el prompt
 * @param {Array} idsExistentes un array de Ids ya utilizados para garantir que el usuario no ingrese nuevamente el mismo
 * @returns {Numbers} un Id valido inserido desde el usuario
 */
function validarID(msg = "", idsExistentes = []) {
    let datoValido;
    let entrada;

    do {
        entrada = prompt(msg);
        const id = parseInt(entrada)

        // Vamos decir si el codigo sera numerico o alfanumerico.

        if (isNaN(id) || id < 1 || id > 999){
            alert("Por favor, insira un Id que sea dentro del rango de 1 a 999 y que sea valido")
            datoValido = false;
        }
        else if (idsExistentes.includes(id)){
            alert("Este Id presentado ya existe, por favor volver a inserir otro")
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    } 
    while(!datoValido);

    return entrada;
}

// Function de validación de duración

function validarDuracion(){

}