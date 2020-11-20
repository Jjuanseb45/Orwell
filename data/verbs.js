/*jshint esversion: 6 */

class verb {
    constructor(verbnName, verbTraduction, verbPast, verbFuture) {
        this.verbnName = verbnName;
        this.verbTraduction = verbTraduction;
        this.verbPast = verbPast;
        this.verbFuture = verbFuture;
    }
}

let data = [
    new verb('Run', 'Correr', 'Ran', 'Will Run'),
    new verb('Watch', 'Ver', 'Watched', 'Will watch'),
    new verb('Walk', 'Caminar', 'Walked', 'Will walk'),
    new verb('Speak', 'Hablar', 'Spoke', 'Will speak'),
    new verb('Notice', 'Darse cuenta', 'Noticed', 'Will notice'),
];

function listVerbs() {
    var selectBox = document.getElementById('verbs');
    selectBox.innerHTML = "";
    for (const iterator of data) {
        let option = iterator.verbnName;
        selectBox.options.add(new Option(option));
    }
}

function verbs() {
    for (const iterator of data) {
        return iterator.verbnName;
    }
}