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
    do{
        //damos pase a las validaciones
        const nombreDisco = validarString("Ingrese el nombre del disco:"); //valida el nombre
        const idDisco = validarID(`Insira el Id del disco:`, codigosUsados); //valida el Id

        //Adicionamos el Id a los ya usados

        codigosUsados.push(idDisco);

        //Criamos un nuevo disco

        const nuevoDisco = new Disco(nombreDisco, idDisco);

        let seguir
        do{
            const nombrePista = validarString("insira el nombre de las pistas:");
            const duracionPistas = validarString("informe la duración de los albuns, en MM:SS")
            const nuevaPista = new Pistas(nombrePista, duracionPistas);
            nuevoDisco.adicionarPista(nuevaPista);

            seguir = confirm("Desea seguir cargando otras canciones")
        }while(seguir)


    }while(confirm("Deseas seguir cargando nuevos disco?"))
    
    discos.push(nuevoDisco)

    alert(`El disco ${nombreDisco} con el Id ${idDisco}, ha sido cargado con suceso!`)
}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {
    // TODO
};
