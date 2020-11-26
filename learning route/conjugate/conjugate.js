/*jshint esversion: 6 */
fullVerbsCombobox('verbs');

function replaceTitle(id, valor) {
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).innerHTML = document.getElementById(id).title + ' ' + valor + " +";
}
numeros = [0, 1, 2, 3, 4, 5, 6];

function replaceValue(content) {
    for (const iterator2 of numeros) {
        document.getElementsByClassName('verbConjugated')[iterator2].innerHTML = content;
    }
}

function conjugate() {
    verb = document.getElementById('verbs').value;
    tense = document.getElementById('tenses').value;
    for (const iterator of dataVerbs) {
        if (verb === iterator.verbnName) {
            switch (tense) {
                case "verbPast":
                    replaceTitle('iConjugated', '');
                    replaceTitle('heConjugated', '');
                    replaceTitle('sheConjugated', '');
                    replaceTitle('itConjugated', '');
                    replaceTitle('weConjuated', '');
                    replaceTitle('theyConjugated', '');
                    replaceTitle('youconjugated', '');
                    replaceValue(iterator.verbPast);
                    break;
                case "verbContinuous":
                    replaceTitle('iConjugated', 'am');
                    replaceTitle('heConjugated', 'is');
                    replaceTitle('sheConjugated', 'is');
                    replaceTitle('itConjugated', 'is');
                    replaceTitle('weConjuated', 'are');
                    replaceTitle('theyConjugated', 'are');
                    replaceTitle('youconjugated', 'are');
                    replaceValue(iterator.verbContinuous);
                    break;
                case "verbPresentPerfect":
                    replaceTitle('iConjugated', 'have');
                    replaceTitle('heConjugated', 'has');
                    replaceTitle('sheConjugated', 'has');
                    replaceTitle('itConjugated', 'has');
                    replaceTitle('weConjuated', 'have');
                    replaceTitle('theyConjugated', 'have');
                    replaceTitle('youconjugated', 'have');
                    replaceValue(iterator.verbPresentPerfect);
                    break;
                case "verbFuture":
                    replaceTitle('iConjugated', '');
                    replaceTitle('heConjugated', '');
                    replaceTitle('sheConjugated', '');
                    replaceTitle('itConjugated', '');
                    replaceTitle('weConjuated', '');
                    replaceTitle('theyConjugated', '');
                    replaceTitle('youconjugated', '');
                    replaceValue(iterator.verbFuture);
                    break;
                default:
                    break;
            }
        }
    }
}