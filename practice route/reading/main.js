/*jshint esversion: 6 */

let level = parseInt(localStorage.getItem("level"));

if (level === 1) {
    document.getElementById('title').innerHTML = "Lecturas Faciles";
    document.getElementById('itemIdentifier').setAttribute('src', '../resources/caballero.png');
    fullList(1, 'textList');
} else if (level === 2) {
    document.getElementById('title').innerHTML = "Lecturas Medias";
    document.getElementById('itemIdentifier').setAttribute('src', '../resources/wizard.png');
    fullList(2, 'textList');
} else if (level === 3) {
    document.getElementById('title').innerHTML = "Lecturas Dificiles";
    document.getElementById('itemIdentifier').setAttribute('src', '../resources/king.png');
    fullList(3, 'textList');
}