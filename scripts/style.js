'use strict'

class Biblioteca {
    constructor(){
        this.discos = [];

        //Cargamos el fetch existente para el testeo

        fetch("discos.json")
            .then(response => response.json())
            .then(discos => {
                for (let disco of discos){
                    //Cria una instancia para el disco con sus dados desde json
                    const nuevoDisco = new Disco(
                        disco.artista,
                        disco.discografia,
                        disco.id,
                        disco.portada
                    );
                    //adicionamos las pistas a los disco

                    for(let pista of disco.pistas){
                        const nuevaPista = new Pista(pista.nombre, pista.duracion);
                        nuevoDisco.adicionarPista(nuevaPista);

                    }

                    this.discos.push(nuevoDisco); //Adiciona el disco a la biblioteca
                }
                mostrarDisco(); //Actualiza para que se pueda exibir los disco
            })
    }

    toHTML (){
        let html = "";

        for(let disco of this.discos){
            html += disco.toHTML(); //llama el metodo toHTML de cada disco
        }

        return html;
    }
}