/*jshint esversion: 6 */

fullPronounsCombobox('pronounsCombobox');

function bringProperties() {
    let pronoun = document.getElementById('pronounsCombobox').value;
    for (const iterator of dataPronouns) {
        switch (pronoun) {
            case iterator.nombreEspanol:
                document.getElementById('subjetPronoun').innerHTML = iterator.subjectPronouns;
                document.getElementById('objectPronoun').innerHTML = iterator.objectPronouns;
                document.getElementById('possessiveAdjetive').innerHTML = iterator.possessiveAdjetives;
                document.getElementById('possessivePronouns').innerHTML = iterator.possessivePronouns;
                document.getElementById('reflexivePronoun').innerHTML = iterator.reflexivePronouns;
                break;
            default:
                break;
        }
    }
}