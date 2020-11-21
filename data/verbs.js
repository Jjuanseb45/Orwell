/*jshint esversion: 6 */

class verb {
    constructor(verbnName, verbTraduction, verbPast, verbContinuous, verbPresentPerfect, verbFuture) {
        this.verbnName = verbnName;
        this.verbTraduction = verbTraduction;
        this.verbPast = verbPast;
        this.verbContinuous = verbContinuous;
        this.verbPresentPerfect = verbPresentPerfect;
        this.verbFuture = verbFuture;
    }
}

let dataVerbs = [
    new verb('Go', 'Ir', 'Went', 'Going', 'Gone', 'Will go'),
    new verb('Study', 'Estudiar', 'Studied', 'Studying', 'Studied', 'Will study')
];


function fullVerbsCombobox(idElement) {
    var selectBox = document.getElementById(idElement);
    selectBox.innerHTML = "";
    for (const iterator of dataVerbs) {
        let option = iterator.verbnName;
        selectBox.options.add(new Option(option));
    }
}