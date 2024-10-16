'use strict'
class Pistas{
    constructor(nombre, duracion){
        this.nombre = nombre;
        this.duracion = duracion;
    }

    //retornar la duración en MM:SS

    getDuracion(){
        const minutos = Math.floor(this.duracion / 60);
        const segundos = this.duracion % 60;

        return `${minutos}:${segundos < 10 ? '0' : ' '}${segundos}`;

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

    //Metodo donde adiciona las pistas

    adicionarPista(pista){
        this.pistas.push(pista);
    }

    //Metodo para calcular la duración total del disco
    getDuracionTotal(){
        let totalSegundos = this.getDuracionTotal();

        const hora = Math.floor(totalSegundos / 3600);

        const minutos = Math.floor((totalSegundos / 3600) / 60);

        const segundos = totalSegundos % 60;

        return `${hora}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`
    }

    getPistaLargas(){
        return this.pistas.reduce((largas, pistaPrincipal) => {
            return (pistaPrincipal.duracion > largas.duracion) ? pistaPrincipal : largas;
        }, this.pistas[0]);
    }

    getNumeroDePistas(){
        return this.pistas.length
    }

    //Metodo para se calcular la duración média de los disco

    getDuracionMedia(){
        const duracionTotal = this.getDuracionTotal();
        const numeroDePistas = this.getNumeroDePistas();
        const duracionMedia = duracionTotal / numeroDePistas;

        const minutos = Math.floor(duracionMedia / 60);
        const segundos = Math.floor(duracionMedia % 60);
        return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    }
}
