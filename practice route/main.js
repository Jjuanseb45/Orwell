/*jshint esversion: 6 */

document.getElementById("reading").addEventListener('click', e => {
    let value = 1;
    localStorage.setItem("key", value);
});

document.getElementById("speaking").addEventListener('click', e => {
    let value = 3;
    localStorage.setItem("key", value);
});