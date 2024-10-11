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

let html = "";
const container = document.querySelector(".disco").innerHTML = html;
html += `<ul>`;
html += `<li>Nombre del disco 1:[          ]</li>`;
html += `<li>Autor:[         ]</li>`;
html += `<li>Id:[           ]</li>`;
html += `<li><img src="Img/portada_uno.jpg"></li>`
html += `<li>Pistas: <ul>`
html += `<li> Pista 1 | Duración</li>`
html += `<li> Pista 3 | Duración</li>`
html += `<li> Pista 4 | Duración</li>`
html += `</ul>`
html += `</li>`
html += `</ul>`