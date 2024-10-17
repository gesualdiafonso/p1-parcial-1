/**
 * <div class="discos">
        <ul>
            
            <li>Nombre del disco 1:[          ]</li>
            <li>Autor:[         ]</li>
            <li>Id:[           ]</li>
            <li><img src="Img/portada_uno.jpg"></li>
            <li>Pistas: <ul>
                            <li> Pista 1 | Duración</li>
                            <li> Pista 3 | Duración</li>
                            <li> Pista 4 | Duración</li>
                            <li> Pista 5 | Duración</li>
                            <li> Pista i | Duración</li>
        
                        </ul>
            </li>
        </ul>
    </div>
 */
class Biblioteca{
    constructor(){
        this.discos = []

        fetch("autoria.json").then(response => response.json()).then(discos => {
            for(let disco of discos){
    
                const informe = {
                    "disco": new Disco(
                    disco.artista,
                    disco.discografia,
                    disco.id,
                    disco.portado,
                    disco.pistas
                )
                }
            };
            this.discos.push(informe)
        })
    }
    toHTML(){
        let html = "";

        for(let obj of this.discos){
            html += obj.disco.toHTML();
        }
        return html;
    }
}
class Disco{
    constructor(artista, discografia, portado, pistas){

        this.artista = artista;
        this.discografia = discografia;
        this.id= id;
        this.portado = portado;
        this.pistas = pistas;
    }

    toHTML(){
        let html = "";
        html += `<ul>`;
        html += `<li><img src="${this.portado}"></li>`
        html += `<li>Nombre del disco: ${this.discografia}</li>`;
        html += `<li>Autor:${this.artista}</li>`;
        html += `<li>Id:${this.id}</li>`;
        html += `<li>Pistas: <ul>`
        html += `<li>${this.pistas}</li>`
        html += `</ul>`
        html += `</li>`
        html += `</ul>`
    return html;
    }
}