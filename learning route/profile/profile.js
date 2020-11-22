/*jshint esversion: 6 */
let boton = document.getElementById('introducir');
let clean = document.getElementById('clean');


function createElement(name, lastName, age, country, element) {
    document.getElementById('clean').style.display = 'inline';
    var para = document.createElement(element);
    para.setAttribute("id", "result");
    var node = document.createTextNode("Hi! My name is " + name + ' ' +
        lastName + ' Im ' + age + " years old, and I am from " + country);
    para.appendChild(node);
    var elemento = document.getElementById("resultados");
    elemento.appendChild(para);
}

function generateText() {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let country = document.getElementById('country').value;
    if (name !== "" && lastName !== "" && age !== "" & country !== "") {
        createElement(name, lastName, age, country, 'p');
    } else {
        alert('Por favor rellena los campos');
    }
}

function removeElement() {
    var element = document.getElementById('result');
    element.parentNode.removeChild(element);
    if (document.getElementById('result') === null) {
        document.getElementById('clean').style.display = 'none';
    }
}


boton.addEventListener('click', generateText);
clean.addEventListener('click', removeElement);