/*jshint esversion: 6 */

class verb {
    constructor(verbnName, verbTraduction, verbPast, verbContinuous, verbPresentPerfect, verbFuture, verbS, imgEnlace, idverb) {
        this.verbnName = verbnName;
        this.verbS = verbS;
        this.verbTraduction = verbTraduction;
        this.verbPast = verbPast;
        this.verbContinuous = verbContinuous;
        this.verbPresentPerfect = verbPresentPerfect;
        this.verbFuture = verbFuture;
        this.imgEnlace = imgEnlace;
        this.idverb = idverb;
    }
}

let dataVerbs = [
    new verb('Study', 'Estudiar', 'Studied', 'Studying', 'Studied', 'Will study', 'Studies', 'https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1),
    new verb('See', 'Ver', 'Saw', 'Seeing', 'Seen', 'Will see', 'Sees', 'https://images.unsplash.com/photo-1511923468502-4e48e59ef6f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1154&q=80', 2),
    new verb('Read', 'Leer', 'Read', 'Reading', 'Read', 'Will read', 'Reads', 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', 3),
    new verb('Speak', 'Hablar', 'Spoke', 'Speaking', 'Spoken', 'Will speak', 'Speaks', 'https://images.unsplash.com/photo-1534180888273-50e8cca7c1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 4),
    new verb('Sleep', 'Dormir', 'Slept', 'Sleeping', 'Slept', 'Will sleep', 'Sleeps', 'https://images.unsplash.com/photo-1487300001871-12053913095d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 5)
];


function fullVerbsCombobox(idElement) {
    var selectBox = document.getElementById(idElement);
    selectBox.innerHTML = "";
    for (const iterator of dataVerbs) {
        let option = iterator.verbnName;
        selectBox.options.add(new Option(option));
    }
}

function randomVerb(idimgHTML) {
    let randomNumber = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
    for (const iterator of dataVerbs) {
        if (randomNumber === iterator.idverb) {
            document.getElementById(idimgHTML).src = iterator.imgEnlace;
        }
    }
}