let biblioteca = new Biblioteca();

function mostrarDisco(){
    document.querySelector(".discos").innerHTML = biblioteca.toHTML();
}