/*jshint esversion: 6 */

class pronoun {
    constructor(nombreEspanol, subjectPronouns, objectPronouns, possessiveAdjetives, possessivePronouns, reflexivePronouns) {
        this.nombreEspanol = nombreEspanol;
        this.objectPronouns = objectPronouns;
        this.subjectPronouns = subjectPronouns;
        this.possessiveAdjetives = possessiveAdjetives;
        this.possessivePronouns = possessivePronouns;
        this.reflexivePronouns = reflexivePronouns;
    }
}

let dataPronouns = [
    new pronoun('Yo', 'I', 'Me', 'My', 'Mine', 'Myself'),
    new pronoun('Tu', 'You', 'You', 'Your', 'Yours', 'Yourself'),
    new pronoun('El', 'He', 'Him', 'His', 'His', 'Himself'),
    new pronoun('Ella', 'She', 'Her', 'Her', 'Hers', 'Herself'),
    new pronoun('Eso', 'It', 'It', 'Its', 'Its', 'Itself'),
    new pronoun('Nosotros', 'We', 'Us', 'Our', 'Ours', 'Ourselves'),
    new pronoun('Ustedes', 'You', 'You', 'Your', 'Yours', 'Yourselves'),
    new pronoun('Ellos', 'They', 'Them', 'Their', 'Theirs', 'Themselves')
];


function fullPronounsCombobox(idElement) {
    var selectBox = document.getElementById(idElement);
    selectBox.innerHTML = "";
    for (const iterator of dataPronouns) {
        let option = iterator.nombreEspanol;
        selectBox.options.add(new Option(option));
    }
}