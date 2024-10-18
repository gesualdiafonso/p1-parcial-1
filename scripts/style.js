'use strict'

class Biblioteca {
    constructor(){
        this.discos = [];

        //Cargamos el fetch existente para el testeo

        fetch("discos.json")
    .then(response => response.json())
    .then(discos => {
        for (let disco of discos) {
            const nuevoDisco = new Disco(disco.artista, disco.discografia, disco.id, disco.portada);
            
            // Adicionando as pistas
            for (let pista of disco.pistas) {
                const duracionConvertida = convertSecondsToMMSS(pista.duracion);
                const nuevaPista = new Pista(pista.nombre, duracionConvertida);
                nuevoDisco.adicionarPista(nuevaPista);
            }
            this.discos.push(nuevoDisco);
        }
        mostrarDisco(); // Atualiza para exibir os discos
    });
    }
    getDiscoMaisLargo() {
        let discoMaisLargo = this.discos[0];
        for (let disco of this.discos) {
            if (convertToSeconds(disco.getDuracionTotal()) > convertToSeconds(discoMaisLargo.getDuracionTotal())) {
                discoMaisLargo = disco;
            }
        }
        return discoMaisLargo;
    };

    toHTML (){
        let html = `<p class="discos">Disco con la mayor duración: ${this.getDiscoMaisLargo().nombre} (${this.getDiscoMaisLargo().getDuracionTotal()})</p>`;

        for(let disco of this.discos){
            html += disco.toHTML(); //llama el metodo toHTML de cada disco
        }

        return html;
    }
}