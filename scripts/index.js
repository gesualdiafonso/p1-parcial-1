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
        this.artista = artista
        this.id = id;
        this.portada = portada;
        this.pistas = []
    }

    adicionarPista(pista){
        this.pistas.push(pista);
    }

    toHTML(){
        let html =
            `<div class="discos">
                    <ul>
                        <li>Nombre del disco: ${this.nombre}</li>
                        <li>Autor: ${this.artista}</li>
                        <li>Id: ${this.id}</li>
                        <li><img src="${this.portada}" alt="Portada del disco ${this.discografia}"></li>
                        <li>Pistas:
                            <ul>
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