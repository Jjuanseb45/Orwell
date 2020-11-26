/*jshint esversion: 6 */

class question {
    constructor(id, lecureName, question, answer) {
        this.id = id;
        this.lecureName = lecureName;
        this.question = question;
        this.answer = answer;
    }
}

let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
console.log(randomNumber);
let randomNumber2 = Math.floor(Math.random() * (7 - 4) + 4);
console.log(randomNumber2);
let randomNumber3 = Math.floor(Math.random() * (10 - 7) + 7);
console.log(randomNumber3);

function bringQuestions(titleText, HTMLList) {
    let mainList = document.getElementById(HTMLList);
    for (const iterator of dataQuestions) {
        if (titleText === iterator.lecureName) {
            if (randomNumber === iterator.id || randomNumber2 === iterator.id || randomNumber3 === iterator.id) {
                let item = iterator.question;
                let element = document.createElement('li');
                let element2 = document.createElement('input');
                element2.setAttribute('class', 'answer');
                element2.setAttribute('id', iterator.id);
                element.innerHTML = item;
                mainList.appendChild(element);
                mainList.appendChild(element2);
            }
        }
    }
}

let buenas = 0;

function validate() {
    for (const iterator of dataQuestions) {
        if (iterator.id === parseInt(document.getElementsByClassName('answer')[0].id) && iterator.lecureName === localStorage.getItem('titlelecture')) {
            if ((iterator.answer).toUpperCase() === (document.getElementsByClassName('answer')[0].value).toUpperCase()) {
                document.getElementById(document.getElementsByClassName('answer')[0].id).style.border = "2px solid rgb(134, 206, 101)";
                buenas++;
            } else {
                document.getElementById(document.getElementsByClassName('answer')[0].id).style.border = "2px solid rgb(206, 101, 101)";
            }
        }
        if (iterator.id === parseInt(document.getElementsByClassName('answer')[1].id) && iterator.lecureName === localStorage.getItem('titlelecture')) {
            if ((iterator.answer).toUpperCase() === (document.getElementsByClassName('answer')[1].value).toUpperCase()) {
                document.getElementById(document.getElementsByClassName('answer')[1].id).style.border = "2px solid rgb(134, 206, 101)";
                buenas++;
            } else {
                document.getElementById(document.getElementsByClassName('answer')[1].id).style.border = "2px solid rgb(206, 101, 101)";
            }
        }
        if (iterator.id === parseInt(document.getElementsByClassName('answer')[2].id) && iterator.lecureName === localStorage.getItem('titlelecture')) {
            if ((iterator.answer).toUpperCase() === (document.getElementsByClassName('answer')[2].value).toUpperCase()) {
                document.getElementById(document.getElementsByClassName('answer')[2].id).style.border = "2px solid rgb(134, 206, 101)";
                buenas++;
            } else {
                document.getElementById(document.getElementsByClassName('answer')[2].id).style.border = "2px solid rgb(206, 101, 101)";
            }
        }
    }

    switch (buenas) {
        case 0:
        case 1:
            document.getElementById('volver').style.display = "block";
            document.getElementById('check').style.display = "none";
            document.getElementById('aside').style.backgroundColor = "rgb(206, 101, 101)";
            document.getElementById('before').style.backgroundColor = "rgb(224, 67, 67)";
            document.getElementById('sectionIdentifier').src = "../../../../resources/rana.png";
            document.getElementById('title').innerHTML = "¡Oh no!";
            document.getElementById('leyend').innerHTML = "Has perdido y la bruja te ha transformado en rana. <br> ¡No te rindas, intentalo de nuevo!";
            break;
        case 2:
        case 3:
            document.getElementById('volver').style.display = "block";
            document.getElementById('check').style.display = "none";
            document.getElementById('volver').style.backgroundColor = "rgb(134, 206, 101)";
            document.getElementById('sectionIdentifier').src = "../../../../resources/corona.png";
            document.getElementById('title').innerHTML = "¡Lo lograste!";
            document.getElementById('leyend').innerHTML = "Has vencido a la bruja, Has sido coronado como rey. <br> ¡El pueblo te ama!";
            break;
        default:
            break;
    }

}