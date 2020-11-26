/*jshint esversion: 6 */

let idLectura = parseInt(localStorage.getItem('titles'));
let imgFacil = '../../resources/caballero.png';
let imgMedio = '../../resources/wizard.png';
let imgDificil = '../../resources/king.png';
let btnEnlace = document.getElementById('enlaceTest');

bringLecture(idLectura, 'title', 'lecture', 'sectionIdentifier', imgFacil, imgMedio, imgDificil);

function getElements(idTitle, sectionIdentifier) {
    localStorage.setItem('titlelecture', document.getElementById(idTitle).innerHTML);
    localStorage.setItem('sectionIdentifier', document.getElementById(sectionIdentifier).src);
}


btnEnlace.href = "Test Page/index.html";

btnEnlace.addEventListener('click', getElements('title', 'sectionIdentifier'));