/*jshint esversion: 6 */

let value = localStorage.getItem("key");

let direrccionFaciles = "<img src=\"../resources/caballero.png\">";
let direrccionMedios = "<img src=\"../resources/wizard.png\">";
let direrccionDificiles = "<img src=\"../resources/king.png\">";

if (value == 1) {
    document.getElementById('pageIdentifier').innerHTML = "Orwell: Reading";
    document.getElementById('title').innerHTML = "Reading";
    document.getElementById('easy').innerHTML = direrccionFaciles + "Textos Fáciles";
    document.getElementById('easy').setAttribute('href', '../reading/index.html');
    document.getElementById('easy').addEventListener('click', e => {
        let level = 1;
        localStorage.setItem("level", level);
    });
    document.getElementById('medium').innerHTML = direrccionMedios + "Textos Medios";
    document.getElementById('medium').setAttribute('href', '../reading/index.html');
    document.getElementById('medium').addEventListener('click', e => {
        let level = 2;
        localStorage.setItem("level", level);
    });
    document.getElementById('hard').innerHTML = direrccionDificiles + "Textos Difíciles";
    document.getElementById('hard').setAttribute('href', '../reading/index.html');
    document.getElementById('hard').addEventListener('click', e => {
        let level = 3;
        localStorage.setItem("level", level);
    });

} else if (value == 2) {
    document.getElementById('pageIdentifier').innerHTML = "Orwell: Writing";
    document.getElementById('title').innerHTML = "Writing";
    document.getElementById('easy').innerHTML = direrccionFaciles + "Escritura Fáciles";
    document.getElementById('easy').setAttribute('href', '#');
    document.getElementById('medium').innerHTML = direrccionMedios + "Escritura Medios";
    document.getElementById('medium').setAttribute('href', '#');
    document.getElementById('hard').innerHTML = direrccionDificiles + "Escritura Difíciles";
    document.getElementById('hard').setAttribute('href', '#');
} else if (value == 3) {
    document.getElementById('pageIdentifier').innerHTML = "Orwell: Speaking";
    document.getElementById('title').innerHTML = "Speaking";
    document.getElementById('easy').innerHTML = direrccionFaciles + "Pronunciacion Fáciles";
    document.getElementById('easy').setAttribute('href', '#');
    document.getElementById('medium').innerHTML = direrccionMedios + "Pronunciacion Medios";
    document.getElementById('medium').setAttribute('href', '#');
    document.getElementById('hard').innerHTML = direrccionDificiles + "Pronunciacion Difíciles";
    document.getElementById('hard').setAttribute('href', '#');

}