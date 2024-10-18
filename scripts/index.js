'use strict'

class Pista {
    constructor(nombre, duracion){
        this.nombre = nombre;
        this.duracion = duracion;
    }

}

class Disco {
    constructor(nombre, artista, id, portada){
        this.nombre = nombre;
        this.artista = artista;
        this.id = id;
        this.portada = portada;
        this.pistas = []
    }

    adicionarPista(pista){
        this.pistas.push(pista);
    }

    // Método para contar o número de faixas
    getTotalPistas() {
        return this.pistas.length;
    }

    // Método para calcular a duração total do disco
    getDuracionTotal() {
        let totalSegundos = 0;
        for (let pista of this.pistas) {
            totalSegundos += convertToSeconds(pista.duracion);
        }
        return convertSecondsToMMSS(totalSegundos); // Converte para MM:SS
    }

    // Método para pegar a faixa com a maior duração
    getPistaMaisLarga() {
        let pistaLarga = this.pistas[0];
        for (let pista of this.pistas) {
            if (convertToSeconds(pista.duracion) > convertToSeconds(pistaLarga.duracion)) {
                pistaLarga = pista;
            }
        }
        return pistaLarga;
    }


    toHTML(){
        let html =
            `<div class="discos">
                    <ul>
                        <li>Nombre del disco: ${this.nombre}</li>
                        <li>Autor: ${this.artista}</li>
                        <li>Id: ${this.id}</li>
                        <li><img src="${this.portada}" alt="Portada del disco ${this.discografia}"></li>
                        <li>Total de pistas: ${this.getTotalPistas()}</li>
                        <li>Duración total: ${this.getDuracionTotal()}</li>
                        <li>Pista más larga: ${this.getPistaMaisLarga().nombre} (${this.getPistaMaisLarga().duracion})</li>
                        <li>Pistas:
                            <ul class="pistas">
            `;
            for(let pista of this.pistas){
                html += `<li>${pista.nombre} | Duración: ${pista.duracion}</li>`;
            }
            html += 
                            `</ul>
                            </li>
                        </ul>
                    </div>`;

            return html
    }

}