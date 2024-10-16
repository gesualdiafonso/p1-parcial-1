'use strict'
class Pistas{
    constructor(nombre, duracion){
        this.nombre = nombre;
        this.duracion = duracion;
    }

    //convertemos la duracion en MM:SS
}

class Disco {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
        //this.duracion = duracion;
        this.pistas = [];
    }
    adicionarPista(pista){
        this.pistas.push(pista);
    }
}
