/*jshint esversion: 6 */
const titulo = document.getElementById("title");
const backImg = document.getElementById("backImg");
let title = localStorage.getItem('titlelecture');
let idLevel = localStorage.getItem('sectionIdentifier');

console.log(idLevel);
backImg.src = idLevel;
titulo.innerHTML = title;