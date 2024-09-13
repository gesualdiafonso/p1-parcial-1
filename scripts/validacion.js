'use strict'
/**
 * Solicitamos al usuario que ingrese solamente textos
 * @param {String} msg
 * @returns un string valido
 */
function validarString(msg = " "){

    let datoValido;

    let zen;

    do{
        zen = prompt(msg);

        if(!isNaN(zen)){
            alert("Por favor, ingrese Textos")
            datoValido = false;
        }
        else if(zen === null){
            alert("Por favor, complete el campo")
            datoValido = false;
        }
        else if (zen === " "){
            alert("Por favor, no deje el campo vacio!!")
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    }while(!datoValido)

    return zen
};



/**
 * Pide y valida un código ID de la discográfica
 * @param {String} msg 
 * @returns un ID validado
 */
function validarID(msg = "") {
    let datoValido;
    let zen;

    do {
        zen = prompt(msg);

        // Vamos decir si el codigo sera numerico o alfanumerico.

        if (isNaN(parseInt(zen)) || zen.trim() === "") {
            alert("Por favor, ingrese un ID válido (número).");
            datoValido = false;
        } 
        else {
            datoValido = true;
        }

    } while(!datoValido);

    return foo;
}
//Validar rango y que no exista...
// Function de validación de duración