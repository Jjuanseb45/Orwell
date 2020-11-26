/*jshint esversion: 6 */

let value = localStorage.getItem("key");

let direrccionFaciles = "<img src=\"../resources/caballero.png\">";
let direrccionMedios = "<img src=\"../resources/wizard.png\">";
let direrccionDificiles = "<img src=\"../resources/king.png\">";

function redirectHandler(idElemento, levelIdentifier, direccion, imagen) {
    document.getElementById(idElemento).innerHTML = imagen + levelIdentifier;
    document.getElementById(idElemento).setAttribute('href', direccion);
}

function setLevel(idElemento, nivel) {
    document.getElementById(idElemento).addEventListener('click', e => {
        let level = nivel;
        localStorage.setItem("level", level);
    });
}

if (value == 1) {
    document.getElementById('pageIdentifier').innerHTML = "Orwell: Reading";
    document.getElementById('title').innerHTML = "Reading";
    redirectHandler('easy', 'Textos Fáciles', '../reading/index.html', direrccionFaciles);
    redirectHandler('medium', 'Textos Medios', '../reading/index.html', direrccionMedios);
    redirectHandler('hard', 'Textos Dificiles', '../reading/index.html', direrccionDificiles);

} else if (value == 3) {
    document.getElementById('pageIdentifier').innerHTML = "Orwell: Speaking";
    document.getElementById('title').innerHTML = "Speaking";
    redirectHandler('easy', 'Pronunciaciones Fáciles', '../speaking/index.html', direrccionFaciles);
    redirectHandler('medium', 'Pronunciacion Medios', '../speaking/index.html', direrccionMedios);
    redirectHandler('hard', 'Pronunciacion Difícil', '../speaking/index.html', direrccionDificiles);
}

setLevel('easy', 1);
setLevel('medium', 2);
setLevel('hard', 3);