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

/**
 * 
 * @param {string} msg 
 * @returns un string valido
 */
function validarDuracion(msg = "Ingrese la duración en MM:SS") {
    let datoValido;
    let entrada;
    do {
        entrada = prompt(msg);
        if (!entrada.includes(":")) {
            alert("Por favor, ingrese la duración en formato MM:SS");
            datoValido = false;
        } else {
            const totalSegundos = convertToSeconds(entrada);
            if (isNaN(totalSegundos) || totalSegundos < 0 || totalSegundos > 7200) {
                alert("La duración debe estar entre 0 y 7200 segundos (120 minutos)");
                datoValido = false;
            } else {
                datoValido = true;
            }
        }
    } while (!datoValido);
    return entrada;
}